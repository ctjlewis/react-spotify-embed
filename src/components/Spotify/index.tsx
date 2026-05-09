import { type IframeHTMLAttributes } from "react";

interface SpotifyProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  link: string
  wide?: boolean
}

export const Spotify = ({
  link,
  style = {},
  wide = false,
  width = wide ? "100%" : 300,
  height = wide ? 80 : 380,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={width}
      height={height}
      allow={allow}
      style={{
        border: 0,
        borderRadius: 8,
        clipPath: "inset(0 round 8px)",
        colorScheme: "normal",
        ...style,
      }}
      {...props}
    />
  );
};
