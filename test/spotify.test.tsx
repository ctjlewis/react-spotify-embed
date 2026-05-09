import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Spotify } from "../src";

describe("Spotify", () => {
  test("renders an iframe pointing at /embed/<path>", () => {
    const html = renderToStaticMarkup(
      <Spotify link="https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1" />
    );
    expect(html).toContain('src="https://open.spotify.com/embed/track/1KFxcj3MZrpBGiGA8ZWriv"');
    expect(html).toContain('width="300"');
    expect(html).toContain('height="380"');
  });

  test("strips intl-* path segments", () => {
    const html = renderToStaticMarkup(
      <Spotify link="https://open.spotify.com/intl-es/track/1KFxcj3MZrpBGiGA8ZWriv" />
    );
    expect(html).toContain('src="https://open.spotify.com/embed/track/1KFxcj3MZrpBGiGA8ZWriv"');
    expect(html).not.toContain("intl-");
  });

  test("wide layout uses 100% width and 80px height", () => {
    const html = renderToStaticMarkup(
      <Spotify wide link="https://open.spotify.com/album/527y5zpqdZc446EbgWPd6c" />
    );
    expect(html).toContain('width="100%"');
    expect(html).toContain('height="80"');
  });

  test("explicit width/height override defaults", () => {
    const html = renderToStaticMarkup(
      <Spotify link="https://open.spotify.com/track/abc" width={500} height={200} />
    );
    expect(html).toContain('width="500"');
    expect(html).toContain('height="200"');
  });
});
