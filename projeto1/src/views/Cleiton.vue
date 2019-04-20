<template>
  <div>

    <bs-c-crud-store
      :dados="$store.state.cleitons"
      apiRecarregar="getCleitons"
      apiApagar="removeCleiton"
      apiSalvar="saveCleiton"
    />

  </div>
</template>
