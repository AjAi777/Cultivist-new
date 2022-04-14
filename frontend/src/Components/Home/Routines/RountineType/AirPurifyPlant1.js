import React from "react";
import { useHistory } from "react-router-dom";

export default function AirPurifyPlant1() {
  const history = useHistory();

  const routeChange6 = () => {
    history.push("/shop");
  };
  return (
    <>
      <div className="row flex-lg-row-reverse shopBanner6 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3">
        <h2 className="ap-bannerHead">
          Healthy Lungs Air purifier set (with self watering pots)
        </h2>
        <div className="apImg justify-content-md-center bannerONE text-center">
          <img
            src='https://ik.imagekit.io/mjwt5ns6bbx/C4CF53CC-39A9-4ABB-939B-46859F4C5950_CBj43RQyp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145456947'
            className="bannerIMG"
            alt="BGgray"
          ></img>
        </div>
        <div className="apContent">
          <p className="lead mt-4 para mb-3 text-start">
            <li className="bannerText">
              Sansevieria Trifasciata (Viper’s Bowstring Hemp)
            </li>
            <li className="bannerText">Sansevieria Trifasciata ‘Laurentii’</li>
            <li className="bannerText">
              Sansevieria Trifasciata ‘Golden Hahnii’
            </li>
          </p>
        </div>
        <div className="ap-btn">
          <div className="bannerHelp">
            <strong>Crassulacean Acid Metabolism</strong> helps absorbs CO2 even at night <strong>(Apt
            for bedroom placement)</strong>
          </div>
          <button
            className="shopBannerButton mt-1 apBtn"
            onClick={routeChange6}
            type="button"
          >
            <strong className="shopBannerText">
              Buy at <span style={{ fontSize: "17px" }}>₹</span> 699
            </strong>
          </button>
        </div>
      </div>
    </>
  );
}
