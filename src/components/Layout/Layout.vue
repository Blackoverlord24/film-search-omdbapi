<template>
    <v-app>
        <div>
            <v-content>
                <v-container>
                    <film />
                </v-container>
            </v-content>
        </div>
    </v-app>
</template>

<script>
    import Film from '../Film/Film'

  export default {
    components: {
        Film
    }
  }
</script>
