/*
 * action types
 */

export const LOGIN_ACC = 'LOGIN_ACC'

/*
 * action creators
 */

export function loginAcc(email, password) {
  return { type: LOGIN_ACC, email, password}
}