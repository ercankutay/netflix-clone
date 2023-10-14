import React, { useState } from "react";
import Row from "./Row";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";

function App() {
  const rowItems = [
    { category: "popular", title: "Popüler" },
    { category: "now_playing", title: "Vizyondakiler" },
    { category: "top_rated", title: "Tüm Zamanların En iyileri" },
    { category: "upcoming", title: "Yakında Vizyonda" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <div className="App">
        <nav className="navbar">
          <ul className="navbar-list">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png"
              alt="Logo"
              className="navbar-logo"
            />
            <li>
              <a href="#" className="navbar-item">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#" className="navbar-item">
                Diziler
              </a>
            </li>
            <li>
              <a href="#" className="navbar-item">
                Filmler
              </a>
            </li>
            <li>
              <a href="#" className="navbar-item">
                Yeni ve Popüler
              </a>
            </li>
            <li>
              <a href="#" className="navbar-item">
                Listem
              </a>
            </li>
            <li>
              <a href="#" className="navbar-item">
                Dile Göre Göz At
              </a>
            </li>
            <li className="navbar-item">
              {searchTerm === "trim" ? (
                <input
                  type="text"
                  value={searchTerm}
                  placeholder=""
                  className="navbar-search-active"
                  readOnly
                />
              ) : (
                <span
                  className="navbar-search-inactive"
                  onClick={() => setSearchTerm("trim")}
                >
                  Trim
                </span>
              )}
            </li>
            <li className="navbar-item">
              <FontAwesomeIcon icon={faSearch} style={{ color: "#0f63f5" }} />
            </li>
            <div className="navbar-right">
              <li className="navbar-link">
                <FontAwesomeIcon icon={faSearch} style={{ color: "#eebec5" }} />
              </li>
              <li className="navbar-link">
                <FontAwesomeIcon icon={faBell} style={{ color: "#df0c0c" }} />
              </li>
              <a href="#" className="navbar-link">
                Sign Up
              </a>
              <a href="#" className="navbar-link">
                Login
              </a>
            </div>
          </ul>
        </nav>
        <Banner />
        {rowItems.map((item) => (
          <div key={item.category}>
            <h2>{item.title}</h2>
            <Row category={item.category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
