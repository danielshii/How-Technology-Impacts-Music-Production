function Image(props) {
  const scale = props.scale ?? 1;

  return (
    <div className="image">
      <img
        style={{
          width: (100 * scale).toString() + "%",
          height: (100 * scale).toString() + "%",
        }}
        src={props.image}
        alt={props.alt}
      />
      <i style={{ width: (100 * scale).toString() + "%" }}>{props.caption}</i>
    </div>
  );
}

export default Image;
