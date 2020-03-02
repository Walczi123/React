import {
    employeesLoadingError,
    employeesLoaded,
    employeesLoading,
    loginSuccess,
    loginError
  } from "./actions";

  export const loadEmployees = () => {
    return dispatch => {
      dispatch(employeesLoading());
      return fetch("http://localhost:3004/employees")
        .then(data => data.json())
        .then(
          employees => dispatch(employeesLoaded(employees)),
          error => dispatch(employeesLoadingError(error))
        );
    };
  };
  export const login = name => {
    return dispatch => {
      return fetch("http://localhost:3004/users")
        .then(data => data.json())
        .then(users => {
          const user = users.find(user => user.username === name);
          if (user !== undefined) {
            dispatch(loginSuccess(user));
          } else {
            dispatch(loginError(name));
          }
        });
    };
  };