import React from "react";
import "../css/home.css";
import Data from "../metadata.json";

function Navbar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-fire"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Blaze Deploy</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Org Metadata</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        <i className="fas fa-fw fa-cog"></i>
        Components
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="far fa-file-code"></i>
          <span>Apex Class</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded back-apex">
            {Data.apexClass.map((val, key) => {
              return (
                <span
                  className="collapse-item moveApex components-item"
                  key={key}
                >
                  {val}
                </span>
              );
            })}
            {/* <!-- <h6 className="collapse-header">Custom Components:</h6> --> */}
            {/* <% for (let ac of apexclassName) {%>
                        <span className="collapse-item moveApex components-item" apex-data="<%= ac %>"><%= ac %></span>
                        <% } %> */}
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="far fa-file-code"></i>
          <span>LWC</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded lwc-list">
            {Data.lwcList.map((val, key) => {
              return (
                <span
                  className="collapse-item moveLwc components-item"
                  key={key}
                >
                  {val}
                </span>
              );
            })}
            {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6> --> */}
            {/* <% for (let comp of lwcList) {%>
                            <span className="collapse-item moveLwc components-item" lwc-data="<%= comp %>"><%= comp %></span>
                        <% } %> */}
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseObjects"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-suitcase"></i>
          <span>Custom Object</span>
        </a>
        <div
          id="collapseObjects"
          className="collapse"
          aria-labelledby="headingObjects"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded custom-object-list">
            {Data.objectList.map((val, key) => {
              return (
                <span
                  className="collapse-item moveCustomObject components-item"
                  key={key}
                >
                  {val}
                </span>
              );
            })}
            {/* <!-- <h6 className="collapse-header">Custom Utilities:</h6> --> */}
            {/* <% for (let obj of objectList) {%>
                  <span className="collapse-item moveCustomObject components-item" custom-object-data="<%= obj %>"><%= obj %></span>
                  <% } %> */}
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading" style={{ marginBottom: "1rem" }}>
        <i className="fas fa-people-arrows"></i>
        Profiles
      </div>

      {/* <!-- Test code --> */}
      <div className="back-profile">
        {/* <% for(let profile of profileList) {%>  */}

        {Data.profiles.map((val, key) => {
          return (
            <li className="nav-item hover-none" key={key}>
              <span className="profile-list-item moveProfile">
                <i className="fas fa-user-tie"></i> {val}{" "}
              </span>
            </li>
          );
        })}
        {/* <span className="profile-list-item moveProfile" profile-data="<%= profile  %>"><i className="fas fa-user-tie"></i> <%= profile %>  </span> */}
        {/* <% } %> */}
      </div>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      {/* <!-- <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div> --> */}
    </ul>
  );
}

export default Navbar;
