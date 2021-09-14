import { apiClient } from "../../../config/apiClient";
import { 
    CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS,
    GET_PROFILE_ERROR, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, 
    UPDATE_PROFILE_ERROR, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS 
} from "../actiontypes";

export const getProfile = () => {
    return async(dispatch) =>{
        dispatch(getProfileRequest())
        await apiClient(true).get(`api/superadmin/get-detail`)
        .then(response => {
            dispatch(getProfileSuccess(response.data))
        }).catch(error => {
            dispatch(getProfileError(error))

        })
    }
}

export const getProfileRequest = () => {
    return {
        type: GET_PROFILE_REQUEST
    }
}
export const getProfileSuccess = (data) => {
    return {
        type: GET_PROFILE_SUCCESS,
        payload:data
    }
}
export const getProfileError = (error) => {
    return {
        type: GET_PROFILE_ERROR,
        payload:error
    }
}

// -----------------------------

export const updateProfile = (data) => {
    return async(dispatch) =>{
        dispatch(updateProfileRequest())
        await apiClient(true).post(`api/superadmin/update-profile`, data)
        .then(response => {
            const data = response.data
            if (data.status === true) {
                dispatch(updateProfileSuccess(data))
                setTimeout(() => {
                    dispatch(getProfile())
                }, 2000);
            } else {
                dispatch(updateProfileError(data))
            }
        }).catch(error => {
            dispatch(updateProfileError(error))

        })
    }
}

export const updateProfileRequest = () => {
    return {
        type: UPDATE_PROFILE_REQUEST
    }
}
export const updateProfileSuccess = (data) => {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload:data
    }
}
export const updateProfileError = (error) => {
    return {
        type: UPDATE_PROFILE_ERROR,
        payload:error
    }
}


// -----------------------------

export const changePassword = (data) => {
    return async(dispatch) =>{
        dispatch(changePasswordRequest())
        await apiClient(true).post(`api/signee/signee-change-password`, data)
        .then(response => {
            const data = response.data
            if (data.status === true) {
                dispatch(changePasswordSuccess(data))
            } else {
                dispatch(changePasswordError(data))
            }
        }).catch(error => {
            dispatch(changePasswordError(error))

        })
    }
}

export const changePasswordRequest = () => {
    return {
        type: CHANGE_PASSWORD_REQUEST
    }
}
export const changePasswordSuccess = (data) => {
    return {
        type: CHANGE_PASSWORD_SUCCESS,
        payload:data
    }
}
export const changePasswordError = (error) => {
    return {
        type: CHANGE_PASSWORD_ERROR,
        payload:error
    }
}