# React Spotify Embed

[NPM](https://npmjs.com/package/react-spotify-embed) |
[Demo](https://react-spotify-embed.vercel.app)

Use this component to create a Spotify embed for a given Spotify link. In
Spotify, click ••• > Copy Link, and paste it in the `<Spotify link={...}>` prop.

Any link should work (albums, songs, etc.). All other props on the Spotify embed
widget can also be overridden (see
[here](https://developer.spotify.com/documentation/embeds/)).

```tsx
// Displaying a single track.
<Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />

// Displaying an album.
<Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />

// Using `wide` attribute.
<Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
```

**Demo: Normal song link, Album link, and `wide`**

<img width="400px" height="auto" src="https://github.com/ctjlewis/react-spotify-embed/raw/master/public/screenshot.png">

### Example

This repository itself is a Next project demonstrating the use of this
component.