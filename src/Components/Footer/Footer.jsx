import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./footer.scss";
import img from "../../assets/sea2.avif";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  //animations
      useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <section className="footer">
      <div className="imageDiv">
        <img src={img} type="sea2/avif" alt="A scenic beach view" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IT TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              Send
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footercard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              At Serena Lanka, we specialize in crafting unforgettable journeys
              tailored to your dreams. Whether you're seeking serene getaways,
              thrilling adventures, or cultural explorations, our dedicated team
              is here to ensure every detail is perfect. With expert guidance,
              personalized service, and a passion for travel, we turn your
              wanderlust into cherished memories. Let us take you places!
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaSquareInstagram className="icon" />
              <FaFacebook className="icon" />
              <AiFillTikTok className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Insurances
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Payment
              </li>
            </div>
            {/*second*/}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">Partners</span>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Hostelworld
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Tripadvisor
              </li>
            </div>
            {/*third*/}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">Last Minute</span>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Kandy
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Galle
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Nuwara Eliya
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Jaffna
              </li>
              <li className="footerList flex">
                <FiChevronRight class="icon" />
                Sigiriya
              </li>
            </div>

          </div>
          <div className="footerDiv flex">
            <small>TRAVEL WITH US</small>
            <small>COPYRIGHTS RESERVED - Chandures Priyavindya</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
