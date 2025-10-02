import SectionTitle from "../../Components/SectionTitles/SectionTitle";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <SectionTitle title1="About" title2="Me" />
      <div className="container">
        <div className="personal-info">
          <h3>PERSONAL INFORMATION</h3>
          <div className="all-infos">
            <div className="info">
              <p>
                name : <span>Emad Al-areqih</span>
              </p>
              <p>
                Current Address : <span>Malaysia</span>
              </p>
            </div>
            <div className="info"></div>
            <div className="info">
              <p>
                Phone : <span>+60 1164359792</span>
              </p>
              <p>
                email : <span>emadrashadm@gmail.com</span>
              </p>
            </div>
            <div className="info">
              <p>
                Freelance : <span>Available</span>
              </p>
              <p>
                Languages : <span>English, Arabic</span>
              </p>
            </div>
          </div>
        </div>
        <div className="years-of-exp">
          <div className="data">
            <h2>
              6 <span>+</span>
            </h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="data">
            <h2>
              45 <span>+</span>
            </h2>
            <p>COMPLETED PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
