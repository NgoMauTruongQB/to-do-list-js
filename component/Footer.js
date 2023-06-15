import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function Footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length}</strong> 
                item
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li onclick="dispatch('switchFilter', '${type}')">
                        <a class="${filter === type && 'selected' }" href="#">
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            ${todos.filter(filters.completed).length > 0 && 
                html`<button class="clear-completed">Clear completed</button>`
            }
        </footer>
    `
}

export default connector(Footer)