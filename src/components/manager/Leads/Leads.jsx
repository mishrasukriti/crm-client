import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Sidenav from "../Sidenav";
import { useState } from "react";
import EditLead from "./EditLead";

const Lead = ({ match }) => {
  const history = useHistory();
  const results = useSelector((state) => state.lead);
  const services = results.filter((result) => result._id === match.params.id);

  const [view, setView] = useState("noedit");

  return (
    <React.Fragment>
      {view === "noedit" && (
        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content">
            <div className="header">
              <div className="title">Lead</div>
              <button
                type="button"
                onClick={() => history.push("/managerdashboard/lead")}
              >
                Back
                <i className="material-icons"> &#xe5c4;</i>
              </button>
            </div>
            <hr />
            <div className="content">
              {services.map((result) => (
                <div key={result._id} className="cards">
                  <ul>
                    <li>
                      <b>Title:</b>
                      <p>{result.title}</p>
                    </li>
                    <li>
                      <b>Client</b>
                      <p>{result.client}</p>
                    </li>
                    <li>
                      <b>number</b>
                      <p>{result.number}</p>
                    </li>
                    <li>
                      <b>Status</b>
                      <p>{result.status}</p>
                    </li>
                  </ul>
                  <div className="button-container">
                    <button type="button" onClick={() => setView("edit")}>
                      Update
                      <i className="material-icons">&#xe3c9;</i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {view === "edit" && (
        <EditLead
          id={match.params.id}
          Title={results.title}
          Client={results.client}
          Number={results.number}
          Status={results.status}
        />
      )}
    </React.Fragment>
  );
};

export default Lead;
