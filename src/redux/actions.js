import { EMPLOYEES_LOADED, EMPLOYEE_CREATED } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}
export const employeeCreated = employee => {
  return {
    type: EMPLOYEE_CREATED,
    payload: {
      employee
    }
  };
};