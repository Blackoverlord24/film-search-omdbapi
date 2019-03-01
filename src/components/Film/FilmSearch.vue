<template>
    <v-flex xs12 sm12 md12>
        <v-card>
            <v-card-title>
                <span class="headline">Поиск фильма</span>
            </v-card-title>

            <v-card-text>
                <v-form v-model="formValidation" ref="form" validation @keyup.enter.native="search">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        :rules="[titleValidateRules.required]"
                                        v-model="searchParams.title"
                                        label="Название">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs1 sm1 md1>
                                <v-text-field
                                        v-model="searchParams.year"
                                        label="Год">
                                </v-text-field>
                            </v-flex>
                            <v-flex xs3 sm3 md3>
                                <v-select
                                        v-model="searchParams.plot"
                                        :items="plotItem"
                                        item-text="text"
                                        item-value="value"
                                        label="Тип сценария"
                                ></v-select>
                            </v-flex>
                            <v-flex xs3 sm3 md3>
                                <v-select
                                        v-model="searchParams.type"
                                        :items="typeItem"
                                        item-text="text"
                                        item-value="value"
                                        label="Тип"
                                ></v-select>
                            </v-flex>
                            <v-flex xs2 sm2 md2>
                                <v-btn
                                        block color="success"
                                        @click="search"
                                        :disabled="!formValidation || loading"
                                >
                                    Поиск
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-flex>

</template>

<script>
  export default {
    data() {
      return {
        formValidation: false,
        plotItem: [{text: 'Короткий', value: 'short'}, {text: 'Полный', value: 'full'}],
        typeItem: [
          {text: 'Фильм', value: 'movie'},
          {text: 'Сериал', value: 'series'},
          {text: 'Эпизод', value: 'episode'}
        ],
        titleValidateRules: {
          required: value => !!value || 'Поле обязательно к заполнению.'
        },
        searchParams: {
          title: '',
          year: '',
          plot: 'short',
          type: ''
        }
      }
    },
    methods: {
      async search() {
        if(this.searchParams.title){
          await this.$store.dispatch('fetchFilms', this.searchParams)
        }
      }
    },
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
    }
  }
</script>

