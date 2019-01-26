import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual( {
          text: '',
          sortBy: 'date',
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month')
      });
});

test('should set sortBy to amount', ()=> {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort By to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { 
        type: 'SET_TEXT_FILTER', 
        text: 'test text filter'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0).add(70, 'year')
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(action.startDate);
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).add(100, 'year')
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(action.endDate);
});
