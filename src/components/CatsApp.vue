<template>
  <div class="cats">
    <v-row>
        <v-col 
            cols="1"
            class="mt-5"
            v-show="!showFilter"
        >
            <v-btn text @click="showFilter = !showFilter">
                <v-icon>mdi-filter</v-icon>
                Фильтр
            </v-btn>
        </v-col>
        <v-col
            cols="2"
            class="mt-5"
            v-show="showFilter"
        >
            <v-card flat class="text-right">
                <v-icon @click="showFilter = !showFilter">mdi-close</v-icon>
            </v-card>
            <v-card class="text-center " flat height="20">
                <span class="grey--text">Фильтр</span>
            </v-card>
            <v-list dense>
                <v-subheader class="subtitle-1">Выберите пол кошки:</v-subheader>
                <v-radio-group row class="mt-1" v-model="filters.sex" mandatory>
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Девочка" value="2"></v-radio>
                    <v-radio class="mb-2" label="Мальчик" value="3"></v-radio>
                </v-radio-group>
                <v-subheader class="subtitle-1">Выберите возраст кошки:</v-subheader>
                <v-radio-group row class="mt-1" v-model="filters.age" mandatory>
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Котята" value="2"></v-radio>
                    <v-radio class="mb-2" label="Молодые кошки" value="3"></v-radio>
                    <v-radio class="mb-2" label="Старые кошки" value="4"></v-radio>
                </v-radio-group>
                <v-row justify="center">
                    <v-btn dark small right @click="ResetFilter">
                        <v-icon>mdi-filter-off</v-icon>
                        Сбросить фильтр
                    </v-btn>
                </v-row>
            </v-list>
            
        </v-col>
        <v-divider vertical v-show="showFilter"></v-divider>
        <v-col
            :cols="this.showFilter ? 10 : 12"
            class="text-center"
        >
        <h1 class="mt-5 mb-6 text-center">Наши кошки</h1>
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
    name: 'CatsApp',
    data() {
        return {
            showFilter: false,
            col: 12,
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