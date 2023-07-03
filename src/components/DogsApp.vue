<template>
  <div class="dogs">
    <v-row>
        <v-col 
            cols="1"
            class="mt-5 pa-0"
            v-show="!showFilter"
        >
            <v-btn text @click="showFilter = !showFilter">
                <v-icon>mdi-filter</v-icon>
                Фильтр
            </v-btn>
        </v-col>
        <v-col
            cols="6"
            class="mt-5"
            v-show="showFilter"
            lg="2"
            md="3"
            sm="4"
        >
            <v-card flat class="text-right">
                <v-icon @click="showFilter = !showFilter">mdi-close</v-icon>
            </v-card>
            <v-card class="text-center" flat height="20">
                <span class="grey--text">Фильтр</span>
            </v-card>
            <v-list dense>
                <v-subheader class="subtitle-1">Выберите пол собаки:</v-subheader>
                <v-radio-group row class="mt-1" v-model="filters.sex" mandatory>
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Девочка" value="2"></v-radio>
                    <v-radio class="mb-2" label="Мальчик" value="3"></v-radio>
                </v-radio-group>
                <v-subheader class="subtitle-1">Выберите возраст собаки:</v-subheader>
                <v-radio-group row class="mt-1" v-model="filters.age" mandatory>
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Щенята" value="2"></v-radio>
                    <v-radio class="mb-2" label="Молодые собаки" value="3"></v-radio>
                    <v-radio class="mb-2" label="Старые собаки" value="4"></v-radio>
                </v-radio-group>
                <v-row justify="center">
                    <v-btn dark small left @click="ResetFilter">
                        <v-icon>mdi-filter-off</v-icon>
                        Сбросить фильтр
                    </v-btn>
                </v-row>
            </v-list>
        </v-col>
        <v-divider vertical v-show="showFilter "></v-divider>
        <v-col
            :cols="this.showFilter ? 4 : 6"
            :lg="this.showFilter ? 10 : 12"
            :md="this.showFilter ? 8 : 10"
            :sm="this.showFilter ? 6 : 8"
            class="text-center"
            
        >
        <h1 class="mt-12 text-center">Наши собаки</h1>
            <v-row class="mt-4">
                <v-col
                    v-for="n in 24"
                    :key="n"
                    cols="12"
                    lg="3"
                    md="4"
                    sm="6"
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
    name: 'DogsApp',
    data() {
    return {
        showFilter: false,
        filters: {
            sex: 1,
            age: 1
        }
    }
    },
    mounted() {
        this.$http.get('http://localhost:3000/products')
            .then(response => {
            console.log(response)
            })
            .catch(err => {
            console.log(err)
            })
    },
    methods: {
        ResetFilter() {
            for (let key in this.filters) {
                this.filters[key] = 1
            }
        }
    }
}
  </script>
  
  <style>
  </style>