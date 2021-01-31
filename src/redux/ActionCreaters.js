import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { CHECKING_ACCOUNTS } from '../shared/checkingAccounts';
import { SAVINGS_ACCOUNT } from '../shared/savingsAccount';
import { CDACCOUNTS } from '../shared/cdAccounts';

export const fetchUser = () => (dispatch) => {
    dispatch(userLoading(true));
    
}

//Checking
export const fetchCheckingAccounts = () => (dispatch) => {
    dispatch(checkingAccountLoading(true));
//not sure how this works
}
export const addCheckingAccount = (accounts) => ({
    type: ActionTypes.ADD_CHECKING_ACCOUNTS,
    payload: accounts
})
export const checkingAccountLoading = () => ({
    type: ActionTypes.CHECKING_ACCOUNTS_LOADING
})
export const checkingAccountsFailed = (errmess) => ({
    type: ActionTypes.CHECKING_ACCOUNTS_FAILED,
    payload: errmess
})

//Savings
export const fetchSavingsAccount = () => (dispatch) => {
    dispatch(savingsAccountLoading(true));
//not sure how this works
}
export const addSavingsAccount = (accounts) => ({
    type: ActionTypes.ADD_SAVINGS_ACCOUNT,
    payload: accounts
})
export const savingsAccountLoading = () => ({
    type: ActionTypes.SAVINGS_ACCOUNTS_LOADING
})
export const savingsAccountsFailed = (errmess) => ({
    type: ActionTypes.SAVINGS_ACCOUNTS_FAILED,
    payload: errmess
})

//CDAccount
export const fetchCdAccounts = () => (dispatch) => {
    dispatch(cdAccountsLoading(true));
//not sure how this works
}
export const addCdAccount = (accounts) => ({
    type: ActionTypes.ADD_CDACCOUNTS,
    payload: accounts
})
export const cdAccountLoading = () => ({
    type: ActionTypes.CDACCOUNT_LOADING
})
export const cdAccountsFailed = (errmess) => ({
    type: ActionTypes.CDACCOUNTS_FAILED,
    payload: errmess
})