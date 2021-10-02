import Cookies from 'js-cookie';

import { SHORTENED_STORE_SHORT_URL } from '../actions/_types';

export interface ShortenedState {
  shortUrl: string | undefined;
  origUrl: string | undefined;
}
export interface ShortenedPayload {
  type: string;
  payload: string[];
}

const initialState = {
  shortUrl: Cookies.get('Reffly_ShortUrl'),
  origUrl: Cookies.get('Reffly_OrigUrl'),
};

export const shortenedReducer = (
  state: ShortenedState = initialState,
  action: ShortenedPayload
) => {
  switch (action.type) {
    case SHORTENED_STORE_SHORT_URL: {
      Cookies.set('Reffly_OrigUrl', action.payload[0]);
      Cookies.set('Reffly_ShortUrl', action.payload[1]);
      return {
        origUrl: action.payload[0],
        shortUrl: action.payload[1],
      };
    }
    default:
      return state;
  }
};
