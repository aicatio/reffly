import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useSelector } from 'react-redux';

import { CookieState } from '../../redux/reducers/cookie';

type StateType = {
  cookie: CookieState;
}

const CookieBanner = () => {
  const cookieState = useSelector((state: StateType) => state.cookie);

  return cookieState.CookieConsent != 'OK' ? (
    <CookieConsent
      acceptOnScroll={true}
      acceptOnScrollPercentage={50}
      visible="byCookieValue"
      cookieName="Reffly_CookieConsent"
      cookieValue="OK"
      location="top"
    >
      This website uses cookies to enhance the user experience, by continueing
      you aggree to allow cookies.
    </CookieConsent>
  ) : null;
}

export default CookieBanner;
