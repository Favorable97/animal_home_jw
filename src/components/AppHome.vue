<template>
    <div class="dashboard">
        <!-- <h3 class=" my-4 ml-4">Dashboard</h3> -->
        <!-- <h2 class="my-4 ml-4">Главная</h2> -->
        <v-container class="my-5">
            <h2 class="text-center">Приют для животных Animal Home</h2>
            <div>
                <p class="text-justify mt-2">
                    Этот приют был создан для уменьшения количества бродячих животных,
                    а также для того, чтобы дать животным шанс найти свою новую семью! 
                </p>
            </div>
            <v-card
                flat
                tile
                >
                <v-window
                    v-model="onboarding"
                    reverse
                >
                    <v-window-item
                    v-for="n in length"
                    :key="`card-${n}`"
                    >
                    <v-card
                        color="grey"
                        height="500"
                    >
                        <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <h1
                            style="font-size: 5rem;"
                            class="white--text"
                        >
                            Slide {{ n }}
                        </h1>
                        <v-img src="../assets/icon.jpg" max-height="100" max-width="100" contain dark></v-img>
                        </v-row>
                    </v-card>
                    </v-window-item>
                </v-window>
            
                <v-card-actions class="justify-space-between">
                    <v-btn
                    text
                    @click="prev"
                    >
                    <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                    >
                    <v-item
                        v-for="n in length"
                        :key="`btn-${n}`"
                        v-slot="{ active, toggle }"
                    >
                        <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                        >
                        <v-icon>mdi-record</v-icon>
                        </v-btn>
                    </v-item>
                    </v-item-group>
                    <v-btn
                    text
                    @click="next"
                    >
                    <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'AppHome',
    data() {
        return {
            length: 3,
            onboarding: 0
        }
    },
    methods: {
        next() {
            this.onboarding = this.onboarding + 1 === this.length
                ? 0
                : this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0
                ? this.length - 1
                : this.onboarding - 1
        }
    }
}
</script>

<style>

</style>