<template>
    <div class="header">
        <v-app-bar 
            flat
            app
        >
            <v-app-bar-nav-icon 
                @click="drawer=!drawer"
                class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-app-bar-title app class="red--text display-1">
                <router-link style="cursor: pointer;" to="/" tag="span">
                    <v-icon large>mdi-dog</v-icon>
                    <v-icon large>mdi-cat</v-icon>
                    {{ appTitle }}
                    <!-- <span>
                        <span>Animal Home</span>
                    </span> -->
                </router-link>
                
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn 
                    text
                    v-for="link in links" 
                    :key="link.text" 
                    :to="link.route"
                >
                    <v-icon>{{link.icon}}</v-icon>
                    <span>{{link.text}}</span>
                </v-btn>
                
                <!-- <v-btn 
                    text
                    color="grey"
                >
                    <span>Sign Out</span>
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn> -->
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer
            app
            class="indigo"
            v-model="drawer"
            temporary 
            absolute
        >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
    
            
</template>

<script>
export default {
    name: 'HeaderApp',
    data() {
        return {
            appTitle: 'Animal Home',
            drawer: false,
            links: [
                //{ icon: 'mdi-home', text: 'Главная', route: '/' },
                { icon: 'mdi-dog', text: 'Наши собачки', route: '/dogs' },
                { icon: 'mdi-cat', text: 'Наши кошечки', route: '/cats' },
                { icon: 'mdi-store', text: 'Магазин', route: '/store' },
                { icon: 'mdi-cart', text: 'Корзина', route: '/cart' },
                { icon: 'mdi-information', text: 'О нас', route: '/about' },
            ]
        }
    }
}
</script>

