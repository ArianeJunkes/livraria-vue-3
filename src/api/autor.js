import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const { data } = await axios.get("/autor/");
    return data;
  }

  async addAutores(autor) {
    const { data } = await axios.post("/autor/", autor);
    return data;
  }

  async updatAutor(autor) {
    const { data } = await axios.put(`/autor/${autor.id}/`, autor);
    return data;
  }
  async deletAutor(id) {
    const { data } = await axios.delete(`/autor/${id}/`);
    return data;
  }
}