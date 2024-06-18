import SectionTitle from "../../Components/SectionTitles/SectionTitle";
import "./Services.scss";

import RESPONSIVE from "../../assets/Icons/web-template.png";
import DESIGN from "../../assets/Icons/graphics-design.png";
import CODE from "../../assets/Icons/coding.png";
import SUPPORT from "../../assets/Icons/SUPPORT.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <SectionTitle title1="what i" title2="provide" />
        <div className="service-wrapper">
          <div className="service-card">
            <div className="img-wrapper">
              <img src={RESPONSIVE} alt="" />
            </div>
            <div className="info">
              <h3>Responsive website</h3>
              <p>
                Designing a webpage to be fully responsive, ensuring it looks
                and functions perfectly on any device whether it's a desktop,
                tablet, or smartphone. A responsive design will also improve
                your search engine rankings.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={DESIGN} alt="" />
            </div>
            <div className="info">
              <h3>Web & Graphic Design </h3>
              <p>
                Create exceptional designs for templates, logos, posters, and
                brochures. By blending innovative concepts with striking
                visuals, I ensure your brand stands out.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={CODE} alt="" />
            </div>
            <div className="info">
              <h3>Code Quality</h3>
              <p>
                Developing pristine code devoid of errors or discrepancies that
                may compromise the functionality or aesthetics of the webpage is
                paramount.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={SUPPORT} alt="" />
            </div>
            <div className="info">
              <h3>Exceptional Support</h3>
              <p>
                Seeking out assistance is crucial should any issues manifest on
                the webpage I've meticulously coded. It ensures that any
                unexpected glitches or malfunctions are swiftly addressed and
                resolved, maintaining the integrity and smooth functionality of
                the site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
