function Logout() {
  return (
    <div>
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
              <a className="btn btn-primary" href="http://localhost:3001/">
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
    </div>
  );
}

export default Logout;
