const Spotify = ({
  link = '',
  width = '300',
  height = 380,
  frameBorder = 0,
  allow = 'encrypted-media',
  ...props
}) => {
  const url = new URL(link);
  // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed${url.pathname}`}
        width={width}
        height={height}
        frameBorder={frameBorder}
        allow={allow}
        {...props}
      />
    </div>
  );
}

export default Spotify;