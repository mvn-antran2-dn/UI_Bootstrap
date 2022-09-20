import AlertCP from "../../components/Alerts";
import ShowLiveAL from "../../components/showLiveAL";

export default function Alerts() {
  return (
    <>
      <h1>Alert</h1>
      <h2>Examples</h2>
      <div className="container">
        <div className="content-all">
          <AlertCP colors={"primary"} hide={"none"}>
            A simple primary alert—check it out!
          </AlertCP>
          <AlertCP colors={"secondary"} hide={"none"}>
            A simple secondary alert—check it out!
          </AlertCP>
          <AlertCP colors={"success"} hide={"none"}>
            A simple success alert—check it out!
          </AlertCP>
          <AlertCP colors={"danger"} hide={"none"}>
            A simple danger alert—check it out!
          </AlertCP>
          <AlertCP colors={"warning"} hide={"none"}>
            A simple warning alert—check it out!
          </AlertCP>
          <AlertCP colors={"info"} hide={"none"}>
            A simple info alert—check it out!
          </AlertCP>
          <AlertCP colors={"light"} hide={"none"}>
            A simple light alert—check it out!
          </AlertCP>
          <AlertCP colors={"dark"} hide={"none"}>
            A simple dark alert—check it out!
          </AlertCP>
        </div>
        <div className="content-all show-live-al">
          <ShowLiveAL />
        </div>
      </div>

      <h2>Link color</h2>
      <div className="container">
        <div className="content-all">
          <AlertCP colors={"primary"} hide={"none"}>
            A simple primary alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"secondary"} hide={"none"}>
            A simple secondary alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"success"} hide={"none"}>
            A simple success alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"danger"} hide={"none"}>
            A simple danger alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"warning"} hide={"none"}>
            A simple warning alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"info"} hide={"none"}>
            A simple info alert with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"light"} hide={"none"}>
            A simple light light with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
          <AlertCP colors={"dark"} hide={"none"}>
            A simple dark light with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </AlertCP>
        </div>
      </div>

      <h2>Additional content</h2>
      <div className="container">
        <div className="content-all">
          <div className="alert bs-bland-success">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p>
              Whenever you need to, be sure to use margin utilities to keep things
              nice and tidy.
            </p>
          </div>
        </div>
      </div>

      <h2>Icons</h2>
      <div className="container">
        <div className="content-all">
          <div className="alert bs-bland-success">
            <i className="fa-solid fa-circle-check mr-1"></i>A simple dark alert
            with {" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert bs-bland-warning">
            <i className="fa-solid fa-triangle-exclamation mr-1"></i>A simple dark
            alert with {" "}{" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert bs-bland-primary">
            <i className="fa-solid fa-circle-info mr-1"></i>A simple dark alert
            with{" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert bs-bland-danger">
            <i className="fa-solid fa-circle-check mr-1"></i>A simple dark alert
            with{" "}
            <a href="/#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
        </div>
      </div>

      <h2>Dismissing</h2>
      <div className="container">
        <div className="content-all dismissing">
          <AlertCP  >
            <span><strong>Holy guacamole!</strong> You should check in on some of those
            fields below.</span>
          </AlertCP>
        </div>
      </div>

    </>
  );
}