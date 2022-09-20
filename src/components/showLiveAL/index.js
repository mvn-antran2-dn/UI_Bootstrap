import { useState, useRef } from "react";
import AlertCP from "../Alerts";

export default function ShowLiveAL() {
  const [alerts, setAlerts] = useState([]);
  const parentAlerts = useRef();
  const addAlerts = () => {
    setAlerts([ ...alerts, <AlertCP colors={"success"}> Nice, you triggered this alert message! </AlertCP>,]);
  };
  return (
    <>
      <div ref={parentAlerts}>
        {alerts.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button type="button" onClick={addAlerts} className="btn-all bg-primary btn-show-live-AL">
        Show live alert
      </button>
    </>
  );
}