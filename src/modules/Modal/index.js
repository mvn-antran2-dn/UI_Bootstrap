import ModalCP from "../../components/Modal";
import ToggleBetweenModal from "../../components/ToggleBetweenModal";
import VaryingModal from "../../components/VaryingModal";

export default function Modal() {
  return (
    <>
      <h1>Modal</h1>
      <h2>Modal components</h2>
      <div className="container">
        <div className="content-all">
          <div className="modal-example">
            <div className="modal modal-show">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header flex">
                    <h4 className="modal-title">Modal title</h4>
                    <button type="button" className="btn-closed mr-4"></button>
                  </div>
                  <div className="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className="modal-footer flex">
                    <button type="button" className="btn-all bg-secondary mr-4">
                      Close
                    </button>
                    <button type="button" className="btn-all bg-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Live demo</h2>
      <div className="container">
        <div className="content-all">
          <ModalCP contentToggle=" Launch demo modal" contentTitle="Modal title">
            <p>Woohoo, you're reading this text in a modal!</p>
          </ModalCP>
        </div>
      </div>
      <h2>Static Backdrop</h2>
      <div className="container">
        <div className="content-all">
          <ModalCP
            contentToggle=" Launch demo Static Backdrop modal"
            contentTitle="Modal title"
            staticBackdrop={true}
          >
            <p>I will not close if you click outside me. Don't even try to press escape key.</p>
          </ModalCP>
        </div>
      </div>
      <h2>Scrolling long content</h2>
      <div className="container">
        <div className="content-all scrolling-long">
          <ModalCP contentToggle=" Launch demo modal" contentTitle="Modal title">
            <div style={{ height: "1000px" }}>This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</div>
          </ModalCP>
        </div>
      </div>
      <div className="container">
        <div className="content-all scrolling ">
          <ModalCP
            contentToggle=" Launch demo modal"
            contentTitle="Modal title"
          >
            <div style={{ height: "1000px" }}>This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.</div>
          </ModalCP>
        </div>
      </div>
      <h2>Vertically centered</h2>
      <div className="container">
        <div className="content-all ">
          <ModalCP
            contentToggle=" Vertically centered modal "
            contentTitle="Modal title"
            verticalCentered={true}
          >
            This is a vertically centered modal.
          </ModalCP>
        </div>
      </div>
      <div className="container">
        <div className="content-all scrolling ">
          <ModalCP
            contentToggle=" Vertically centered scrollable modal "
            contentTitle="Modal title"
            verticalCentered={true}
          >
            <div style={{ height: "1000px" }}>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
            </div>
          </ModalCP>
        </div>
      </div>
      <h2>Tooltips and popovers</h2>
      <div className="container">
        <div className="content-all ">
          <ModalCP
            contentToggle=" Vertically centered modal "
            contentTitle="Modal title"
            tooltips={true}
          >
            <h3>Popover in a modal</h3>
            <p>
              This{" "}
              <a href="/#" className="btn-all bg-secondary popover-test">
                button
              </a>{" "}
              triggers a popover on click.
            </p>
            <hr className="dropdown-divider" />
            <h3>Tooltips in a modal</h3>
            <p>
              <a href="/#" className="tooltip-test" title="Tooltip">
                This link
              </a>{" "}
              and{" "}
              <a href="/#" className="tooltip-test" title="Tooltip">
                that link
              </a>{" "}
              have tooltips on hover.
            </p>
          </ModalCP>
        </div>
      </div>
      <h2>Using the grid</h2>
      <div className="container">
        <div className="content-all scrolling grid">
          <ModalCP
            contentToggle=" Vertically centered modal "
            contentTitle="Grids in modals"
          >
            <div className="row">
              <div className="col-all col-4">.col-md-4</div>
              <div className="col-all col-4 ml-auto">.col-md-4 .ms-auto</div>
            </div>
            <div className="row">
              <div className="col-all col-3 ml-auto">.col-md-3 .ms-auto</div>
              <div className="col-all col-2 ml-auto">.col-md-2 .ms-auto</div>
            </div>
            <div className="row">
              <div className="col-all col-6 ml-auto">.col-md-6 .ms-auto</div>
            </div>
            <div className="row">
              <div className="col-all col-9">
                Level 1: .col-sm-9
                <div className="row">
                  <div className="col-all col-8 ">Level 2: .col-8 .col-sm-6</div>
                  <div className="col-all col-4">Level 2: .col-4 .col-sm-6</div>
                </div>
              </div>
            </div>
          </ModalCP>
        </div>
      </div>
      <h2>Varying modal content</h2>
      <div className="container">
      <div className="content-all">
        <VaryingModal></VaryingModal>
      </div>
      </div>
      <h2>Toggle between modals</h2>
      <div className="container">
      <div className="content-all">
        <ToggleBetweenModal></ToggleBetweenModal>
      </div> 
      </div>
    </>
  );
}