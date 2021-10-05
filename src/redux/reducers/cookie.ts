import Cookies from 'js-cookie';

import { COOKIE_ADD_COOKIE } from '../actions/_types';
import { COOKIE_DELETE_COOKIE } from '../actions/_types';

export interface CookieState {
  [key: string]: any;
}
export interface ActionInterface {
  type: string;
  payload: string | any;
}

export const cookieReducer = (
  state: any = { CookieConsent: Cookies.get('Reffly_CookieConsent') },
  action: ActionInterface
) => {
  switch (action.type) {
    case COOKIE_ADD_COOKIE: {
      let newCookie: CookieState = {};
      newCookie[action.payload[0]] = action.payload[1];
      Cookies.set('Reffly_' + action.payload[0], action.payload[1]);
      return { ...state, ...newCookie };
    }
    case COOKIE_DELETE_COOKIE: { 
      Cookies.remove('Reffly_' + action.payload);
      // @ts-expect-error
      return state.filter((value, index: string) => index !== action.payload);
    }
    default:
      return state;
  }
};
