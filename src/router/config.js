import React from 'react';
import LandingPage from '../routes/LandingPage'
import ExperimentPage from '../routes/ExperimentPage'
import DeploymentPage from '../routes/DeploymentPage'
import EvaluationPage from '../components/FunctionalOverview/Evaluation'

const routes = [
  {
    "path": "/",
    "compoment": LandingPage
  },
  {
    "path": "/experiment",
    "compoment": ExperimentPage
  },
  {
    "path": "/deployment",
    "compoment": DeploymentPage
  },
  {
    "path": "/evaluation",
    "compoment": EvaluationPage
  }
]

export default routes ;