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
        //в интерполяции можно вызывать не только свойства обьекта data но и методы!
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            //(idx, event) если нужен еще и event browser, то в html в функцию передаем $event
            //но возможно он передается по умолчанию и в html в функцию передавать не нужно?
            this.notes.splice(idx, 1)
        },
        //будет вызвано каждый раз при взаимодействии с this.notes а это потеря производительности,
        // вместо этого нужно использовать computed
        // doubleCount() {
        //     return this.notes.length * 2;
        // }
    },
    computed: {
        // данные методы обязаны что то возвращать и зависят от переменнных вычисляемых результат в приложения
        // обращаемя к ним через геттеры и сеттеры (без круглых скобок) как к переменным
        doubleCountComputed() {
            return this.notes.length * 2;
        }
    }
}

Vue.createApp(App).mount('#app')
