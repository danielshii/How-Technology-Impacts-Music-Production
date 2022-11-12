function Paragraph(props) {
  const { header, width } = props;
  return (
    <div className="paragraph" style={{ width: width }}>
      <h3>{header}</h3>
      {props.children}
    </div>
  );
}

export default Paragraph;
