<template>
  <v-app id="admin" dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import '../plugins/vuetify'

export default {}
</script>
