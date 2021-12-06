import React from "react";
import "../css/home.css";
import Data from "../metadata.json";

function Home() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
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
                    <span className="collapse-item moveApex components-item">
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
                    <span className="collapse-item moveLwc components-item">
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
                    <span className="collapse-item moveCustomObject components-item">
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
                <li className="nav-item hover-none">
                  <span class="profile-list-item moveProfile">
                    <i class="fas fa-user-tie"></i> {val}{" "}
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
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div>

          {/* <!-- Sidebar Message --> */}
          {/* <!-- <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div> --> */}
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Search --> */}
              {/* <!-- <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form> --> */}

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">3</span>
                  </a>
                  {/* <!-- Dropdown - Alerts --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">30 Mins Ago</div>
                        <span className="font-weight-bold">
                          Deployed to Production , Tests Running.
                        </span>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">45 Mins Ago</div>
                        <span className="font-weight-bold">
                          Deployed to Sandbox 1 , Tests Running.
                        </span>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">Nov 25, 2021</div>
                        <span className="font-weight-bold">
                          Successfully Deployment to Production.
                        </span>
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                {/* <!-- Nav Item - Messages --> */}

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Himanshu Nehra
                    </span>
                    <i className="fas fa-user-ninja"></i>
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Deployment Cluster</h1>
                <div className="row d-flex align-items-right">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="d-sm-inline-block btn btn-md btn-success shadow-sm mr-3 dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-upload fa-md text-white-50"></i>{" "}
                      Instant Deploy
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <span
                        className="dropdown-item deployclick cusrsor-pointer-className instant-deploy-item"
                        id="production-deploy"
                        data-org="Production"
                      >
                        Production
                      </span>
                      <span
                        className="dropdown-item deployclick cusrsor-pointer-className instant-deploy-item"
                        id="sandbox-deploy"
                        data-org="Sandbox"
                      >
                        Sandbox
                      </span>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="d-sm-inline-block btn btn-md btn-primary shadow-sm dropdown-toggle"
                      id="dropdownSchedule"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-calendar-alt fa-md text-white-50"></i>{" "}
                      Schedule Deployment
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownSchedule"
                      style={{ minWidth: "16em" }}
                    >
                      <a
                        className="dropdown-item cusrsor-pointer-className"
                        data-toggle="modal"
                        data-target="#scheduleModal"
                      >
                        Production
                      </a>
                      <a
                        className="dropdown-item cusrsor-pointer-className"
                        data-toggle="modal"
                        data-target="#scheduleModal"
                      >
                        Sandbox
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row cardrow">
                {/* <!-- Earnings (Monthly) Card Example --> */}
                {/* <!-- <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Earnings (Monthly)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2 active-deployment-card">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Active Deployments{" "}
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800 get-active">
                            2
                          </div>
                        </div>
                        <div className="col-auto">
                          {/* <!-- <i className="fas fa-dollar-sign fa-2x text-gray-300"></i> --> */}
                          <i className="fas fa-broadcast-tower fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                {/* <!-- <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" role="progressbar"
                                                            style={width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}

                {/* <!-- Pending Requests Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2 schedule-deployment-card">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Scheduled Deployments
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800 get-scheduled">
                            5
                          </div>
                        </div>
                        <div className="col-auto">
                          {/* <!-- <i className="fas fa-comments fa-2x text-gray-300"></i> --> */}
                          <i className="fas fa-calendar-alt fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4" id="deployment-card">
                  <div
                    className="card border-left-info shadow h-100 py-2"
                    id="deployment_div_1"
                  >
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2 schedule-deployment-card">
                          <div
                            className="text-xs font-weight-bold text-info text-uppercase mb-1"
                            id="deployment-card-html"
                          >
                            {" "}
                            Deploying to Production
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                              id="deployment-status-bar"
                              role="progressbar"
                              style={{ width: "1%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Deploying to Production</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={width: 15%"></div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
              </div>

              {/* <!-- Content Row --> */}

              <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Staging
                      </h6>
                      {/* <!-- <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div> --> */}
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="list-card">
                      <div className="chart-area">
                        {/* <!-- <canvas id="myAreaChart"></canvas> --> */}
                        <div className="row">
                          <div className="components col-6">
                            <h5>Components</h5>
                            <div className="component-list">
                              <div className="right-apex">
                                <span>Apex className</span>
                                <ul className="add-component-apex-className"></ul>
                              </div>
                              <div className="right-lwc">
                                <span>LWC</span>
                                <ul className="add-component-lwc"></ul>
                              </div>
                              <div className="right-custom-object">
                                <span>Custom Object</span>
                                <ul className="add-component-custom-object"></ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <h5>Profiles</h5>
                            <ul className="add-profile"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Staging Sources
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart"></canvas>
                      </div>
                      <div className="mt-4 text-center small">
                        <span className="mr-2" data-comps="70">
                          <i className="fas fa-circle text-primary"></i>{" "}
                          Componets : <span id="chart-components">0</span>
                        </span>
                        <span className="mr-2" data-profiles="90">
                          <i className="fas fa-circle text-success"></i>{" "}
                          Profiles : <span id="chart-profiles">0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">
                {/* <!-- Content Column --> */}
                {/* <!-- <div className="col-lg-6 mb-4"> --> */}

                {/* <!-- Project Card Example --> */}
                {/* <!-- <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">Server Migration <span
                                            className="float-right">20%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar" style={width: 20%"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Sales Tracking <span
                                            className="float-right">40%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar" style={width: 40%"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Customer Database <span
                                            className="float-right">60%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={width: 60%"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Payout Details <span
                                            className="float-right">80%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={width: 80%"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Account Setup <span
                                            className="float-right">Complete!</span></h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={width: 100%"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div> --> */}

                {/* <!-- Color System --> */}
                {/* <!-- <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-primary text-white shadow">
                                        <div className="card-body">
                                            Primary
                                            <div className="text-white-50 small">#4e73df</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-success text-white shadow">
                                        <div className="card-body">
                                            Success
                                            <div className="text-white-50 small">#1cc88a</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            Info
                                            <div className="text-white-50 small">#36b9cc</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-warning text-white shadow">
                                        <div className="card-body">
                                            Warning
                                            <div className="text-white-50 small">#f6c23e</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-danger text-white shadow">
                                        <div className="card-body">
                                            Danger
                                            <div className="text-white-50 small">#e74a3b</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-secondary text-white shadow">
                                        <div className="card-body">
                                            Secondary
                                            <div className="text-white-50 small">#858796</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-light text-black shadow">
                                        <div className="card-body">
                                            Light
                                            <div className="text-black-50 small">#f8f9fc</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Dark
                                            <div className="text-white-50 small">#5a5c69</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4"> --> */}

                {/* <!-- Illustrations --> */}
                {/* <!-- <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={width: 25rem;"
                                            src="img/undraw_posting_photo.svg" alt="...">
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div> --> */}

                {/* <!-- Approach --> */}
                {/* <!-- <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div className="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                        custom components and custom utility classNamees.</p>
                                    <p className="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classNamees.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> --> */}
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- End of Main Content --> */}

              {/* <!-- Footer --> */}
              {/* <!-- <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer> --> */}
              {/* <!-- End of Footer --> */}
            </div>
            {/* <!-- End of Content Wrapper --> */}
          </div>
          {/* <!-- End of Page Wrapper --> */}

          {/* <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>

          {/* <!-- Logout Modal--> */}
          <div
            className="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="http://localhost:3000/">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="scheduleModal"
            className="modal fade"
            role="combobox"
            data-keyboard="false"
            data-backdrop="static"
          >
            <div className="modal-dialog">
              {/* <!-- Modal content--> */}
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-primary">
                    Choose Deployment Time
                  </h4>
                </div>
                <div className="modal-body">
                  {/* <!-- <div id="flatpickeruseid"></div> --> */}
                  <input
                    id="flatpickeruseid"
                    type="datetime-local"
                    placeholder="Select Date and Time.."
                  />
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-start">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-success btn-sm schedule-deployment-click"
                        data-dismiss="modal"
                        onClick="scheduleDeployment()"
                      >
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {flatpickr("input[type=datetime-local]", {
            enabletime: true,
            altInput: true,
            altFormat: "F j, Y(h: S K)",
            dateFormat: "Y-m-d H:i",
            minDate: "today",
          })} */}
          {function scheduleDeployment() {
            const targetElement = document.querySelector(".get-scheduled");
            let intValue = parseInt(targetElement.innerText);
            intValue++;
            targetElement.remove();
            let newEl = document.createElement("div");
            newEl.classNameList.add(
              "h5",
              "mb-0",
              "font-weight-bold",
              "text-gray-800",
              "get-scheduled"
            );
            newEl.innerText = intValue.toString();
            let parentEl = document.querySelector(".schedule-deployment-card");
            parentEl.appendChild(newEl);
          }}
        </div>
      </div>
    </div>
  );
}

export default Home;
