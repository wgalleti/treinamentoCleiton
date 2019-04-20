<template>
  <div>
    <bs-c-crud
      :dados="dados"
      @reload="recarregar"
    />
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
