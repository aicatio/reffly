'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@mui/material/styles');
var CssBaseline = _interopDefault(require('@mui/material/CssBaseline'));
var Container = _interopDefault(require('@mui/material/Container'));
var AppBar = _interopDefault(require('@mui/material/AppBar'));
var Toolbar = _interopDefault(require('@mui/material/Toolbar'));
var Avatar = _interopDefault(require('@mui/material/Avatar'));
var GitHub = _interopDefault(require('@mui/icons-material/GitHub'));
var material = require('@mui/material');
var InsertLink = _interopDefault(require('@mui/icons-material/InsertLink'));
var Grid = _interopDefault(require('@mui/material/Grid'));
var Typography = _interopDefault(require('@mui/material/Typography'));
var Badge = _interopDefault(require('@mui/material/Badge'));
var AddLink = _interopDefault(require('@mui/icons-material/AddLink'));
var Box = _interopDefault(require('@mui/material/Box'));
var Link = _interopDefault(require('@mui/material/Link'));
var Facebook = _interopDefault(require('@mui/icons-material/Facebook'));
var LinkedIn = _interopDefault(require('@mui/icons-material/LinkedIn'));
var Favorite = _interopDefault(require('@mui/icons-material/Favorite'));
var CookieConsent = _interopDefault(require('react-cookie-consent'));
var reactRedux = require('react-redux');
var colors = require('@mui/material/colors');
var styles$1 = require('@mui/styles');
var Card = _interopDefault(require('@mui/material/Card'));
var CardContent = _interopDefault(require('@mui/material/CardContent'));
var TextField = _interopDefault(require('@mui/material/TextField'));
var LoadingButton = _interopDefault(require('@mui/lab/LoadingButton'));
var formik = require('formik');
var yup = require('yup');
var axios = _interopDefault(require('axios'));
var CardActions = _interopDefault(require('@mui/material/CardActions'));
var Button = _interopDefault(require('@mui/material/Button'));
var Input = _interopDefault(require('@mui/material/Input'));
var reactCopyToClipboard = require('react-copy-to-clipboard');
var Paper = _interopDefault(require('@mui/material/Paper'));
var reactRouterDom = require('react-router-dom');
var redux = require('redux');
var reduxDevtoolsExtension = require('redux-devtools-extension');
var thunk = _interopDefault(require('redux-thunk'));
var Cookies = _interopDefault(require('js-cookie'));

var StyledBadge = /*#__PURE__*/styles.styled(Badge)(function (_ref) {
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

  return React.createElement(Grid, {
    item: true,
    xs: 12
  }, React.createElement(Grid, {
    container: true,
    mt: 5,
    justifyContent: "center"
  }, React.createElement(StyledBadge, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, React.createElement(Avatar, {
    onClick: handleClick,
    style: {
      transform: 'rotate(-50deg)'
    },
    sx: {
      width: 80,
      height: 80,
      bgcolor: 'tertiary.main'
    }
  }, React.createElement(InsertLink, {
    sx: {
      fontSize: 70,
      color: 'secondary.dark'
    },
    color: "primary"
  }))), React.createElement(Typography, {
    fontFamily: "Beth Ellen",
    sx: {
      fontSize: 40,
      fontWeight: 'bold',
      mt: 1,
      color: 'secondary.dark'
    }
  }, "reffly")), React.createElement(Grid, {
    container: true,
    sx: {
      mb: 6,
      mt: 1
    },
    justifyContent: "center"
  }, React.createElement(Typography, null, "Free, Open source, Community driven!")));
}

var StyledBadge$1 = /*#__PURE__*/styles.styled(Badge)(function (_ref) {
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
  return React.createElement(StyledBadge$1, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, React.createElement(Avatar, {
    variant: "rounded",
    sx: {
      bgcolor: 'grey.800'
    }
  }, React.createElement(AddLink, {
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
  return React__default.createElement(material.Container, null, React__default.createElement(material.Box, null, React__default.createElement(AppBar, {
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
  }, React__default.createElement(material.Link, {
    href: "https://reffly.aicat.io/"
  }, React__default.createElement(RefflyPlus, null)), "\xA0\xA0\xA0", React__default.createElement(material.Link, {
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

function FooterLayout(_ref) {
  var sticky = _ref.sticky,
      children = _ref.children;
  return React__default.createElement(Box, {
    sx: {
      borderTop: '1px solid grey'
    }
  }, React__default.createElement(AppBar, {
    color: "transparent",
    position: sticky ? 'static' : 'relative'
  }, React__default.createElement(Toolbar, null, children)));
}

function Footer(_ref) {
  var theme = _ref.theme;
  return React__default.createElement(FooterLayout, {
    theme: theme
  }, React__default.createElement(Container, null, React__default.createElement(Box, {
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
  }, "Copyright \xA9 ", new Date().getFullYear(), " Reff.ly \xA0|\xA0", React__default.createElement(Link, {
    underline: "none",
    href: "/terms-and-conditions"
  }, "Terms"), ' ', "\xA0|\xA0", React__default.createElement(Link, {
    underline: "none",
    href: "/privacy-policy"
  }, "Privacy")), React__default.createElement(Link, {
    target: "_blank",
    rel: "noopener",
    href: "https://github.com/aicatio/"
  }, React__default.createElement(GitHub, {
    color: "secondary",
    fontSize: "medium"
  })), ' ', "\xA0\xA0\xA0", React__default.createElement(Link, {
    target: "_blank",
    rel: "noopener",
    href: "http://linkedin.com/company/reffly/"
  }, React__default.createElement(LinkedIn, {
    color: "secondary",
    fontSize: "medium"
  })), ' ', "\xA0\xA0\xA0", React__default.createElement(Link, {
    target: "_blank",
    rel: "noopener",
    href: "https://fb.me/RefflyBD"
  }, React__default.createElement(Facebook, {
    color: "secondary",
    fontSize: "medium"
  })))))));
}

var CookieBanner = function CookieBanner() {
  var cookieState = reactRedux.useSelector(function (state) {
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

var refflyTheme = {
  palette: {
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: colors.grey[800]
    },
    tertiary: {
      main: colors.orange[500],
      dark: colors.orange[900],
      light: colors.orange[200]
    },
    refflyplus: {
      primary: colors.green[500],
      secondary: colors.grey[800],
      tertiary: colors.green[900]
    },
    background: {
      "default": '#ECEFF1',
      paper: colors.grey[100]
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
};
var defaultTheme = /*#__PURE__*/styles.createTheme(refflyTheme);

/**
 * PROJECT SETTINGS
 * ---------------------------------------------------------
 * To replce settings, add a reffconf.js file at prooject root
 * ---------------------------------------------------------
 * root dir process.env.PWD
 */
var configs = /*#__PURE__*/require("../reffconf")["default"];

var Layout = function Layout(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  React.useEffect(function () {
    if (typeof process == 'object' && process.env) {
      {
        console.log('reffly.theme:', defaultTheme);
        console.log('reffly.confs:', configs);
      }
    }
  }, []);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(styles.ThemeProvider, {
    theme: theme || defaultTheme
  }, React__default.createElement(CssBaseline, null), React__default.createElement(Container, {
    disableGutters: true,
    maxWidth: false
  }, React__default.createElement(Header, null), children, React__default.createElement(Footer, null))), React__default.createElement(CookieBanner, null));
};

var Dashboard = function Dashboard() {
  return React__default.createElement("h1", null, "This is Dashboard page");
};

// Actions for "cookie" reducers
var COOKIE_ADD_COOKIE = 'COOKIE_ADD_COOKIE';
var COOKIE_DELETE_COOKIE = 'COOKIE_DELETE_COOKIE'; // Actions for "shortened" reducers

var SHORTENED_STORE_SHORT_URL = 'SHORTENED_STORE_SHORT_URL';
var SHORTENED_DELETE_SHORT_URL = 'SHORTENED_DELETE_SHORT_URL';

var setCookieAccepted = function setCookieAccepted() {
  return function (dispatch) {
    dispatch({
      type: COOKIE_ADD_COOKIE,
      payload: ['CookieConsent', 'OK']
    });
  };
};

var createShortenedUrl = function createShortenedUrl(origUrl, callbac) {
  return function (dispatch) {
    axios.post(configs.url_api + '/url/create', {
      origUrl: origUrl
    }).then(function (response) {
      if (response.status == 200) {
        callbac(response.data.status == 'success', response.data.message);

        if (response.data.status == 'success') {
          dispatch({
            type: SHORTENED_STORE_SHORT_URL,
            payload: [origUrl, response.data.shortUrl]
          });
        }

        return;
      }

      callbac(false, 'Network error');
    })["catch"](function () {
      callbac(false, 'Network error');
    });
  };
};

var useStyles = /*#__PURE__*/styles$1.makeStyles(function (theme) {
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

  var _useState = React.useState(false),
      copied = _useState[0],
      setCopied = _useState[1];

  var classes = useStyles();
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
  }, React__default.createElement(reactCopyToClipboard.CopyToClipboard, {
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

var validationSchema = /*#__PURE__*/yup.object().shape({
  origUrl: /*#__PURE__*/yup.string().required('Original Url is required').url('Please enter a valid Url')
});
function ShortenerForm() {
  var dispatch = reactRedux.useDispatch();

  var _useSelector = reactRedux.useSelector(function (state) {
    return state.shortened;
  }),
      shortUrl = _useSelector.shortUrl,
      origUrl = _useSelector.origUrl;

  var formik$1 = formik.useFormik({
    initialValues: {
      origUrl: origUrl || ''
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, actions) {
      dispatch(setCookieAccepted());
      dispatch(createShortenedUrl(values.origUrl, function (status, message) {
        actions.setSubmitting(false);

        if (status == false) {
          actions.setErrors({
            origUrl: message
          });
          return;
        }
      }));
    }
  });
  var submitBtnProps = {
    loading: formik$1.isSubmitting,
    disabled: formik$1.isSubmitting,
    sx: {
      p: 1.7,
      bgcolor: 'secondary.dark'
    },
    size: 'large',
    type: 'submit',
    variant: 'contained'
  };

  if (formik$1.isSubmitting) {
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
    onSubmit: formik$1.handleSubmit
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: 9
  }, React__default.createElement(TextField, {
    fullWidth: true,
    name: "origUrl",
    disabled: formik$1.isSubmitting,
    onChange: formik$1.handleChange,
    onBlur: formik$1.handleBlur,
    value: formik$1.values.origUrl,
    error: formik$1.touched.origUrl && Boolean(formik$1.errors.origUrl),
    helperText: formik$1.touched.origUrl && formik$1.errors.origUrl,
    placeholder: "Enter your long Url here",
    variant: "outlined"
  })), React__default.createElement(Grid, {
    item: true,
    xs: 3
  }, React__default.createElement(LoadingButton, Object.assign({
    color: "primary",
    fullWidth: true
  }, submitBtnProps), formik$1.isSubmitting ? 'Processing...' : 'SHORTEN')))), React__default.createElement(Typography, {
    mt: 2,
    variant: "body1",
    color: "text.secondary"
  }, "By using our service, you accept our", ' ', React__default.createElement(material.Link, {
    href: "/terms-and-conditions"
  }, "Terms"), " &", ' ', React__default.createElement(material.Link, {
    href: "/privacy-policy"
  }, "Privacy"))), shortUrl && origUrl && React__default.createElement(ShortenerResult, {
    shortUrl: shortUrl
  }))));
}

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
    elevation: 0,
    sx: {
      maxWidth: 335
    }
  }, React__default.createElement("img", {
    style: {
      maxWidth: 325
    },
    alt: "Carbon Ad",
    src: "/images/others/carbonad-v1.png"
  })))), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(material.Typography, null, "Fund us on -"), React__default.createElement("img", {
    style: {
      maxHeight: 40
    },
    alt: "BuyMeACoffee",
    src: "https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
  })));
};

var StyledBadge$2 = /*#__PURE__*/styles.styled(Badge)(function (_ref) {
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
  return React.createElement(Grid, {
    item: true,
    xs: 12
  }, React.createElement(Grid, {
    container: true,
    mt: 5,
    justifyContent: "center"
  }, React.createElement(StyledBadge$2, {
    overlap: "circular",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, React.createElement(Avatar, {
    style: {
      transform: 'rotate(-50deg)'
    },
    sx: {
      width: 80,
      height: 80,
      bgcolor: 'refflyplus.primary'
    }
  }, React.createElement(AddLink, {
    sx: {
      fontSize: 70,
      color: 'refflyplus.secondary'
    },
    color: "primary"
  }))), React.createElement(Typography, {
    component: "div",
    fontFamily: "Beth Ellen",
    sx: {
      fontSize: 40,
      fontWeight: 'bold',
      mt: 1,
      color: 'refflyplus.secondary'
    }
  }, "reffly", React.createElement("sup", null, "+"))));
}

var RefflyplusAd = function RefflyplusAd() {
  return React__default.createElement(Grid, {
    container: true,
    spacing: 5,
    my: 10
  }, React__default.createElement(Grid, {
    item: true,
    xs: 12
  }, React__default.createElement(material.Typography, {
    variant: "h3",
    align: "center"
  }, "FOR ENTERPRISE")), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(Grid, {
    mt: 10,
    container: true,
    justifyContent: "right"
  }, React__default.createElement(material.Typography, {
    fontWeight: "normal",
    align: "right",
    variant: "h4"
  }, "Self host", ' ', React__default.createElement("i", null, React__default.createElement("b", null, "reffly")), ' ', "for full features including Link tracking Statistics, Branding & more... ", React__default.createElement("br", null), React__default.createElement("i", null, "or Try ", React__default.createElement("b", null, "reffly plus"))), React__default.createElement(material.Link, {
    underline: "none",
    href: "https://reffly.aicat.io/"
  }, React__default.createElement(RefflyLogo$1, null)))), React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(material.Card, {
    sx: {
      width: '100%'
    }
  }, React__default.createElement(material.CardMedia, {
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

var StackLogo = function StackLogo(_ref) {
  var _ref$imgStyle = _ref.imgStyle,
      imgStyle = _ref$imgStyle === void 0 ? {} : _ref$imgStyle,
      imgUrl = _ref.imgUrl;
  var useStyles = styles$1.makeStyles({
    imgFluid: {
      maxWidth: '100%',
      height: 'auto',
      filter: 'grayscale(90%)'
    },
    imgRounded: {
      borderRadius: '6px !important'
    }
  });
  var classes = useStyles();
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
  }, React__default.createElement(material.Stack, {
    spacing: 2
  }, React__default.createElement(material.Typography, {
    fontWeight: "normal",
    align: "center",
    variant: "h4"
  }, "Play with", ' ', React__default.createElement("i", null, React__default.createElement("b", null, "reffly ")), ' ', "using freemium technologies,", ' ', React__default.createElement(material.Link, {
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
  }))), React__default.createElement(material.Typography, {
    mb: 3,
    fontWeight: "normal",
    align: "center"
  }, "Need help? hire me on", ' ', React__default.createElement(material.Link, {
    target: "_blank",
    rel: "noopener",
    underline: "none",
    href: "https://freelancer.com/u/alihasanbd/"
  }, "Freelancer.com")))));
};

var AicatpromoAd = function AicatpromoAd() {
  return React__default.createElement(Grid, {
    spacing: 3,
    container: true,
    pb: 5
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6
  }, React__default.createElement(material.Typography, {
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

var Homepage = function Homepage() {
  var useStyles = styles$1.makeStyles(function (theme) {
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
  var classes = useStyles();
  return React__default.createElement(React.Fragment, null, React__default.createElement(Container, null, React__default.createElement(ShortenerForm, null), React__default.createElement(SponsorshipAd, null)), React__default.createElement(Grid, {
    className: classes.boxBackground,
    item: true,
    xs: 12
  }, React__default.createElement(Container, null, React__default.createElement(RefflyplusAd, null), React__default.createElement(TechnologyStack, null)), React__default.createElement(Grid, {
    container: true
  }, React__default.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.boxBottomLeft
  }), React__default.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.boxBottomRight
  }))), React__default.createElement(Container, null, React__default.createElement(AicatpromoAd, null)));
};

var Error404 = function Error404() {
  return React__default.createElement("h1", null, "This is Error404 page");
};

var validationSchema$1 = /*#__PURE__*/yup.object().shape({
  origUrl: /*#__PURE__*/yup.string().required("Original Url is required").url("Please enter a valid Url")
});
function Jumptron() {
  var _useState = React.useState('http://localhost:3101/JRG5ai'),
      shortUrl = _useState[0],
      setShortUrl = _useState[1];

  var formik$1 = formik.useFormik({
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
    onSubmit: formik$1.handleSubmit
  }, React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, React__default.createElement(Grid, {
    item: true,
    xs: 9
  }, React__default.createElement(TextField, {
    fullWidth: true,
    name: "origUrl",
    disabled: formik$1.isSubmitting,
    onChange: formik$1.handleChange,
    onBlur: formik$1.handleBlur,
    value: formik$1.values.origUrl,
    error: formik$1.touched.origUrl && Boolean(formik$1.errors.origUrl),
    helperText: formik$1.touched.origUrl && formik$1.errors.origUrl,
    placeholder: "Enter your long Url here",
    variant: "outlined"
  })), React__default.createElement(Grid, {
    item: true,
    xs: 3
  }, React__default.createElement(LoadingButton, {
    loading: formik$1.isSubmitting,
    disabled: formik$1.isSubmitting,
    loadingPosition: "start",
    startIcon: React__default.createElement(AddLink, null),
    sx: {
      p: 1.7
    },
    fullWidth: true,
    size: "large",
    type: "submit",
    variant: "contained"
  }, formik$1.isSubmitting ? 'Processing...' : 'SHORTEN')))), React__default.createElement(Typography, {
    mt: 2,
    variant: "body1",
    color: "text.secondary"
  }, "By using our service, you accept our", ' ', React__default.createElement(reactRouterDom.Link, {
    to: "/terms-and-conditions"
  }, "Terms"), " &", ' ', React__default.createElement(reactRouterDom.Link, {
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
  }, React__default.createElement(Jumptron, null));
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

    case COOKIE_DELETE_COOKIE:
      {
        Cookies.remove('Reffly_' + action.payload); // @ts-expect-error

        return state.filter(function (value, index) {
          return index !== action.payload;
        });
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
    case SHORTENED_STORE_SHORT_URL:
      {
        Cookies.set('Reffly_OrigUrl', action.payload[0]);
        Cookies.set('Reffly_ShortUrl', action.payload[1]);
        return {
          origUrl: action.payload[0],
          shortUrl: action.payload[1]
        };
      }

    case SHORTENED_DELETE_SHORT_URL:
      {
        Cookies.remove('Reffly_' + action.payload); // @ts-expect-error

        return state.filter(function (value, index) {
          return index !== action.payload;
        });
      }

    default:
      return state;
  }
};

var allReducers = {
  shortened: shortenedReducer,
  cookie: cookieReducer
};
var rootReducer = /*#__PURE__*/redux.combineReducers(allReducers);

var composer = /*#__PURE__*/reduxDevtoolsExtension.composeWithDevTools( /*#__PURE__*/redux.applyMiddleware(thunk));
var store = /*#__PURE__*/redux.createStore(rootReducer, composer);

exports.Dashboard = Dashboard;
exports.Error404 = Error404;
exports.Homepage = Homepage;
exports.Layout = Layout;
exports.PrivacyPolicy = PrivacyPolicy;
exports.TcsofService = TcsofService;
exports.TempPage = TempPage;
exports.refflyConfig = configs;
exports.refflyReducers = allReducers;
exports.refflyTheme = refflyTheme;
exports.store = store;
//# sourceMappingURL=reffly.cjs.development.js.map
