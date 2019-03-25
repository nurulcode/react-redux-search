import {
    ADD_DATA,
    EDIT_DATA,
    DELETE_DATA,
    LOAD_PHONEBOOKS_SUCESS,
    LOAD_PHONEBOOKS_FAILURE,
    ADD_PHONEBOOKS_SUCESS,
    ADD_PHONEBOOKS_FAILURE}
    from '../constants/ActionTypes';

    export default function data(state = [], action){
        switch (action.type) {
            case ADD_PHONEBOOKS_SUCESS:
            let dataAdd = state
            let add = dataAdd.map(function (x) {
                if (x.id === action.id) {
                    x.title = action.title;
                    x.content = action.content;
                    x.category = action.category;
                    x.file = action.id;
                    x.student_access = JSON.parse(action.student_access);
                }
                return x;
            });
            return add

            case LOAD_PHONEBOOKS_SUCESS:
            return action.phonebooks

            case ADD_DATA:
            return [
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone
                },
                ...state
            ]

            case EDIT_DATA:
            return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}) : data)

            case DELETE_DATA:
            return state.filter(data => data.id !== action.id)

            case LOAD_PHONEBOOKS_FAILURE:
            return state

            case ADD_PHONEBOOKS_FAILURE:
            return state

            default:
            return state

        }
    }
