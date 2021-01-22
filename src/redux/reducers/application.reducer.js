import {INIT_APPLICATION} from '../actions/application.actions'
import manifest from '../../../app.json'

const {name, version} = manifest

const initialState = {
    status: false,
    version: -1,
}

const applicationReducer = (state = initialState, aciton) =>{
    switch(aciton.type){
        case INIT_APPLICATION: {
            return {
                status: true,
                version, 
                name
            }
        }
        default: {
            return state
        }
    }
}

export default applicationReducer