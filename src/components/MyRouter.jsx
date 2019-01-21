import React from "react";
// components
import { Home } from "./Home";
import { TutorialMode } from "./TutorialMode";
import { TrainingModeIntro } from "./TrainingModeIntro";
import { TrainingMode } from "./TrainingMode";
import { TestMode } from "./TestMode";
// router
import { Switch, Route } from "react-router-dom";

export const MyRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learn" component={TutorialMode} />
        <Route exact path="/train" component={TrainingModeIntro} />
        <Route path="/train/session" component={TrainingMode} />
        <Route path="/test" component={TestMode} />
      </Switch>
    </React.Fragment>
  );
};
