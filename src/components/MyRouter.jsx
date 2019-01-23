import React from "react";
// components
import { Home } from "./Home";
import { TutorialModeIntro } from "./TutorialModeIntro";
import { TutorialMode } from "./TutorialMode";
import { TrainingModeIntro } from "./TrainingModeIntro";
import { TrainingMode } from "./TrainingMode";
import { TestModeIntro } from "./TestModeIntro";
import { TestMode } from "./TestMode";
// router
import { Switch, Route } from "react-router-dom";

export const MyRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn" component={TutorialModeIntro} />
        <Route path="/learn/current-chapter" component={TutorialMode} />
        <Route exact path="/train" component={TrainingModeIntro} />
        <Route path="/train/session" component={TrainingMode} />
        <Route exact path="/test" component={TestModeIntro} />
        <Route path="/test/session" component={TestMode} />
      </Switch>
    </React.Fragment>
  );
};
