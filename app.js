const App = {
    data() {
        return {
            placeholderMy: 'Enter text here',
            title: 'Notes list',
            inputValue: '',
            notes: ['First note', 'Second note']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },

        // в html code: v-on:keypress="inputKeyPress",  вместо этого  v-on:keypress.enter="addNewNote"
        // Здесь мы отлавливали нажатие клавиши Enter
        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx ) { //если нужен еще и event, то в html в функцию передаем $event
            this.notes.splice(idx, 1)
        }

    }
}

Vue.createApp(App).mount('#app')