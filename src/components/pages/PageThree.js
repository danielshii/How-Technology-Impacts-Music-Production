import references from "../../static/ShiReferences01.htm";
import images from "../../static/ShiImages.htm";
import Conclusion from "../Conclusion";

function PageThree() {
  return (
    <div className="page">
      <Conclusion />
      <div className="bib-container">
        <iframe title="references" frameBorder={0} src={references}></iframe>
        <iframe title="images" frameBorder={0} src={images}></iframe>
      </div>
    </div>
  );
}

export default PageThree;
