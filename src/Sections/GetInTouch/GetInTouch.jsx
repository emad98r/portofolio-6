import SectionTitle from "../../Components/SectionTitles/SectionTitle";
import "./GetInTouch.scss";
import {
  FaMapMarker,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <SectionTitle title1="get in" title2="touch" />
      <div className="container">
        <div className="info">
          <h3>Get In Touch !</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact-info">
            <section>
              <FaMapMarker />
              <div className="data">
                <h5>current address</h5>
                <p>Yemen</p>
              </div>
            </section>
            <section>
              <FaEnvelope />
              <div className="data">
                <h5>EMAIL</h5>
                <p>emadrashadm@gmail.com</p>
              </div>
            </section>
            <section>
              <FaPhoneAlt />
              <div className="data">
                <h5>PHONE</h5>
                <p>+967 782881372</p>
              </div>
            </section>
          </div>
          <div className="s-m">
            <a href="https://wa.me/967782881372" target="_bolck">
              <FaWhatsapp />
            </a>

            <a href="mailto:emadrashadm@gmail.com" target="_bolck">
              <SiGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/emad-rashad-alareqih/"
              target="_bolck"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/emad98r" target="_bolck">
              <FaGithub />
            </a>
          </div>
        </div>
        <form
          action="https://formsubmit.co/emadrashadm@gmail.com"
          method="POST"
        >
          <div className="your-info">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            type="text"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">
            <FaLocationArrow />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
