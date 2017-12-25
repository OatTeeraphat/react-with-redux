import { Persons , isLoading , isError , focus } from './mockItems'
import { combineReducers} from 'redux';

// Reducer Distribute Structure 
export default combineReducers({
    Persons,
    isLoading,
    isError,
    focus
})