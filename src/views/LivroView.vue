<script>
import LivrosApi from "@/api/livros";
const livrosApi = new LivrosApi();
export default {
  data() {
    return {
      livros: [],
      livro: {},
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodasOsLivros();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro);
      }
      this.clivro = {};
      this.clivros = await livrosApi.buscarTodasOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodasOsLivros();
    },
  },
};
</script>

<template>
  <h1>Livro</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="livro.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="livro in livros" :key="livro.id">
      <span @click="editar(livro)">
        ({{ livro.id }}) - {{ livro.descricao }} -
      </span>
      <button @click="excluir(livro)">X</button>
    </li>
  </ul>
</template>

<style></style>
