import usersReducer, { getUsers } from './usersSlice';

describe('usersSlice', () => {
  const initialState = { users: [], loading: false, error: null };

  it('should handle initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getUsers pending', () => {
    const action = { type: getUsers.pending.type };
    const state = usersReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should handle getUsers fulfilled', () => {
    const action = { type: getUsers.fulfilled.type, payload: [{ id: 1, name: 'John Doe' }] };
    const state = usersReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.users).toEqual(action.payload);
  });

  it('should handle getUsers rejected', () => {
    const action = { type: getUsers.rejected.type, error: { message: 'Error' } };
    const state = usersReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error');
  });
});