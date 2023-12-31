import html from '../core.js'
import { connect } from '../store.js'

import Header from './Header.js'
import ToDoList from './ToDoList.js'
import Footer from './Footer.js'

const connector = connect()

function App({ todos }) {
    return html`
        <section class="to-do-app">
            ${Header()}
            ${todos.length > 0 && ToDoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connector(App)