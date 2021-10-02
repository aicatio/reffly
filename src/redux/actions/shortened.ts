import Cookies from 'js-cookie';

import { SHORTENED_ADD_SHORT_URL } from '../actions/_types';

export const setShortenedUrl = (response: string[]) => (dispatch: any) => {
  Cookies.set('Reffly_OrigUrl', response[0]);
  Cookies.set('Reffly_ShortUrl', response[1]);

  dispatch({
    type: SHORTENED_ADD_SHORT_URL,
    payload: response,
  });
};
