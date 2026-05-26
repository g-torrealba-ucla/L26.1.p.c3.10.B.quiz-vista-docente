import Cl_sMockApi from "./Cl_sMockApi.js";
import Cl_mQuiz from "../models/Cl_mQuiz.js";
export default class Cl_sCurso extends Cl_sMockApi {
  static async obtenerQuices(): Promise<{
    ok: boolean;
    tabla: Cl_mQuiz[];
  }> {
    return await this.getTabla({ tabla: "quiz" });
  }
}
