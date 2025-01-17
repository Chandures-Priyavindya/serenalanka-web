import React, {useEffect} from "react";
import "./home.scss";
import img from "../../assets/sea2.avif";
import { FaLocationDot } from "react-icons/fa6";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //animations
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="home">
      <div className="overlay"></div>

      <img src={img} type="sea2/avif" alt="A scenic beach view" />

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinstionInput">
            <label htmlFor="city">Search your destinstion:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here....." />
              <FaLocationDot className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$3000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="3000" min="1000"/>
            </div>
          </div>

          <div className="searchOption flex">
          <HiFilter className="icon"/>
          <span>More Filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
          <FiFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <FaTripadvisor className="icon"/>

          </div>
          <div className="lefttIcons">
          <IoIosList className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
