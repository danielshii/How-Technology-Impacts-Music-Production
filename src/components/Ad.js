function Ad() {
  const video = (
    <iframe
      src="https://www.youtube.com/embed/bocCC3xPMGo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );

  return (
    <div className="advertisement">
      <h2>Listen to Daniel Shi's new single JOYRIDE now!</h2>
      {video}
      <p>Created in FL Studio</p>
    </div>
  );
}

export default Ad;
