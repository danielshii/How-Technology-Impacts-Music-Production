import { useLayoutEffect, useRef, useState } from "react";

function Image(props) {
  const [captionWidth, setCaptionWidth] = useState(0);

  const { float, image, alt } = props;

  const ref = useRef(null);

  useLayoutEffect(() => {
    setCaptionWidth(ref.current.offsetWidth - 10);
  }, []);

  return (
    <div
      className="image"
      style={{
        float: float,
        // width: (100 * scale).toString() + "%",
        // height: (100 * scale).toString() + "%",
      }}
    >
      <img src={image} alt={alt} ref={ref} />
      <p style={{ width: captionWidth.toString() + "px" }}>
        <i>{props.caption}</i>
      </p>
    </div>
  );
}

export default Image;
