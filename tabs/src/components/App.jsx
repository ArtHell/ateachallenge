import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import "./App.css";
import TabConfig from "./TabConfig";
import { useTeams } from "msteams-react-base-component";
import { Dashboard } from "./dashboard/dashboard";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme } = useTeams({})[0];
  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: '#f5f5f5' }}>
      <Router>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/config" component={TabConfig} />
        </>
      </Router>
    </Provider>
  );
}
