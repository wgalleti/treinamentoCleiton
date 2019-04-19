<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hr>
    <input type="number" v-model="valor1" placeholder="Numero">
    <input type="number" v-model="valor2" placeholder="Numero">
    <button @click="calcular">Calcular</button>
    {{ resultado }}
    <hr>
    <input type="text" v-model="nome" placeholder="Nome da bagaça">
    {{ nomeCompleto }}
    <hr>
    {{nomeQualquer}}
    <button @click="mostrarNomeQualquer">Mostrar Nome</button>
    <hr>
    <c-hello-world msg="Treinamento VUEJS Cleiton"/>
  </div>
</template>

<script>
import homeMX from '../mixins/home'

export default {
  name: 'home',
  mixins: [
    homeMX
  ],
  data () {
    return {
      nome: 'William',
      valor1: 0,
      valor2: 0,
      resultado: 0
    }
  },
  computed: {
    nomeCompleto () {
      return `${this.nome} - Galleti`
    }
  },
  methods: {
    calcular () {
      this.resultado = this.valor1 * this.valor2
    }
  }
}
</script>
