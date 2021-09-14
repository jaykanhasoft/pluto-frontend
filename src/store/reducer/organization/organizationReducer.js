import * as actionTypes from '../../action/actiontypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    getOrglist:[],
    getOrgError:""
}

const organizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORGANIZATION_REQUEST:
            return updateObject(state, {
                loading: true,
                getOrglist:"",
                getOrgError:""
            })

        case actionTypes.GET_ORGANIZATION_SUCCESS:
            return updateObject(state, {
                loading: false,
                getOrglist: action.payload
            })

        case actionTypes.GET_ORGANIZATION_ERROR:
            return updateObject(state, {
                loading: false,
                getOrgError: true
            })

        default:
            return state
    }
}

export default organizationReducer