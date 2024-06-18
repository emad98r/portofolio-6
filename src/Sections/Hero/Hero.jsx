import "./Hero.scss";

import photo from "../../Assets/Images/mypic.png";
import { DownloadButton } from "../../Components/indexCom";
import resumeInEng from "../../Assets/resumes/Emad cv en.pdf";
import resumeInArb from "../../Assets/resumes/Emad cv ar.pdf";
import { SubDownloadButton } from "../../Components/Buttons/Buttons";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="img-side">
          <div className="wrapper">
            <img src={photo} alt="" />
          </div>
          <div className="button-wrapper">
            <DownloadButton
              className="resume-eng"
              dFile={resumeInEng}
              name="Resume in English"
            />
            <SubDownloadButton
              className="resume-arb"
              dFile={resumeInArb}
              name="Resume in Arabic"
            />
          </div>
        </div>
        <div className="info">
          <h1>EMAD RASHAD, WEB DEVELOPER</h1>
          <p>
            A front-end developer based in Yemen, I bring over 6 years of
            extensive experience in web development. My expertise lies in
            crafting dynamic, user-centric websites that blend creativity with
            functionality. Throughout my career, I have honed my skills in
            front-end technologies, ensuring seamless user experiences and
            responsive designs. I have experience in HTML, CSS, JavaScript, and
            React, which enable me to build robust and interactive web
            applications.
          </p>
          <i># frontend developer # web developer # freelancer</i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
