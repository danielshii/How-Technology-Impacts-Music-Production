import Paragraph from "../Paragraph";
import { texts } from "../Texts";
import flStudio from "../../images/flstudio.gif";
import Image from "../Image";
import eq from "../../images/eq.jpg";

function PageOne() {
  return (
    <div className="page">
      <div className="title-section">
        <h1>How Technology Shapes Music Production</h1>
        <h2>Daniel Shi • ENGL 304</h2>
      </div>
      <hr />
      <p className="intro">{texts.intro}</p>
      <hr />
      <span className="container">
        <Paragraph header="DAWs and Controllers" width="80%">
          <p>{texts.dawsAndControllers.p1}</p>
        </Paragraph>
        <Image
          image={flStudio}
          alt="FL Studio in Action"
          caption="FL Studio in Action"
        />
      </span>
      <Image
        image={eq}
        alt="EQ"
        caption="FL Studio's Parametric EQ. Producers can drag the numbered knobs up and down to balance out the frequencies of their song."
        float=""
      />
      <span className="container">
        <Paragraph width="100%">
          <p className="column-p">
            {texts.dawsAndControllers.p2 + " " + texts.midi}
          </p>
        </Paragraph>
      </span>
    </div>
  );
}

export default PageOne;
