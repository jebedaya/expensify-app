import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'test expense',
        note: 'test expense note',
        amount: 5000,
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            amount: 5000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state.find(({ id } ) => id === '2')).toEqual({...expenses.find(expense => expense.id === '2'), amount: 5000});
});

test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            amount: 5000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});