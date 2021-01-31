import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

import { User } from './user';
import { CheckingAccounts } from './checkingAccounts';
import { SavingsAccount } from '/.savingsAccount';
import { CDAccounts } from './cdAccounts';
import { InitialState } from './forms';


export const ConfigureStore = () => {
    const store = createStore (
        combineReducers ({
            user: User,
            checkingAccounts: CheckingAccounts,
            savingsAccount: SavingsAccount,
            cdAccount: CDAccounts,
            ...createForms({
                newUser: InitialState
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}