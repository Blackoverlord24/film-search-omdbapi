<template>
    <v-flex xs3 sm3 md3>
        <v-card width="300px">
            <v-img class="white--text" width="300px" :src="posterUrl()">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">{{film.Title}}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-title>
                <div>
                    <span class="grey--text">Год: {{film.Year}}</span><br>
                    <span><b>Рейтинг imd</b> : {{film.imdbRating | checkValueOnNaN}}</span><br>
                    <span><b>Длительность</b>: {{film.Runtime | checkValueOnNaN}}</span>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn v-if="!is_full_info" flat color="orange" @click="changeFullInfoVisible">Подробнее</v-btn>
                <v-btn v-else flat color="orange" @click="changeFullInfoVisible">Скрыть</v-btn>
                <v-btn
                        v-if="film.Website !== 'N/A' && film.hasOwnProperty('Website')"
                        flat
                        color="orange"
                        :href="film.Website">
                    Сайт ресурса
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
  export default {
    methods: {
        changeFullInfoVisible() {
            this.$store.commit('changeFullInfoVisible')
        },
        posterUrl () {
            let src = require('../../assets/no_poster.png')
            if (this.film.Poster !== 'N/A') {
                src = this.film.Poster
            }

            return src
        }
    },
    computed: {
      film () {
        return this.$store.getters.film
      },
      is_full_info () {
        return this.$store.getters.is_full_info
      }
    }
  }
</script>

<style scoped>

</style>
