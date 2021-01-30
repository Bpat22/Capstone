import * as ActionTypes from './ActionTypes';

export const CDAccounts = (state = {
        isLoading: true,
        errMess: null,
        leaders: []
        }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CDACCOUNT:
            return { ...state, isLoading: false, errMess: null, accounts: action.payload };

        case ActionTypes.CDACCOUNT_LOADING:
            return { ...state, isLoading: true, errMess: null, accounts: [] };

        case ActionTypes.CDACCOUNT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, accounts: [] };

        default:
            return state;
    }

}