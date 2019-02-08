import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'l3gsmqdWwOffS5BcrR9A3SoEcIZ2';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid});
});

test('should clear uid for logout', () => {
    const prevState = { uid: 'l3gsmqdWwOffS5BcrR9A3SoEcIZ2' };
    const action = { type: 'LOGOUT' };
    const state = authReducer(prevState, action);
    expect(state).toEqual({});
});
