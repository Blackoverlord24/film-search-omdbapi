<template>
    <v-flex xs4 sm4 md4 v-if="is_full_info">
        <v-card>
            <v-card-title class="justify-center">
                <span class="headline">Сюжет</span>
            </v-card-title>

            <v-card-text class="text-lg-center">
                <p>{{film.Plot | checkValueOnNaN}}</p>
            </v-card-text>
        </v-card>
        <hr>
        <v-card v-if="film.Ratings.length">
            <v-card-title class="justify-center">
                <span class="headline">Рейтинг</span>
            </v-card-title>

            <v-card-text class="text-lg-center">
                <p v-for="(rating, index) in film.Ratings" :key="index">
                    <b>Источник:</b> {{rating.Source}}, <b>Оценка:</b> {{rating.Value}}
                </p>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
  export default {
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
