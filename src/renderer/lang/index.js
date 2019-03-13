import Vue from 'vue'
import VueI18n from 'vue-i18n'
import setLanguages from './fn'
import enLocale from './en'
import zhLocale from './zh'
import twLocale from './tw'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale
    },
    zh: {
        ...zhLocale
    },
    tw: {
        ...twLocale
    }
}

const i18n = new VueI18n({
    // set locale
    // options: en | zh | es
    locale: localStorage.getItem('language') || setLanguages(),
    messages
    // set locale messages
})

export default i18n
