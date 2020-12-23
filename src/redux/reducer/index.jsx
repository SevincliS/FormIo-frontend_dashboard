import toggleReducer from './ToggleMenu'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    toggleMenu: toggleReducer,
})

export default allReducers