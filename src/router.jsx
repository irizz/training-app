import React from "react";
import { Home } from "./home/Home";
import { TrainingModeIntro } from "./train/TrainingModeIntro";
import { TrainingMode } from "./train/TrainingMode";
import { TestModeIntro } from "./test/TestModeIntro";
import { TestMode } from "./test/TestMode";
import { Switch, Route } from "react-router-dom";

export const MyRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/train" component={TrainingModeIntro} />
        <Route path="/train/session" component={TrainingMode} />
        <Route exact path="/test" component={TestModeIntro} />
        <Route path="/test/session" component={TestMode} />
      </Switch>
    </React.Fragment>
  );
};
