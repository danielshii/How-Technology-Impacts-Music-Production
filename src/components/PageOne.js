import Paragraph from "./Paragraph";
import { texts } from "./Texts";
import flStudio from "../images/flstudio.gif";
import Image from "./Image";
import keshi from "../images/keshi.jpg";
import eq from "../images/eq.jpg";
import slander from "../images/slander.jpg";
import studio from "../images/studio.JPG";

function PageOne() {
  return (
    <div className="page">
      <div className="title-section">
        <h1>How Technology Shapes Music Production</h1>
        <h2>Daniel Shi • ENGL 304</h2>
      </div>
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
      <span className="container">
        <Paragraph width="100%">
          <Image
            image={eq}
            alt="EQ"
            caption="FL Studio's Parametric EQ. Producers can drag the numbered knobs up and down to balance out the frequencies of their song."
            float="left"
          />
          <p>{texts.dawsAndControllers.p2 + " " + texts.midi}</p>
        </Paragraph>
      </span>
      {/* <Paragraph width="100%">
        <p>{texts.midi}</p>
      </Paragraph> */}
      <span className="container">
        <Paragraph
          header="The Home Studio and the Independent Artist"
          width="150%"
        >
          <Image
            image={keshi}
            alt="Keshi in his home studio"
            caption="Singer, songwriter, and producer Keshi in his home studio. The artist has accumulated over 1 billion streams on Spotify all while working from home."
            float="left"
          />
          
          <p>{texts.homeStudio}</p>
        </Paragraph>
      </span>
      {/* <Image
            image={studio}
            alt="Studio"
            caption="A traditional studio configuration in the 90s."
            float="right"
          /> */}
      <span className="container">
        <Paragraph header="The Rise of EDM" width="100%">
          <Image
            image={slander}
            alt="Slander"
            caption="EDM Group Slander delivering a live performance to their fans."
            float="right"
          />
          <p>{texts.edm.p1}</p>
        </Paragraph>
      </span>
      <Paragraph header="The Synthesizer" width="100%">
        <p>{texts.edm.p2}</p>
      </Paragraph>
    </div>
  );
}

export default PageOne;
