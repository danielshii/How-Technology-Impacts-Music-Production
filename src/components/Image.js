function Image(props) {
  const { float, image, alt, caption } = props;

  return (
    <div className="image" id={"image-" + float}>
      <figure>
        <img src={image} alt={alt} />
        <figcaption>
          <i>{caption}</i>
        </figcaption>
      </figure>
    </div>
  );
}

export default Image;
