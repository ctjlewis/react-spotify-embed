/// <reference types="react" />
declare const Spotify: ({ link, width, height, frameBorder, allow, ...props }: {
    [x: string]: any;
    link?: string | undefined;
    width?: string | undefined;
    height?: number | undefined;
    frameBorder?: number | undefined;
    allow?: string | undefined;
}) => JSX.Element;
export default Spotify;
