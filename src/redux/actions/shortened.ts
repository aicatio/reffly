import axios from 'axios';
import { SHORTENED_STORE_SHORT_URL } from '../actions/_types';
import configs from '../../configs'

type ReaquestCallback = (status: boolean, message: string) => void | boolean;

export const createShortenedUrl = (
  origUrl: string,
  callbac: ReaquestCallback
) => (dispatch: any) => {
  axios
    .post(configs.url_api + '/url/create', { origUrl })
    .then(response => {
      if (response.status == 200) {
        callbac(response.data.status == 'success', response.data.message);
        if (response.data.status == 'success') {
          dispatch({
            type: SHORTENED_STORE_SHORT_URL,
            payload: [origUrl, response.data.shortUrl],
          });
        }
        return;
      }
      callbac(false, 'Network error');
    })
    .catch(() => {
      callbac(false, 'Network error');
    });
};
