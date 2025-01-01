import React from "react";
import "./main.scss";
import sigiriya from "../../assets/sigiriya.jpg";
import ella from "../../assets/ella.jpg";
import galle_fort from "../../assets/galle_fort.jpg";
import mirissa from "../../assets/mirissa.jpg";
import horton_plains from "../../assets/horton_plains.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";

const Data = [
  {
    id: 1,
    imgSrc: sigiriya,
    destTitle: "Sigiriya",
    location: "Dambulla",
    grade: "CULTURAL HERITAGE",
    fees: "$20",
    description:
      "Sigiriya, also known as Lion Rock, is a UNESCO World Heritage Site and an iconic symbol of Sri Lanka's rich history and culture.",
  },
  {
    id: 2,
    imgSrc: ella,
    destTitle: "Ella",
    location: "Badulla",
    grade: "SCENIC BEAUTY",
    fees: "$15",
    description:
      "Ella is a small town surrounded by lush greenery, tea plantations, and stunning hiking trails such as Little Adam's Peak and Ella Rock.",
  },
  {
    id: 3,
    imgSrc: galle_fort,
    destTitle: "Galle Fort",
    location: "Galle",
    grade: "HISTORICAL LANDMARK",
    fees: "$10",
    description:
      "Galle Fort is a well-preserved colonial fortification showcasing Dutch architecture and breathtaking coastal views.",
  },
  {
    id: 4,
    imgSrc: mirissa,
    destTitle: "Mirissa",
    location: "Matara",
    grade: "BEACH PARADISE",
    fees: "$0",
    description:
      "Mirissa is famous for its golden beaches, whale watching, and vibrant nightlife, making it a must-visit destination.",
  },
  {
    id: 5,
    imgSrc: horton_plains,
    destTitle: "Horton Plains",
    location: "Nuwara Eliya",
    grade: "NATURE TRAIL",
    fees: "$25",
    description:
      "Horton Plains National Park is a biodiversity hotspot offering spectacular views, waterfalls, and the famous World's End cliff.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destination</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees fles">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details<BsClipboard2Check className="icon"/>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
