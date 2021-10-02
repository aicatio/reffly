import { COOKIE_ADD_COOKIE } from '../actions/_types';

export const setCookieAccepted = () => (dispatch: any) => {
  dispatch({
    type: COOKIE_ADD_COOKIE,
    payload: ['CookieConsent', 'OK'],
  });
};
