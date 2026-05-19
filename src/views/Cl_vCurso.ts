import { I_vCurso as I_vCurso } from "../interfaces/I_vCurso.js";
import Cl_mQuiz from "../models/Cl_mQuiz.js";

export default class Cl_vCurso implements I_vCurso {
  btRecargar: HTMLButtonElement;
  chkSoloCorrectos: HTMLInputElement;
  tblRegistros: HTMLTableElement;
  constructor() {
    this.tblRegistros = document.getElementById(
      "curso_tblRegistros",
    ) as HTMLTableElement;
    this.btRecargar = document.getElementById(
      "curso_btRecargar",
    ) as HTMLButtonElement;
    this.chkSoloCorrectos = document.getElementById(
      "curso_chkSoloCorrectos",
    ) as HTMLInputElement;
    this.chkSoloCorrectos.onchange = () => this.onChangeSoloCorrectos(() => {});
  }
  get soloCorrectos(): boolean {
    return this.chkSoloCorrectos.checked;
  }
  onChangeSoloCorrectos(callback: () => void): void {
    this.chkSoloCorrectos.onchange = callback;
  }
  onRecargar(callback: () => void): void {
    this.btRecargar.onclick = callback;
  }
  mostrarQuices(quices: Cl_mQuiz[]): void {
    this.tblRegistros.innerHTML = "";
    quices.forEach((quiz: Cl_mQuiz) => {
      this.tblRegistros.innerHTML += `<tr>
        <td>${quiz.cedula}</td>
        <td>${quiz.nombre}</td>
        <td>${quiz.respuesta1}</td>
        <td>${quiz.respuesta2}</td>
      </tr>`;
    });
  }
}
