<template>
  <div class="about">
    <h1>This is an about page</h1>
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
  mixins: [
    homeMX
  ]
}
</script>
