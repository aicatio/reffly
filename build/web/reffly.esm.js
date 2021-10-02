import React__default, { createElement, useState, Fragment } from 'react';
import { styled, createTheme, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';
import CssBaseline$1 from '@mui/material/CssBaseline';
import Container$2 from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import GitHub from '@mui/icons-material/GitHub';
import { Container, Box, Link, Typography as Typography$1, Card as Card$1, CardMedia, Stack } from '@mui/material';
import InsertLink from '@mui/icons-material/InsertLink';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AddLink from '@mui/icons-material/AddLink';
import Box$1 from '@mui/material/Box';
import Link$1 from '@mui/material/Link';
import { ThemeProvider } from '@mui/material//styles';
import { CssBaseline, Container as Container$1 } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Favorite from '@mui/icons-material/Favorite';
import CookieConsent from 'react-cookie-consent';
import { useSelector, useDispatch } from 'react-redux';
import { blue, grey, orange, green } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Cookies from 'js-cookie';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Carbon from 'react-carbon';
import Paper from '@mui/material/Paper';
import { Link as Link$2 } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

var StyledBadge = /*#__PURE__*/styled(Badge)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.dark,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper,
      width: '15px',
      height: '15px',
      borderRadius: '7.5px',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""'
      }
    }
  };
});
function RefflyLogo() {
  var handleClick = function handleClick() {
    console.info('You clicked the Avatar.');
  };

  return createElement(Grid, {
    item: true,
    xs: 12
  }, createElement(Grid, {
    container: true,
    mt: 5,
    justifyContent: "center"
  }, createElement(StyledBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, createElement(Avatar, {
    onClick: handleClick,
    style: {
      transform: 'rotate(-50deg)'
    },
    sx: {
      width: 80,
      height: 80,
      bgcolor: 'tertiary.main'
    }
  }, createElement(InsertLink, {
    sx: {
      fontSize: 70,
      color: 'secondary.dark'
    },
    color: "primary"
  }))), createElement(Typography, {
    fontFamily: "Beth Ellen",
    sx: {
      fontSize: 40,
      fontWeight: 'bold',
      mt: 1,
      color: 'secondary.dark'
    }
  }, "reffly")), createElement(Grid, {
    container: true,
    sx: {
      mb: 6,
      mt: 1
    },
    justifyContent: "center"
  }, createElement(Typography, null, "Free, Open source, Community driven!")));
}

var StyledBadge$1 = /*#__PURE__*/styled(Badge)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.refflyplus.primary,
      color: theme.palette.refflyplus.primary,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper,
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  };
});
function RefflyPlus() {
  return createElement(StyledBadge$1, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, createElement(Avatar, {
    variant: "rounded",
    sx: {
      bgcolor: 'grey.800'
    }
  }, createElement(AddLink, {
    style: {
      transform: 'rotate(-50deg)'
    },
    sx: {
      color: 'common.white',
      fontWeight: 'bold',
      fontSize: 35
    },
    color: "primary"
  })));
}

function Header() {
  return React__default.createElement(Container, null, React__default.createElement(Box, null, React__default.createElement(AppBar, {
    sx: {
      boxShadow: 0
    },
    color: "transparent",
    position: "relative"
  }, React__default.createElement(Toolbar, {
    sx: {
      justifyContent: 'right',
      p: 5
    }
  }, React__default.createElement(Link, {
    href: "https://reffly.aicat.io/"
  }, React__default.createElement(RefflyPlus, null)), "\xA0\xA0\xA0", React__default.createElement(Link, {
    target: "_blank",
    rel: "noopener",
    href: "https://github.com/aicatio/reffly/"
  }, React__default.createElement(Avatar, {
    sx: {
      bgcolor: 'grey.800'
    },
    variant: "rounded"
  }, React__default.createElement(GitHub, null))))), React__default.createElement(RefflyLogo, null)));
}

var useStyles = /*#__PURE__*/makeStyles(function () {
  return {
    root: {
      position: 'fixed',
      overflowX: 'hidden',
      overflowY: 'auto',
      padding: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  };
});
function FooterLayout(_ref) {
  var sticky = _ref.sticky,
      theme = _ref.theme,
      children = _ref.children;
  // ToDo: add equal height blank space if sticky
  // const theme = useTheme();
  var classes = useStyles();
  return React__default.createElement(ThemeProvider, {
    theme: theme
  }, React__default.createElement(CssBaseline, null), React__default.createElement(Container$1, {
    disableGutters: true,
    className: sticky ? classes.root : '',
    maxWidth: false
  }, React__default.createElement(Box$1, {
    sx: {
      borderTop: '1px solid grey'
    }
  }, React__default.createElement(AppBar, {
    color: "transparent",
    position: sticky ? 'static' : 'relative'
  }, React__default.createElement(Toolbar, null, children)))));
}

function Footer(_ref) {
  var theme = _ref.theme;
  return React__default.createElement(FooterLayout, {
    theme: theme
  }, React__default.createElement(Container$2, null, React__default.createElement(Box$1, {
    sx: {
      flexGrow: 1
    }
  }, React__default.createElement(AppBar, {
    sx: {
      boxShadow: 0,
      p: 0
    },
    color: "transparent",
    position: "static"
  }, React__default.createElement(Toolbar, null, React__default.createElement(Typography, {
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "Made with ", React__default.createElement(Favorite, {
    color: "error"
  }), " in ", React__default.createElement("b", null, "Bangladesh")), React__default.createElement(Typography, {
    variant: "body2",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "Copyright \xA9 ", new Date().getFullYear(), " Reff.ly \xA0|\xA0", React__default.createElement(Link$1, {
    underline: "none",
    href: "/terms-and-conditions"
  }, "Terms"), ' ', "\xA0|\xA0", React__default.createElement(Link$1, {
    underline: "none",
    href: "/privacy-policy"
  }, "Privacy")), React__default.createElement(Link$1, {
    target: "_blank",
    rel: "noopener",
    href: "https://github.com/aicatio/"
  }, React__default.createElement(GitHub, {
    color: "secondary",
    fontSize: "medium"
  })), ' ', "\xA0\xA0\xA0", React__default.createElement(Link$1, {
    target: "_blank",
    rel: "noopener",
    href: "http://linkedin.com/company/reffly/"
  }, React__default.createElement(LinkedIn, {
    color: "secondary",
    fontSize: "medium"
  })), ' ', "\xA0\xA0\xA0", React__default.createElement(Link$1, {
    target: "_blank",
    rel: "noopener",
    href: "https://fb.me/RefflyBD"
  }, React__default.createElement(Facebook, {
    color: "secondary",
    fontSize: "medium"
  })))))));
}

var CookieBanner = function CookieBanner() {
  var cookieState = useSelector(function (state) {
    return state.cookie;
  });
  return cookieState.CookieConsent != 'OK' ? React__default.createElement(CookieConsent, {
    acceptOnScroll: true,
    acceptOnScrollPercentage: 50,
    visible: "byCookieValue",
    cookieName: "Reffly_CookieConsent",
    cookieValue: "OK",
    location: "top"
  }, "This website uses cookies to enhance the user experience, by continueing you aggree to allow cookies.") : null;
};

var theme = /*#__PURE__*/createTheme({
  palette: {
    primary: {
      main: blue[800]
    },
    secondary: {
      main: grey[800]
    },
    tertiary: {
      main: orange[500],
      dark: orange[900],
      light: orange[200]
    },
    refflyplus: {
      primary: green[500],
      secondary: grey[800],
      tertiary: green[900]
    },
    background: {
      "default": '#ECEFF1',
      paper: grey[100]
    }
  },
  typography: {
    h6: {
      fontSize: '1.25rem'
    },
    h5: {
      fontSize: '1.50rem'
    },
    h4: {
      fontSize: '1.75rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '2.25rem'
    },
    h1: {
      fontSize: '2.50rem'
    }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        textColor: '#ffffff',
        color: '#ffffff'
      },
      raisedSecondary: {
        textColor: '#ffffff',
        color: '#ffffff'
      }
    }
  }
});

console.log('current theme:', theme);

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(ThemeProvider$1, {
    theme: theme
  }, React__default.createElement(CssBaseline$1, null), React__default.createElement(Container$2, {
    disableGutters: true,
    maxWidth: false
  }, React__default.createElement(Header, null), children)), React__default.createElement(Footer, {
    theme: theme
  }), React__default.createElement(CookieBanner, null));
};

var Dashboard = function Dashboard() {
  return React__default.createElement("h1", null, "This is Dashboard page");
};

// Actions for "cookie" reducers
var COOKIE_ADD_COOKIE = 'COOKIE_ADD_COOKIE'; // Actions for "shortened" reducers

var SHORTENED_ADD_SHORT_URL = 'SHORTENED_ADD_SHORT_URL';

var setCookieAccepted = function setCookieAccepted() {
  return function (dispatch) {
    dispatch({
      type: COOKIE_ADD_COOKIE,
      payload: ['CookieConsent', 'OK']
    });
  };
};

var setShortenedUrl = function setShortenedUrl(response) {
  return function (dispatch) {
    Cookies.set('Reffly_OrigUrl', response[0]);
    Cookies.set('Reffly_ShortUrl', response[1]);
    dispatch({
      type: SHORTENED_ADD_SHORT_URL,
      payload: response
    });
  };
};

var useStyles$1 = /*#__PURE__*/makeStyles(function (theme) {
  return {
    boxBackground: {
      backgroundColor: theme.palette.primary.main + "15",
      backgroundSize: '5px 5px',
      backgroundImage: "repeating-linear-gradient(45deg, " + theme.palette.common.white + " 0, " + theme.palette.common.white + " 1px, " + theme.palette.primary.main + "15 0, " + theme.palette.primary.main + "15 50%)"
    }
  };
});
function ShortenerResult(_ref) {
  var shortUrl = _ref.shortUrl;

  var _useState = useState(false),
      copied = _useState[0],
      setCopied = _useState[1];

  var classes = useStyles$1();
  return React__default.createElement(CardActions, {
    className: classes.boxBackground
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    mt: 1,
    item: true,
    xs: 6
  }, React__default.createElement(Typography, {
    ml: 1
  }, "To enjoy all features, use self hosted!")), React__default.createElement(Grid, {
    item: true,
    mt: 1,
    xs: 5
  }, React__default.createElement(Input, {
    readOnly: true,
    value: shortUrl,
    disableUnderline: true,
    size: "small",
    fullWidth: true
  })), React__default.createElement(Grid, {
    item: true,
    xs: 1,
    sx: {
      pr: 1,
      mt: 0.5
    }
  }, React__default.createElement(CopyToClipboard, {
    text: shortUrl,
    onCopy: function onCopy() {
      setCopied(true);
      setTimeout(function () {
        setCopied(false);
      }, 5000);
    }
  }, React__default.createElement(Button, {
    sx: {
      "float": 'right',
      textTransform: 'none'
    },
    color: "primary",
    variant: "contained",
    size: "small"
  }, copied ? 'Copied!' : 'COPY')))));
}

var validationSchema = /*#__PURE__*/object().shape({
  origUrl: /*#__PURE__*/string().required('Original Url is required').url('Please enter a valid Url')
});
function Jumptron() {
  var dispatch = useDispatch();

  var _useSelector = useSelector(function (state) {
    return state.shortened;
  }),
      shortUrl = _useSelector.shortUrl,
      origUrl = _useSelector.origUrl;

  var formik = useFormik({
    initialValues: {
      origUrl: origUrl || ''
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, actions) {
      dispatch(setCookieAccepted());
      axios.post('http://localhost:3101/api/add', values).then(function (response) {
        if (response.status == 200) {
          if (response.data.status == 'success') {
            dispatch(setShortenedUrl([values.origUrl, response.data.shortUrl]));
          }

          if (response.data.status == 'failed') {
            actions.setErrors({
              origUrl: response.data.message
            });
          }
        }

        console.log(actions, response);
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        actions.setSubmitting(false);
      });
    }
  });
  var submitBtnProps = {
    loading: formik.isSubmitting,
    disabled: formik.isSubmitting,
    sx: {
      p: 1.7,
      bgcolor: 'secondary.dark'
    },
    size: 'large',
    type: 'submit',
    variant: 'contained'
  };

  if (formik.isSubmitting) {
    submitBtnProps.startIcon = React__default.createElement(AddLink, null);
    submitBtnProps.loadingPosition = 'start';
  }

  return React__default.createElement(Grid, {
    container: true,
    justifyContent: "center"
  }, React__default.createElement(Grid, {
    item: true,
    xs: 9
  }, React__default.createElement(Card, {
    sx: {
      minWidth: 275
    }
  }, React__default.createElement(CardContent, {
    sx: {
      p: 4,
      pb: 2
    }
  }, React__default.createElement("form", {
    onSubmit: formik.handleSubmit
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: 9
  }, React__default.createElement(TextField, {
    fullWidth: true,
    name: "origUrl",
    disabled: formik.isSubmitting,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.origUrl,
    error: formik.touched.origUrl && Boolean(formik.errors.origUrl),
    helperText: formik.touched.origUrl && formik.errors.origUrl,
    placeholder: "Enter your long Url here",
    variant: "outlined"
  })), React__default.createElement(Grid, {
    item: true,
    xs: 3
  }, React__default.createElement(LoadingButton, Object.assign({
    color: "primary",
    fullWidth: true
  }, submitBtnProps), formik.isSubmitting ? 'Processing...' : 'SHORTEN')))), React__default.createElement(Typography, {
    mt: 2,
    variant: "body1",
    color: "text.secondary"
  }, "By using our service, you accept our", ' ', React__default.createElement(Link, {
    href: "/terms-and-conditions"
  }, "Terms"), ' ', "& ", React__default.createElement(Link, {
    href: "/privacy-policy"
  }, "Privacy"))), shortUrl && origUrl && React__default.createElement(ShortenerResult, {
    shortUrl: shortUrl
  }))));
}

// @ts-expect-error

var SponsorshipAd = function SponsorshipAd() {
  return React__default.createElement(Grid, {
    container: true,
    spacing: 2,
    mt: 5
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Grid, {
    container: true,
    justifyContent: "right"
  }, React__default.createElement(Paper, {
    style: {
      fontSize: 12
    },
    elevation: 0,
    sx: {
      maxWidth: 335
    }
  }, React__default.createElement(Carbon, {
    name: "carbon-home",
    placement: "pixelmobco",
    serve: "CK7I42Q7"
  })))), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Typography$1, null, "Fund us on -"), React__default.createElement("img", {
    style: {
      maxHeight: 40
    },
    alt: "BuyMeACoffee",
    src: "https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
  })));
};

var StyledBadge$2 = /*#__PURE__*/styled(Badge)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.refflyplus.secondary,
      color: theme.palette.refflyplus.secondary,
      boxShadow: "0 0 0 2px " + theme.palette.background.paper,
      width: '15px',
      height: '15px',
      borderRadius: '7.5px',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""'
      }
    }
  };
});
function RefflyLogo$1() {
  return createElement(Grid, {
    item: true,
    xs: 12
  }, createElement(Grid, {
    container: true,
    mt: 5,
    justifyContent: "center"
  }, createElement(StyledBadge$2, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, createElement(Avatar, {
    style: {
      transform: 'rotate(-50deg)'
    },
    sx: {
      width: 80,
      height: 80,
      bgcolor: 'refflyplus.primary'
    }
  }, createElement(AddLink, {
    sx: {
      fontSize: 70,
      color: 'refflyplus.secondary'
    },
    color: "primary"
  }))), createElement(Typography, {
    component: "div",
    fontFamily: "Beth Ellen",
    sx: {
      fontSize: 40,
      fontWeight: 'bold',
      mt: 1,
      color: 'refflyplus.secondary'
    }
  }, "reffly", createElement("sup", null, "+"))));
}

var RefflyplusAd = function RefflyplusAd() {
  return React__default.createElement(Grid, {
    container: true,
    spacing: 5,
    my: 10
  }, React__default.createElement(Grid, {
    item: true,
    xs: 12
  }, React__default.createElement(Typography$1, {
    variant: "h3",
    align: "center"
  }, "FOR ENTERPRISE")), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Grid, {
    mt: 10,
    container: true,
    justifyContent: "right"
  }, React__default.createElement(Typography$1, {
    fontWeight: "normal",
    align: "right",
    variant: "h4"
  }, "Self host", ' ', React__default.createElement("i", null, React__default.createElement("b", null, "reffly")), ' ', "for full features including Link tracking Statistics, Branding & more... ", React__default.createElement("br", null), React__default.createElement("i", null, "or Try ", React__default.createElement("b", null, "reffly plus"))), React__default.createElement(Link, {
    underline: "none",
    href: "https://reffly.aicat.io/"
  }, React__default.createElement(RefflyLogo$1, null)))), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Card$1, {
    sx: {
      width: '100%'
    }
  }, React__default.createElement(CardMedia, {
    component: "img",
    height: "auto",
    image: "/images/others/nicechartjs-v1.png",
    alt: "Tracking Graph",
    sx: {
      opacity: 0.2,
      filter: 'grayscale(70%)'
    }
  }))));
};

var useStyles$2 = /*#__PURE__*/makeStyles({
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'grayscale(90%)'
  },
  imgRounded: {
    borderRadius: '6px !important'
  },
  imgRoundedCircle: {
    borderRadius: '50% !important'
  },
  imgRaised: {
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
});

var StackLogo = function StackLogo(_ref) {
  var _ref$imgStyle = _ref.imgStyle,
      imgStyle = _ref$imgStyle === void 0 ? {} : _ref$imgStyle,
      imgUrl = _ref.imgUrl;
  var classes = useStyles$2();
  return React__default.createElement(Paper, {
    elevation: 0,
    sx: {
      p: 1
    }
  }, React__default.createElement(Typography, {
    align: "center"
  }, React__default.createElement("img", {
    alt: "...",
    src: imgUrl,
    className: classes.imgRounded + ' ' + classes.imgFluid,
    style: imgStyle
  })));
};

var TechnologyStack = function TechnologyStack() {
  return React__default.createElement(Grid, {
    my: 3,
    container: true,
    justifyContent: "center"
  }, React__default.createElement(Grid, {
    item: true,
    xs: 12
  }, React__default.createElement(Stack, {
    spacing: 2
  }, React__default.createElement(Typography$1, {
    fontWeight: "normal",
    align: "center",
    variant: "h4"
  }, "Play with", ' ', React__default.createElement("i", null, React__default.createElement("b", null, "reffly ")), ' ', "using freemium technologies,", ' ', React__default.createElement(Link, {
    underline: "none",
    href: "#"
  }, "learn more ...")), React__default.createElement(Grid, {
    justifyContent: "center",
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: true
  }, React__default.createElement(StackLogo, {
    imgStyle: {
      marginTop: '10px',
      marginBottom: '10px'
    },
    imgUrl: "/images/logos/nodejs-v2.svg"
  })), React__default.createElement(Grid, {
    item: true,
    xs: true
  }, React__default.createElement(StackLogo, {
    imgStyle: {
      marginTop: '8px',
      marginBottom: '8px'
    },
    imgUrl: "/images/logos/mongodb-v1.svg"
  })), React__default.createElement(Grid, {
    item: true,
    xs: true
  }, React__default.createElement(StackLogo, {
    imgStyle: {
      marginTop: '18px',
      marginBottom: '18px'
    },
    imgUrl: "/images/logos/nginx-v1.svg"
  })), React__default.createElement(Grid, {
    item: true,
    xs: true
  }, React__default.createElement(StackLogo, {
    imgStyle: {
      marginTop: '-80px',
      marginBottom: '-90px'
    },
    imgUrl: "/images/logos/heroku-v1.svg"
  }))), React__default.createElement(Typography$1, {
    mb: 3,
    fontWeight: "normal",
    align: "center"
  }, "Need help? hire me on", ' ', React__default.createElement(Link, {
    target: "_blank",
    rel: "noopener",
    underline: "none",
    href: "https://freelancer.com/u/alihasanbd/"
  }, "Freelancer.com")))));
};

var AicatAd = function AicatAd() {
  return React__default.createElement(Grid, {
    spacing: 3,
    container: true,
    pb: 5
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Typography$1, {
    mt: 5,
    fontWeight: "normal",
    align: "right",
    variant: "h6"
  }, "An open source contribution by")), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement("img", {
    src: "/images/logos/aicat-v1.png"
  })));
};

var useStyles$3 = /*#__PURE__*/makeStyles(function (theme) {
  return {
    boxBackground: {
      backgroundColor: theme.palette.primary.main + "15"
    },
    boxBottomLeft: {
      backgroundColor: theme.palette.background["default"],
      borderTopRightRadius: 200,
      height: 50
    },
    boxBottomRight: {
      backgroundColor: theme.palette.background["default"],
      borderTopLeftRadius: 200,
      height: 50
    }
  };
});

var Homepage = function Homepage() {
  var classes = useStyles$3();
  return React__default.createElement(Fragment, null, React__default.createElement(Container$2, null, React__default.createElement(Jumptron, null), React__default.createElement(SponsorshipAd, null)), React__default.createElement(Grid, {
    className: classes.boxBackground,
    item: true,
    xs: 12
  }, React__default.createElement(Container$2, null, React__default.createElement(RefflyplusAd, null), React__default.createElement(TechnologyStack, null)), React__default.createElement(Grid, {
    container: true
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.boxBottomLeft
  }), React__default.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.boxBottomRight
  }))), React__default.createElement(Container$2, null, React__default.createElement(AicatAd, null)));
};

var Error404 = function Error404() {
  return React__default.createElement("h1", null, "This is Error404 page");
};

var validationSchema$1 = /*#__PURE__*/object().shape({
  origUrl: /*#__PURE__*/string().required("Original Url is required").url("Please enter a valid Url")
});
function Jumptron$1() {
  var _useState = useState('http://localhost:3101/JRG5ai'),
      shortUrl = _useState[0],
      setShortUrl = _useState[1];

  var formik = useFormik({
    initialValues: {
      origUrl: 'https://www.youtube.com/'
    },
    validationSchema: validationSchema$1,
    onSubmit: function onSubmit(values, actions) {
      axios.post('http://localhost:3101/api/add', values).then(function (response) {
        if (response.status == 200) {
          if (response.data.status == 'success') {
            setShortUrl(response.data.shortUrl);
          }

          if (response.data.status == 'failed') {
            actions.setErrors({
              origUrl: response.data.message
            });
          }
        }

        console.log(actions, response);
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        actions.setSubmitting(false);
      });
    }
  });
  return React__default.createElement(Grid, {
    item: true,
    xs: 8
  }, React__default.createElement(Card, {
    sx: {
      minWidth: 275
    }
  }, React__default.createElement(CardContent, null, React__default.createElement("form", {
    onSubmit: formik.handleSubmit
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: 9
  }, React__default.createElement(TextField, {
    fullWidth: true,
    name: "origUrl",
    disabled: formik.isSubmitting,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.origUrl,
    error: formik.touched.origUrl && Boolean(formik.errors.origUrl),
    helperText: formik.touched.origUrl && formik.errors.origUrl,
    placeholder: "Enter your long Url here",
    variant: "outlined"
  })), React__default.createElement(Grid, {
    item: true,
    xs: 3
  }, React__default.createElement(LoadingButton, {
    loading: formik.isSubmitting,
    disabled: formik.isSubmitting,
    loadingPosition: "start",
    startIcon: React__default.createElement(AddLink, null),
    sx: {
      p: 1.7
    },
    fullWidth: true,
    size: "large",
    type: "submit",
    variant: "contained"
  }, formik.isSubmitting ? 'Processing...' : 'SHORTEN')))), React__default.createElement(Typography, {
    mt: 2,
    variant: "body1",
    color: "text.secondary"
  }, "By using our service, you accept our", ' ', React__default.createElement(Link$2, {
    to: "/terms-and-conditions"
  }, "Terms"), " &", ' ', React__default.createElement(Link$2, {
    to: "/privacy-policy"
  }, "Privacy"))), shortUrl && React__default.createElement(CardActions, {
    sx: {
      bgcolor: 'lightgray'
    }
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Typography, null, "Reff.ly+ for self-branding & more")), React__default.createElement(Grid, {
    item: true,
    mt: 1,
    xs: 5
  }, React__default.createElement(Input, {
    readOnly: true,
    value: shortUrl,
    disableUnderline: true,
    size: "small",
    fullWidth: true
  })), React__default.createElement(Grid, {
    item: true,
    xs: 1,
    sx: {
      pr: 1,
      mt: 0.5
    }
  }, React__default.createElement(Button, {
    sx: {
      "float": 'right'
    },
    variant: "outlined",
    size: "small"
  }, "COPY"))))));
}

var TempPage = function TempPage() {
  return React__default.createElement(Grid, {
    container: true,
    my: 10,
    justifyContent: "center"
  }, React__default.createElement(Jumptron$1, null));
};

var TcsofService = function TcsofService() {
  return React__default.createElement("h1", null, "This Terms & Conditions page");
};

var PrivacyPolicy = function PrivacyPolicy() {
  return React__default.createElement("h1", null, "Please replace your Privacy policy here");
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var cookieReducer = function cookieReducer(state, action) {
  if (state === void 0) {
    state = {
      CookieConsent: Cookies.get('Reffly_CookieConsent')
    };
  }

  switch (action.type) {
    case COOKIE_ADD_COOKIE:
      {
        var newCookie = {};
        newCookie[action.payload[0]] = action.payload[1];
        Cookies.set('Reffly_' + action.payload[0], action.payload[1]);
        return _extends({}, state, newCookie);
      }

    default:
      return state;
  }
};

var initialState = {
  shortUrl: /*#__PURE__*/Cookies.get('Reffly_ShortUrl'),
  origUrl: /*#__PURE__*/Cookies.get('Reffly_OrigUrl')
};
var shortenedReducer = function shortenedReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case SHORTENED_ADD_SHORT_URL:
      {
        return {
          origUrl: action.payload[0],
          shortUrl: action.payload[1]
        };
      }

    default:
      return state;
  }
};

var allReducers = /*#__PURE__*/combineReducers({
  shortened: shortenedReducer,
  cookie: cookieReducer
});

var store = /*#__PURE__*/createStore(allReducers, /*#__PURE__*/composeWithDevTools( /*#__PURE__*/applyMiddleware(thunk)));

export { Dashboard, Error404, Homepage, Layout, PrivacyPolicy, TcsofService, TempPage, store };
//# sourceMappingURL=reffly.esm.js.map
