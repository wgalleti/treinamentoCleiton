<template>
  <div>
    <h1>Rota do Cleiton</h1>
    <c-crud
      :dados="dados"
      @reload="recarregar"
    />
    <hr>
  </div>
</template>

<script>
import lista from '../mixins/lista'
export default {
  mixins: [
    lista
  ],
  mounted () {
    this.recarregar()
  }
}
</script>
