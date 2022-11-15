import keshi from "../../images/keshi.jpg";
import slander from "../../images/slander.jpg";
import Ad from "../Ad";
import Paragraph from "../Paragraph";
import { texts } from "../Texts";
import Image from "../Image";

function PageTwo(props) {
  return (
    <div className="page">
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
        <Ad />
        <p>{texts.edm.p2}</p>
      </Paragraph>
    </div>
  );
}

export default PageTwo;
