import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './reducer/Store2';

const store = configureStore({
    reducer : rootReducers

})

export default store;