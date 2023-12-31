import { createStore } from './core.js'
import reducer from './reducer.js'
import widthLogger from './logger.js'

const { attach, connect, dispatch } = createStore(widthLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}