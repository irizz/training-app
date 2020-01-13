import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { TestIntroPage } from "./pages/test-intro-page";
import { TestPage } from "./pages/test-page";
import { TrainIntroPage } from "./pages/train-intro-page";
import { TrainPage } from "./pages/train-page";
import {
  HOME_PAGE_PATH,
  TRAIN_INTRO_PAGE_PATH,
  TRAIN_PAGE_PATH,
  TEST_INTRO_PAGE_PATH,
  TEST_PAGE_PATH
} from "./constants";

export const MyRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={HOME_PAGE_PATH} component={HomePage} />
        <Route exact path={TEST_INTRO_PAGE_PATH} component={TestIntroPage} />
        <Route exact path={TRAIN_INTRO_PAGE_PATH} component={TrainIntroPage} />
        <Route path={TEST_PAGE_PATH} component={TestPage} />
        <Route path={TRAIN_PAGE_PATH} component={TrainPage} />
      </Switch>
    </React.Fragment>
  );
};
