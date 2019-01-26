import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with 1 expenses from fixture expenses', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expense}/>);
    expect(wrapper).toMatchSnapshot();
});