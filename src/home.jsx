import React from "react";
import "./home2.css";

function home() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div class="sidebar-brand-icon">
              <i class="fas fa-fire"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Blaze Deploy</div>
          </a>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Org Metadata</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div class="sidebar-heading">
            <i class="fas fa-fw fa-cog"></i>
            Components
          </div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="far fa-file-code"></i>
              <span>Apex Class</span>
            </a>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded back-apex">
                {/* <!-- <h6 class="collapse-header">Custom Components:</h6> --> */}
                {/* <% for (let ac of apexClass) {%>
                        <span class="collapse-item moveApex components-item" apex-data="<%= ac %>"><%= ac %></span>
                        <% } %> */}
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="far fa-file-code"></i>
              <span>LWC</span>
            </a>
            <div
              id="collapseUtilities"
              class="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded lwc-list">
                {/* <!-- <h6 class="collapse-header">Custom Utilities:</h6> --> */}
                {/* <% for (let comp of lwcList) {%>
                            <span class="collapse-item moveLwc components-item" lwc-data="<%= comp %>"><%= comp %></span>
                        <% } %> */}
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseObjects"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-suitcase"></i>
              <span>Custom Object</span>
            </a>
            <div
              id="collapseObjects"
              class="collapse"
              aria-labelledby="headingObjects"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded custom-object-list">
                {/* <!-- <h6 class="collapse-header">Custom Utilities:</h6> --> */}
                {/* <% for (let obj of objectList) {%>
                            <span class="collapse-item moveCustomObject components-item" custom-object-data="<%= obj %>"><%= obj %></span>
                        <% } %> */}
              </div>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div class="sidebar-heading" style={{ marginBottom: "1rem" }}>
            <i class="fas fa-people-arrows"></i>
            Profiles
          </div>

          {/* <!-- Test code --> */}
          <div class="back-profile">
            {/* <% for(let profile of profileList) {%>  */}
            <li class="nav-item hover-none">
              {/* <span class="profile-list-item moveProfile" profile-data="<%= profile  %>"><i class="fas fa-user-tie"></i> <%= profile %>  </span> */}
            </li>
            {/* <% } %> */}
          </div>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

          {/* <!-- Sidebar Message --> */}
          {/* <!-- <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div> --> */}
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                class="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i class="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Search --> */}
              {/* <!-- <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form> --> */}

              {/* <!-- Topbar Navbar --> */}
              <ul class="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li class="nav-item dropdown no-arrow d-sm-none">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form class="form-inline mr-auto w-100 navbar-search">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/* <!-- Nav Item - Alerts --> */}
                <li class="nav-item dropdown no-arrow mx-1">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span class="badge badge-danger badge-counter">3</span>
                  </a>
                  {/* <!-- Dropdown - Alerts --> */}
                  <div
                    class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 class="dropdown-header">Alerts Center</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">30 Mins Ago</div>
                        <span class="font-weight-bold">
                          Deployed to Production , Tests Running.
                        </span>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">45 Mins Ago</div>
                        <span class="font-weight-bold">
                          Deployed to Sandbox 1 , Tests Running.
                        </span>
                      </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="mr-3">
                        <div class="icon-circle bg-primary">
                          <i class="fas fa-envelope text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div class="small text-gray-500">Nov 25, 2021</div>
                        <span class="font-weight-bold">
                          Successfully Deployment to Production.
                        </span>
                      </div>
                    </a>
                    <a
                      class="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                {/* <!-- Nav Item - Messages --> */}

                <div class="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      Himanshu Nehra
                    </span>
                    <i class="fas fa-user-ninja"></i>
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">
              {/* <!-- Page Heading --> */}
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Deployment Cluster</h1>
                <div class="row d-flex align-items-right">
                  <div class="dropdown">
                    <a
                      href="#"
                      class="d-sm-inline-block btn btn-md btn-success shadow-sm mr-3 dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-upload fa-md text-white-50"></i> Instant
                      Deploy
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <span
                        class="dropdown-item deployclick cusrsor-pointer-class instant-deploy-item"
                        id="production-deploy"
                        data-org="Production"
                      >
                        Production
                      </span>
                      <span
                        class="dropdown-item deployclick cusrsor-pointer-class instant-deploy-item"
                        id="sandbox-deploy"
                        data-org="Sandbox"
                      >
                        Sandbox
                      </span>
                    </div>
                  </div>
                  <div class="dropdown">
                    <a
                      href="#"
                      class="d-sm-inline-block btn btn-md btn-primary shadow-sm dropdown-toggle"
                      id="dropdownSchedule"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-calendar-alt fa-md text-white-50"></i>{" "}
                      Schedule Deployment
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownSchedule"
                      style={{ minWidth: "16em" }}
                    >
                      <a
                        class="dropdown-item cusrsor-pointer-class"
                        data-toggle="modal"
                        data-target="#scheduleModal"
                      >
                        Production
                      </a>
                      <a
                        class="dropdown-item cusrsor-pointer-class"
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
              <div class="row cardrow">
                {/* <!-- Earnings (Monthly) Card Example --> */}
                {/* <!-- <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Earnings (Monthly)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2 active-deployment-card">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Active Deployments{" "}
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800 get-active">
                            2
                          </div>
                        </div>
                        <div class="col-auto">
                          {/* <!-- <i class="fas fa-dollar-sign fa-2x text-gray-300"></i> --> */}
                          <i class="fas fa-broadcast-tower fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                {/* <!-- <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style={width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}

                {/* <!-- Pending Requests Card Example --> */}
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2 schedule-deployment-card">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Scheduled Deployments
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800 get-scheduled">
                            5
                          </div>
                        </div>
                        <div class="col-auto">
                          {/* <!-- <i class="fas fa-comments fa-2x text-gray-300"></i> --> */}
                          <i class="fas fa-calendar-alt fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4" id="deployment-card">
                  <div
                    class="card border-left-info shadow h-100 py-2"
                    id="deployment_div_1"
                  >
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2 schedule-deployment-card">
                          <div
                            class="text-xs font-weight-bold text-info text-uppercase mb-1"
                            id="deployment-card-html"
                          >
                            {" "}
                            Deploying to Production
                          </div>
                          <div class="progress">
                            <div
                              class="progress-bar progress-bar-striped bg-info progress-bar-animated"
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
                {/* <!-- <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Deploying to Production</div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={width: 15%"></div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
              </div>

              {/* <!-- Content Row --> */}

              <div class="row">
                {/* <!-- Area Chart --> */}
                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Staging</h6>
                      {/* <!-- <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div> --> */}
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="list-card">
                      <div class="chart-area">
                        {/* <!-- <canvas id="myAreaChart"></canvas> --> */}
                        <div class="row">
                          <div class="components col-6">
                            <h5>Components</h5>
                            <div class="component-list">
                              <div class="right-apex">
                                <span>Apex Class</span>
                                <ul class="add-component-apex-class"></ul>
                              </div>
                              <div class="right-lwc">
                                <span>LWC</span>
                                <ul class="add-component-lwc"></ul>
                              </div>
                              <div class="right-custom-object">
                                <span>Custom Object</span>
                                <ul class="add-component-custom-object"></ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <h5>Profiles</h5>
                            <ul class="add-profile"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Staging Sources
                      </h6>
                      <div class="dropdown no-arrow">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart"></canvas>
                      </div>
                      <div class="mt-4 text-center small">
                        <span class="mr-2" data-comps="70">
                          <i class="fas fa-circle text-primary"></i> Componets :{" "}
                          <span id="chart-components">0</span>
                        </span>
                        <span class="mr-2" data-profiles="90">
                          <i class="fas fa-circle text-success"></i> Profiles :{" "}
                          <span id="chart-profiles">0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div class="row">
                {/* <!-- Content Column --> */}
                {/* <!-- <div class="col-lg-6 mb-4"> --> */}

                {/* <!-- Project Card Example --> */}
                {/* <!-- <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small font-weight-bold">Server Migration <span
                                            class="float-right">20%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style={width: 20%"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Sales Tracking <span
                                            class="float-right">40%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style={width: 40%"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Customer Database <span
                                            class="float-right">60%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style={width: 60%"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Payout Details <span
                                            class="float-right">80%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style={width: 80%"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Account Setup <span
                                            class="float-right">Complete!</span></h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style={width: 100%"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div> --> */}

                {/* <!-- Color System --> */}
                {/* <!-- <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            Primary
                                            <div class="text-white-50 small">#4e73df</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-success text-white shadow">
                                        <div class="card-body">
                                            Success
                                            <div class="text-white-50 small">#1cc88a</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Info
                                            <div class="text-white-50 small">#36b9cc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-warning text-white shadow">
                                        <div class="card-body">
                                            Warning
                                            <div class="text-white-50 small">#f6c23e</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-danger text-white shadow">
                                        <div class="card-body">
                                            Danger
                                            <div class="text-white-50 small">#e74a3b</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-secondary text-white shadow">
                                        <div class="card-body">
                                            Secondary
                                            <div class="text-white-50 small">#858796</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-light text-black shadow">
                                        <div class="card-body">
                                            Light
                                            <div class="text-black-50 small">#f8f9fc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            Dark
                                            <div class="text-white-50 small">#5a5c69</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6 mb-4"> --> */}

                {/* <!-- Illustrations --> */}
                {/* <!-- <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-center">
                                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={width: 25rem;"
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
                {/* <!-- <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div class="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p class="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> --> */}
                {/* <!-- /.container-fluid --> */}
              </div>
              {/* <!-- End of Main Content --> */}

              {/* <!-- Footer --> */}
              {/* <!-- <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
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
          <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
          </a>

          {/* <!-- Logout Modal--> */}
          <div
            class="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    class="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a class="btn btn-primary" href="http://localhost:3000/">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="scheduleModal"
            class="modal fade"
            role="combobox"
            data-keyboard="false"
            data-backdrop="static"
          >
            <div class="modal-dialog">
              {/* <!-- Modal content--> */}
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title text-primary">
                    Choose Deployment Time
                  </h4>
                </div>
                <div class="modal-body">
                  {/* <!-- <div id="flatpickeruseid"></div> --> */}
                  <input
                    id="flatpickeruseid"
                    type="datetime-local"
                    placeholder="Select Date and Time.."
                  />
                </div>
                <div class="modal-footer">
                  <div class="row">
                    <div class="col-6 d-flex justify-content-start">
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                    <div class="col-6">
                      <button
                        type="button"
                        class="btn btn-success btn-sm schedule-deployment-click"
                        data-dismiss="modal"
                        onclick="scheduleDeployment()"
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
            enableTime: true,
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
            newEl.classList.add(
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

export default home;
