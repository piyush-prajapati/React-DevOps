import Mslogo from "../mslogo.png";
import "../css/login.css";

function login() {
  return (
    <div>
      <div id="page-top">
        {/* Navigation */}
        <div
          className="navbarl navbarl-expand-lg navbarl-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a
              className="navbarl-brand"
              href="#page-top"
              style={{ fontFamily: "Estonia, cursive", fontSize: "3rem" }}
            >
              Blaze Deploy
            </a>
            <button
              className="navbarl-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarlResponsive"
              aria-controls="navbarlResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbarl-collapse" id="navbarlResponsive">
              <ul className="navbarl-nav text-uppercase ms-auto py-4 py-lg-0">
                {/* <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li> */}
                <li className="nav-item">
                  <a href="https://www.mandsconsulting.com/">
                    <img className="image-logo" src={Mslogo} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header class="mastheadl">
        <div class="container">
          <div class="mastheadl-subheading">Lightning Fast Deployments!</div>
          <div class="mastheadl-heading text-uppercase">
            Good Bye Change Sets
          </div>
          <a
            class="btnl btnl-primary btnl-xl text-uppercase"
            href="/login/salesforce"
          >
            Log In with Salesforce
          </a>
        </div>
      </header>

      <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Devops Primacy</h2>
            <h3 class="section-subheading text-muted">
              Redefine your DevOps process
            </h3>
          </div>
          <div class="row text-center">
            <div class="col">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <div class="row justify-content-center">
                <div class="col-10 col-lg-8">
                  <h4 class="my-3">Rapid Deployments</h4>
                  <p class="text-muted">
                    Experience the easy to build , clonable and highly
                    customizable Deployment Cluster. Forget waiting for adding
                    or removing elements in the Change Sets.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <div class="row justify-content-center">
                            <div class="col-10 col-lg-8">
                                <h4 class="my-3">Web Security</h4>
                                <p class="text-muted">Deploy using Salesforce Metadata and SOAP API's adhering to highest web security standards. We value your security.</p>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>

      <footer style={{ background: "#74d3f2" }} class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 my-3 my-lg-0">
              <a
                class="btnl btnl-dark btnl-social mx-2"
                href="https://twitter.com/mandsconsulting"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btnl btnl-dark btnl-social mx-2"
                href="https://www.facebook.com/mandsconsulting/"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btnl btnl-dark btnl-social mx-2"
                href="https://www.linkedin.com/company/m&s-consulting"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div class="col-6">
              Copyright &copy;{" "}
              <a
                style={{ color: "black" }}
                href="https://www.mandsconsulting.com/"
              >
                M&#38;SConsulting
              </a>
            </div>
          </div>
        </div>
      </footer>

      {window.addEventListener("DOMContentLoaded", (event) => {
        // navbarl shrink function
        var navbarlShrink = function () {
          const navbarlCollapsible = document.body.querySelector("#mainNav");
          if (!navbarlCollapsible) {
            return;
          }
          if (window.scrollY === 0) {
            navbarlCollapsible.classList.remove("navbarl-shrink");
          } else {
            navbarlCollapsible.classList.add("navbarl-shrink");
          }
        };

        // Shrink the navbarl
        navbarlShrink();

        // Shrink the navbarl when page is scrolled
        document.addEventListener("scroll", navbarlShrink);

        {
          /* // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector("#mainNav");
        if (mainNav) {
          new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
          });
        } */
        }

        // Collapse responsive navbarl when toggler is visible
        const navbarlToggler = document.body.querySelector(".navbarl-toggler");
        const responsiveNavItems = [].slice.call(
          document.querySelectorAll("#navbarlResponsive .nav-link")
        );
        responsiveNavItems.map(function (responsiveNavItem) {
          responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarlToggler).display !== "none") {
              navbarlToggler.click();
            }
          });
        });
      })}
    </div>
  );
}

export default login;
