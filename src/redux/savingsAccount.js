import * as ActionTypes from './ActionTypes';

export const SavingsAccounts = (state = {
        isLoading: true,
        errMess: null,
        leaders: []
        }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SAVINGS_ACCOUNT:
            return { ...state, isLoading: false, errMess: null, account: action.payload };

        case ActionTypes.SAVINGS_ACCOUNT_LOADING:
            return { ...state, isLoading: true, errMess: null, account: [] };

        case ActionTypes.SAVINGS_ACCOUNT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, account: [] };

        default:
            return state;
    }

}