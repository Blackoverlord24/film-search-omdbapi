import Vue from 'vue'

Vue.filter('checkValueOnNaN', function (value) {
    let newValue = value
    if(!value || value === 'N/A') {
        newValue = 'Информация отсутствует'
    }

    return newValue
})
