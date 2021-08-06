/// <reference types="react" />
interface SpotifyProps {
    [key: string]: any;
    link: string;
    width: number | string;
    height: number | string;
    frameBorder: number | string;
    allow: string;
}
declare const Spotify: ({ link, width, height, frameBorder, allow, ...props }: SpotifyProps) => JSX.Element;
export default Spotify;
