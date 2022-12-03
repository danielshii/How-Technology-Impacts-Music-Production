import references from "../../static/ShiReferences01.htm";
import Conclusion from "../Conclusion";

function PageThree() {
  return (
    <div className="page">
      <Conclusion />
      <div className="bib-container">
        <iframe frameBorder={0} src={references}></iframe>
      </div>
    </div>
  );
}

export default PageThree;
