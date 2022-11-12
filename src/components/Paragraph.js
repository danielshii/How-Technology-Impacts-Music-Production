function Paragraph(props) {
  const { header, width } = props;
  return (
    <div className="paragraph" style={{width: width}}>
      {header ? <h3>{header}</h3> : <></>}
      <div>{props.children}</div>
    </div>
  );
}

export default Paragraph;
