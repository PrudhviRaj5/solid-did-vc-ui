import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LogoutButton, useWebId } from "@solid/react";
import { foaf } from "rdf-namespaces";
import { useProfile } from "../hooks/useProfile";
import { getPodData } from "../services/getPodData";

import { Subject } from './Subject';
import { Issuer } from "./Issuer";
import { Verifier } from "./Verifier";
import './Dashboard.scss';


export const Dashboard = () => {
  const webId = useWebId(); 
  const podData = React.useMemo(
    () => (typeof webId === "string" ? getPodData(webId) : undefined),
    [webId]
  );
  const profile = useProfile(podData);

  if (!podData) {
    return (
      <section className="section">
        <p className="content">Loading data&hellip;</p>
      </section>
    );
  }

  const name = profile ? profile.getString(foaf.name) : null;
  const title = name ? `Welcome ${name}!` : "Welcome!";

  return (
    <>
      <section className="section">
        <h1 className="title">{title}</h1>
      </section>

      <div>
        <h3>Select Your Role</h3>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/subject">Subject</Link>
            </li>
            <li>
              <Link to="/issuer">Issuer</Link>
            </li>
            <li>
              <Link to="/verifier">Verifier</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/subject">
              <Subject />
            </Route>
            <Route path="/issuer">
              <Issuer />
            </Route>
            <Route path="/verifier">
              <Verifier />
            </Route>
          </Switch>
        </Router>
      </div>

      <footer className="footer">
        <div className="columns">
          <div className="column has-text-right">
            <LogoutButton className="button" />
          </div>
        </div>
      </footer>
    </>
  );
};
