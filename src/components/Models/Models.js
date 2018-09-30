import { keys } from "lodash";
import * as models from "./ModelLoader";

export const modelsKey = keys(models).sort();
export default models;
