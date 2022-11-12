import Paragraph from "./Paragraph";
import { texts } from "./Texts";
import flStudio from "../images/flstudio.gif";
import Image from "./Image";
import keshi from "../images/keshi.jpg";

function PageOne() {
  return (
    <div className="page">
      <div className="title-section">
        <h1>How Technology Shapes Music Production</h1>
        <h2>Daniel Shi • ENGL 304</h2>
      </div>
      <span>
        <Paragraph header="DAWs and Controllers" width="50%">
          <p>{texts.dawsAndControllers}</p>
        </Paragraph>
        <Image
          image={flStudio}
          alt="FL Studio in Action"
          caption="FL Studio in Action"
          scale={0.8}
        />
      </span>
      <span>
        <Image
          image={keshi}
          alt="Keshi in his home studio"
          caption="Singer, songwriter, and producer Keshi in his home studio. The artist has accumulated over 1 billion streams on Spotify all while working from home."
          scale={0.5}
        />
        <Paragraph
          header="The Home Studio and the Independent Artist"
          width="75%"
        >
          <p>{texts.homeStudio}</p>
        </Paragraph>
      </span>
      <Paragraph header="The Rise of EDM" width="90%">
        <p>{texts.edm}</p>
      </Paragraph>
    </div>
  );
}

export default PageOne;
