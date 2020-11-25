Nova.booting((Vue, router) => {
    Vue.component('error-403', require('./components/403'));
    Vue.component('error-404', require('./components/404'));
})