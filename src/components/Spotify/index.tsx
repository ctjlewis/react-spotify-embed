import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLSpanElement> {
  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const Spotify = ({
  link,
  style = {},
  wide = false,
  width = wide ? "100%" : 300,
  height = wide ? 80 : 380,
  frameBorder = 0,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        borderRadius: 8,
        lineHeight: 0,
        width,
        ...style,
      }}
      {...props}
    >
      <iframe
        title="Spotify Web Player"
        src={`https://open.spotify.com/embed${url.pathname}`}
        width={width}
        height={height}
        frameBorder={frameBorder}
        allow={allow}
        style={{ display: "block", border: 0 }}
      />
    </span>
  );
};
