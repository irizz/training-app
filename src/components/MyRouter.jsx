import React from "react";
// components
import { Home } from "./home/Home";
import { TutorialModeIntro } from "./learn/TutorialModeIntro";
import { TutorialMode } from "./learn/TutorialMode";
import { TrainingModeIntro } from "./train/TrainingModeIntro";
import { TrainingMode } from "./train/TrainingMode";
import { TestModeIntro } from "./test/TestModeIntro";
import { TestMode } from "./test/TestMode";
import { UsefulLinks } from "./UsefulLinks";
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
        <Route path="/links" component={UsefulLinks} />
      </Switch>
    </React.Fragment>
  );
};
