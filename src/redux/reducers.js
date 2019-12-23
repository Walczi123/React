import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_CREATED } from './constants';
import { EMPLOYEES_LOADING } from './constants';
import { EMPLOYEES_LOADING_ERROR } from './constants';

export const initialState = {
  employees: [],
  isLoading: false,
  error: null,
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees, alreadyLoaded: true, isLoading: false};
    }
    case EMPLOYEE_CREATED: {
      const { employee } = action.payload;
      return {
        ...state,
        employees: [...state.employees, employee]
      }
    }
    case EMPLOYEES_LOADING: {
      return {...state, isLoading: true, error: null};
    }
    case EMPLOYEES_LOADING_ERROR: {
      const error = action.payload;
      return {...state, isLoading: false, error};
    }
    default:
        return state
  }
}

export default appReducer;