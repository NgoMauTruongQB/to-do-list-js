import html from '../core.js'

function Header() {
    return html`
    <header class="header">
        <h1>Task List</h1>
        <input 
            type="text" 
            class="new-todo" 
            placeholder="What needs to be done?" 
            autofocus
            onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
        >
    </header>
    `
}

export default Header