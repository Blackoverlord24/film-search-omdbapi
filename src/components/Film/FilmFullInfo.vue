<template>
    <v-flex xs5 sm5 md5 class="pr-3" v-if="is_full_info">
        <v-card>
            <v-card-title class="justify-center">
                <span class="headline">Полная информация по фильму {{film.Title}}</span>
            </v-card-title>

            <v-card-text>
                <p><b>Актеры:</b> {{film.Actors | checkValueOnNaN}} </p>
                <p><b>Награды:</b> {{film.Awards | checkValueOnNaN}} </p>
                <p><b>Страна:</b> {{film.Country | checkValueOnNaN}} </p>
                <p><b>Сборы:</b> {{film.BoxOffice | checkValueOnNaN}} </p>
                <p><b>DVD:</b> {{film.DVD | checkValueOnNaN}} </p>
                <p><b>Режисер :</b> {{film.Director | checkValueOnNaN}} </p>
                <p><b>Жанр :</b> {{film.Genre | checkValueOnNaN}} </p>
                <p><b>Языки :</b> {{film.Language | checkValueOnNaN}} </p>
                <p><b>Metascore :</b> {{film.Metascore | checkValueOnNaN}} </p>
                <p><b>Производство :</b> {{film.Production | checkValueOnNaN}} </p>
                <p><b>Рейтинг :</b> {{film.Rated | checkValueOnNaN}} </p>
                <p><b>Дата выхода :</b> {{film.Released | checkValueOnNaN}} </p>
                <p><b>Длительность :</b> {{film.Runtime | checkValueOnNaN}} </p>
                <p><b>Сценарист :</b> {{film.Writer | checkValueOnNaN}} </p>
                <p><b>Голоса imdb :</b> {{film.imdbVotes | checkValueOnNaN}} </p>
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
