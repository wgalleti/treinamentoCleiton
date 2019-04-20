<template>
  <div>

    <bs-c-crud-store
      :dados="$store.state.clientes"
      apiRecarregar="getClientes"
      apiApagar="removeCliente"
      apiSalvar="saveCliente"
    />
  </div>
</template>

<script>
export default {}
</script>
