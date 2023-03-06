import React from "react";
import "./Watchlist.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Carousel from "../../Components/Carousel/Carousel";

function Watchlist() {
  return (
    <div className="Watchlist">
      <div className="Watchlist-Upper">
        <h1>WatchList</h1>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
            User Wallet Addresses
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              Eth : 0xb794f5ea0ba39494ce839613fffba74279579268
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Sol : HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Ada :
              addr1q9tgmaakd56vnxxpzp3yr4gzmyz625p3f79fkyfe07zyfp3t7gt7aphhja085ydsmaxqw9277xd85fvgzcetkwpate3qdmwu27
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="WatchListPage-Container-Body">
        <h2>Projects Registered For : </h2>
        <div className="favoritesData">
          <Carousel chain={"Registered"}></Carousel>
        </div>
        <h2>Upcoming Projects : </h2>
        <div className="upcomingData">
          <Carousel chain={"Upcoming"}></Carousel>
        </div>
        <h2>Projects Minting : </h2>
        <div className="projectsMinting">
          <Carousel chain={"Minting"}></Carousel>
        </div>
        <h2>Favorites : </h2>
        <div className="upcomingData">
          <Carousel chain={"Favorites"}></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
