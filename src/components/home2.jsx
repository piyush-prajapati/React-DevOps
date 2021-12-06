import React from "react";
import "../css/home.css";
import Navbar from "./navbar";
import Main from "./main";
import Logout from "./logout";

function Home() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Main />
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
          <Logout />
        </div>
      </div>
    </div>
  );
}
export default Home;
