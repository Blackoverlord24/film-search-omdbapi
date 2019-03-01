<template>
    <div>
        <v-layout row class="pt-2">
            <film-search/>
        </v-layout>
        <v-layout row  class="pt-2" v-if="this.$store.getters.film">
            <film-preview />
            <film-full-info />
            <film-plot />
        </v-layout>
    </div>
</template>

<script>
  import FilmSearch from './FilmSearch'
  import FilmPreview from './FilmPreview'
  import FilmFullInfo from './FilmFullInfo'
  import FilmPlot from './FilmPlot'

  export default {
    components: {
      FilmSearch,
      FilmPreview,
      FilmFullInfo,
      FilmPlot
    }
  }
</script>
