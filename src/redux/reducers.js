import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_CREATED } from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case EMPLOYEE_CREATED: {
      const { employee } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employee };
    }
    default:
        return state
  }
}

export default appReducer;