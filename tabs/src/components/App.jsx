import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import "./App.css";
import TabConfig from "./TabConfig";
import SummaryView from './singleSummaryView/viewOnly/summaryView'
import SummaryEdit from "./singleSummaryView/editAllowed/summaryEdit";
import { useTeams } from "msteams-react-base-component";
import { Dashboard } from "./dashboard/dashboard";
import { TeamsContext, AppContext } from "./context";
import { useState, useEffect } from 'react';
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const [teamsContext, setTeamsContext] = useState();
  const [context, setContext] = useState();
  const { theme } = useTeams({})[0];

  useEffect(() => {
    microsoftTeams.getContext(context => {
      setTeamsContext(context);
    });
  }, []);


  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: '#f5f5f5' }}>
      <TeamsContext.Provider value={teamsContext}>
        <AppContext.Provider value={[context, setContext]}>
          <Router>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <>
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/config" component={TabConfig} />
              <Route exact path="/view-summary/:id" component={SummaryView} />
              <Route exact path="/edit-summary/:id" component={SummaryEdit} />
            </>
          </Router>
        </AppContext.Provider>
      </TeamsContext.Provider>

    </Provider>
  );
}
