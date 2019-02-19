import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default expenses values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        id: '129',
        description: 'Laptop', 
        note: '', 
        amount: 28000, 
        createdAt: 0
    } 
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses, action.expense
    ]); 
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should note remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: '50',
            amount: 50,
            createdAt: moment(0),
            note: 'blablabla'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual({
        id: expenses[1].id,
        description: '50',
        amount: 50,
        createdAt: moment(0),
        note: 'blablabla'
    });
});

test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 5,
        updates: {
            description: '50',
            amount: 50,
            createdAt: moment(0),
            note: 'blablabla'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});