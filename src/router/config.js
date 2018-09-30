// import LandingPage from '../routes/LandingPage'
import LandingPage from "../routes/LandingPage_1";
import ExperimentPage from "../routes/ExperimentPage";
import LogInPage from "../routes/LogInPage";
import InitialSetupPage from "../routes/InitialSetupPage";
import AboutPage from "../routes/AboutPage";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/experiment",
    component: ExperimentPage,
  },
  {
    path: "/login",
    component: LogInPage,
  },
  {
    path: "/initsetup",
    component: InitialSetupPage,
  },
  {
    path: "/About",
    component: AboutPage,
  },
];

export default routes;
