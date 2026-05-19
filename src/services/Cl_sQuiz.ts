import Cl_mQuiz from "../models/Cl_mQuiz.js";
export default class Cl_sQuiz {
  private static apiUrl: string =
    "https://6a0a74b121e4456256960022.mockapi.io/quiz";

  static async obtenerQuices(): Promise<{
    ok: boolean;
    quices: Cl_mQuiz[];
  }> {
    try {
      const respuesta = await fetch(this.apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        return { ok: false, quices: [] };
      }

      const data = await respuesta.json();
      return { ok: true, quices: data };
      
    } catch (error: any) {
      return { ok: false, quices: [] };
    }
  }
}
