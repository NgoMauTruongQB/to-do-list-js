import html from '../core.js'
import { connect } from '../store.js'
import ToDoItem from './ToDoItem.js'

const connector = connect()

function ToDoList({ todos, filter, filters }) {
    return html`
        <section class="main">
            <label class="check-all">
                <input 
                    type="checkbox"
                    onchange="dispatch('toggleAll', this.checked)"
                    ${todos.every(filters.completed) && 'checked'}
                >
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
                <p>Check all</p>
            </label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => ToDoItem({ todo, index })
                )}
            </ul>
        </section>
    `
}

export default connector(ToDoList)