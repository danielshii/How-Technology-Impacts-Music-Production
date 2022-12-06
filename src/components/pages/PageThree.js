import references from "../../static/ShiReferences01.htm";
import images from "../../static/ShiImages.htm"
import Conclusion from "../Conclusion";

function PageThree() {
  return (
    <div className="page">
      <Conclusion />
      <div className="bib-container">
        <iframe frameBorder={0} src={references}></iframe>
        <iframe frameBorder={0} src={images}></iframe>
      </div>
    </div>
  );
}

export default PageThree;
