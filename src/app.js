import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment';

const store = configureStore();

// console.log(store.getState());

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water bill', amount: 4500000, createdAt: moment() }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 0, createdAt: moment().add(4, 'days').valueOf() }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: moment().add(6, 'days').valueOf() }));


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));


// ./ means relative directory