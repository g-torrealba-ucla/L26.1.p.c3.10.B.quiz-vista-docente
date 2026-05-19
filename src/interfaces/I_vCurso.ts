import Cl_mQuiz from "../models/Cl_mQuiz";

export interface I_vCurso {
  soloCorrectos: boolean;
  mostrarQuices(quices: Cl_mQuiz[]): void;
  onRecargar(callback: () => void): void;
  onChangeSoloCorrectos(callback: () => void): void;
}
