<template>
    <div class="dogs">
      <h1 class="mt-5 mb-6 text-center">Наши собаки</h1>
      <v-row>
          <v-col
              cols="2"
          >
              <span class="grey--text">Фильтр</span>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
              cols="10"
              class="text-center"
          >
              <span>Каталог</span>
              <v-row class="mt-4">
                  <v-col
                      v-for="n in 24"
                      :key="n"
                      cols="3"
                  >
                      <v-card height="150"></v-card>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
      name: 'DogsApp'
  }
  </script>
  
  <style>
  
  </style>