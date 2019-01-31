import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary with 2 expenses totalling 83.60 Shmekels', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={8360} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with 1 expense totalling 12.50 Shmekels', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1250} />);
    expect(wrapper).toMatchSnapshot();
});
