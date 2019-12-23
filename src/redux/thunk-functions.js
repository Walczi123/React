import {
    employeesLoadingError,
    employeesLoaded,
    employeesLoading
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