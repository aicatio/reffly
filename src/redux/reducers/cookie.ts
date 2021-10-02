import Cookies from 'js-cookie';

import { COOKIE_ADD_COOKIE } from '../actions/_types';

export interface CookieState {
  [key: string]: any;
}

export const cookieReducer = (
  state: any = { CookieConsent: Cookies.get('Reffly_CookieConsent') },
  action: { type: string; payload: [string, any] }
) => {
  switch (action.type) {
    case COOKIE_ADD_COOKIE: {
      let newCookie: CookieState = {};
      newCookie[action.payload[0]] = action.payload[1];
      Cookies.set('Reffly_' + action.payload[0], action.payload[1]);
      return { ...state, ...newCookie };
    }
    default:
      return state;
  }
};
