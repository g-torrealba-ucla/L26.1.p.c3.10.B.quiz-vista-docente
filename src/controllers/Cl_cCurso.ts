import { I_vCurso } from "../interfaces/I_vCurso.js";
import Cl_mCurso from "../models/Cl_mCurso.js";
import Cl_sCurso from "../services/Cl_sCurso.js";

export default class Cl_cCurso {
  private modelo: Cl_mCurso;
  private vista: I_vCurso;
  constructor({ modelo, vista }: { modelo: Cl_mCurso; vista: I_vCurso }) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.onRecargar(() => this.btRecargarOnClick());
    this.vista.onChangeSoloCorrectos(() => this.onChangeSoloCorrectos());
    this.btRecargarOnClick();
  }
  onChangeSoloCorrectos() {
    this.btRecargarOnClick();
  }
  async btRecargarOnClick() {
    let resultado = await Cl_sCurso.obtenerQuices();
    if (resultado.ok === false) {
      alert("Error: No se pudo conectar con el servidor");
      return;
    }
    this.modelo.setQuices(resultado.tabla);
    this.vista.mostrarQuices(this.modelo.getQuices(this.vista.soloCorrectos));
  }
}
