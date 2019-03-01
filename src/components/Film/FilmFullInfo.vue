<template>
    <v-flex xs5 sm5 md5 class="pr-3" v-if="is_full_info">
        <v-card>
            <v-card-title class="justify-center">
                <span class="headline">Полная информация по фильму {{film.Title}}</span>
            </v-card-title>

            <v-card-text>
                <p><b>Актеры:</b> {{film.Actors}} </p>
                <p><b>Награды:</b> {{film.Awards}} </p>
                <p><b>Страна:</b> {{film.Country}} </p>
                <p><b>Сборы:</b> {{film.BoxOffice}} </p>
                <p><b>DVD:</b> {{film.DVD}} </p>
                <p><b>Режисер:</b> {{film.Director}} </p>
                <p><b>Жанр :</b> {{film.Genre}} </p>
                <p><b>Языки :</b> {{film.Language}} </p>
                <p><b>Metascore :</b> {{film.Metascore}} </p>
                <p><b>Производство :</b> {{film.Production}} </p>
                <p><b>Рейтинг :</b> {{film.Rated}} </p>
                <p><b>Дата выхода :</b> {{film.Released}} </p>
                <p><b>Длительность :</b> {{film.Runtime}} </p>
                <p><b>Сценарист :</b> {{film.Writer}} </p>
                <p><b>Голоса imdb :</b> {{film.imdbVotes}} </p>
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
