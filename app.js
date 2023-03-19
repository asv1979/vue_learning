Vue.createApp({
    // data() {return {title: 'Main page'} }
    // data: () => { return {title: 'Main page'}}, но если обвернуть в () то return по умолчанию!
    data: () => ({
        title: 'Main page'
    }),
    methods: {}
}).mount('#app')
