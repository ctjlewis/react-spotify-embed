'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime.js');

const Spotify = ({ link = '', width = '300', height = 380, frameBorder = 0, allow = 'encrypted-media', ...props }) => {
    const url = new URL(link);
    // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("iframe", Object.assign({ src: `https://open.spotify.com/embed${url.pathname}`, width: width, height: height, frameBorder: frameBorder, allow: allow }, props), void 0) }, void 0));
};

exports.default = Spotify;
//# sourceMappingURL=react-spotify-embed.development.cjs.map
