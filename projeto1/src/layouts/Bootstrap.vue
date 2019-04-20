<template>
  <div id="bootstrap">
    <c-navbar/>
    <b-container fluid>
      <b-row>
        <b-col>
          <slot/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>
