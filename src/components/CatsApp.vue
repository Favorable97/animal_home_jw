<template>
  <div class="cats">
    <v-row>
        <v-col 
            cols="1"
            class="mt-5"
            v-show="!showFilter"
        >
            <v-btn text @click="IsShowFilter">
                Фильтр
            </v-btn>
        </v-col>
        <v-col
            cols="2"
            class="mt-5"
            v-show="showFilter"
        >
            <v-card class="text-center" flat height="50">
                <span class="grey--text">Фильтр</span>
            </v-card>
            <v-list dense>
                <v-subheader class="subtitle-1">Выберите возраст кошки:</v-subheader>
                <v-radio-group row class="mt-1">
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Котята" value="2"></v-radio>
                    <v-radio class="mb-2" label="Молодые кошки" value="3"></v-radio>
                    <v-radio class="mb-2" label="Старые кошки" value="4"></v-radio>
                </v-radio-group>
                <!-- <v-list-item>
                    <v-list-item-content>
                        
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                        <v-list-item-content>
                            <v-btn>
                                Кошки
                            </v-btn> 
                        </v-list-item-content>
                </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-btn>
                                Старые кошки
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item> -->
                <!-- <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            <v-btn>Котята</v-btn>
                        </v-list-item-content>
                    </v-list-item>
                    
                    
                </v-list-item-group> -->
                <v-subheader class="subtitle-1">Выберите возраст кошки:</v-subheader>
                <v-radio-group row class="mt-1">
                    <v-radio class="mb-2" label="Без разницы" value="1"></v-radio>
                    <v-radio class="mb-2" label="Котята" value="2"></v-radio>
                    <v-radio class="mb-2" label="Молодые кошки" value="3"></v-radio>
                    <v-radio class="mb-2" label="Старые кошки" value="4"></v-radio>
                </v-radio-group>
            </v-list>
        </v-col>
        <v-divider vertical v-show="showFilter"></v-divider>
        <v-col
            cols="this.col"
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
            col: 12
        }
    },
    methods: {
        IsShowFilter() {
            this.showFilter = !this.showFilter
            this.col = this.showFilter ? 10 : 12
        }
    }
}
</script>

<style>

</style>