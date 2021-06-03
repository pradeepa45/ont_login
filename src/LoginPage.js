import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo12.svg'
import Button from '@material-ui/core/Button'
import Icon1 from './undraw_Home_settings_re_pkya.svg'
import axios from "axios";
import { withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link'
import { Typography, } from "@material-ui/core";
import { useMediaQuery } from 'react-responsive';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF585F",
        },
        secondary: {
            main: "#FFC2C5",
        },
    },
});


const useStyles = makeStyles(({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '40ch',
            alignItems: 'center',
            justify: 'center',
            justifyContent: 'stretch',
        },
    },
    headerbar: {
        width: "100vw",
        padding: theme.spacing(2)
    },
    cont: {
        marginTop: '2.5%',
    },
    formDiv: {
        width: 'fit-content'
    }

}));

var submitted = false;
var status = 404;
function LoginPage(props) {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        if(data){
            submitted = true;
           localStorage.setItem('signIn',true);
           getValidation(data);
       }
    }
    const onError = (errors, e) => console.log(errors, e);

    const getValidation = (data) => {
        if (submitted === true) {
            axios.get(`https://dev-api.ownerandtenant.com/v1.0/auth/user/signin${data}`)
                .then((response) => {
                    status = response.data.status;
                    console.log(status);
                    if (status === 200) {
                        props.history.push('/home');
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static" className={classes.headerbar}>
                    <Toolbar>
                        <img src={Logo} alt="logo" width="150px"></img>
                    </Toolbar>
                </AppBar>

                <Grid container direction='row-reverse' justify='space-evenly' alignItems='center' className={classes.cont}>
                    <Grid item xs className={classes.formDiv}>
                        {useMediaQuery({ query: '(max-width : 1024px)' }) &&
                            <div id="inner-form-div" style={{ marginTop: '4%', marginLeft : '15px' }}>
                                <Typography variant='h3' style={{padding: '10px', paddinTop : '20px'}}>
                                    Welcome!
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit, onError)} className={classes.root}>
                                    <div>
                                        <TextField fullWidth type='email' label="Email address" variant="outlined" {...register("email", { required: true })} />
                                        {errors.email
                                            &&
                                            <p style={{ display: "inline-flex" }}>
                                                <ErrorTwoToneIcon color="primary" />
                                                <span style={{ color: 'red', textAlign: 'center' }}>
                                                    Enter your email address.
                                    </span>
                                            </p>
                                        }
                                    </div>
                                    <div>
                                        <TextField fullWidth label="Password" variant="outlined" type='password' {...register("password", { required: true })} />
                                        {errors.password &&
                                            <p style={{ display: "inline-flex" }}>
                                                <ErrorTwoToneIcon color="primary" />
                                                <span style={{ color: 'red', textAlign: 'center' }}>
                                                    Enter your password.
                                    </span>
                                            </p>
                                        }
                                    </div>
                                    <Typography variant='caption'>
                                        <Link href='#' >
                                            Forgot Password?
                            </Link>
                                    </Typography>
                                    <div>
                                        <Button variant='text' size='large' color='primary' label="Submit" type="submit" fullWidth style ={{paddingBottom : '10px'}}>Sign In</Button>
                                    </div>

                                </form>
                            </div>
                        }
                        {useMediaQuery({ query: '(min-device-width : 1024px)' }) &&
                            <div id="inner-form-div" >
                                <form onSubmit={handleSubmit(onSubmit, onError)} className={classes.root} style={{ margin: '15px', paddingTop : '20px' }}>
                                    <div>
                                        <Typography variant='h4'>
                                            Welcome!
                                        </Typography>
                                    </div>

                                    <div>
                                        <TextField fullWidth type='email' label="Email address" variant="outlined" {...register("email", { required: true })} />
                                        {errors.email
                                            &&
                                            <p style={{ display: "inline-flex" }}>
                                                <ErrorTwoToneIcon color="primary" />
                                                <span style={{ color: 'red', textAlign: 'center' }}>
                                                    Enter your email address.
                                    </span>
                                            </p>
                                        }
                                    </div>
                                    <div>
                                        <TextField fullWidth label="Password" variant="outlined" type='password' {...register("password", { required: true })} />
                                        {errors.password &&
                                            <p style={{ display: "inline-flex" }}>
                                                <ErrorTwoToneIcon color="primary" />
                                                <span style={{ color: 'red', textAlign: 'center' }}>
                                                    Enter your password.
                                    </span>
                                            </p>
                                        }
                                    </div>
                                    <Typography variant='caption'>
                                        <Link href='#' >
                                            Forgot Password?
                            </Link>
                                    </Typography>
                                    <div>
                                        <Button variant='text' size='large' color='primary' label="Submit" type="submit" fullWidth style ={{paddingBottom : '10px'}}>Sign In</Button>
                                    </div>

                                </form>
                            </div>
                        }
                    </Grid>
                    <Grid item xs >
                        {useMediaQuery({ query: '(max-width : 1024px)' }) &&
                            <div style={{ position: 'relative', marginLeft: '18%', marginTop: '15%' }}>
                                <img src={Icon1} alt="home" height="250vh" width="auto"></img>
                            </div>
                        }
                        {
                            useMediaQuery({ query: '(min-device-width : 1024px)' }) &&
                            <div style={{ position: 'absolute', bottom: '10px', left: '40px' }}>
                                <img src={Icon1} alt="home" height="300vh" width="auto"></img>
                            </div>
                        }
                    </Grid>
                </Grid>
                {/* <Button style={{ position: "absolute", bottom: '0', right: '0' }} ></Button> */}
            </ThemeProvider>
        </div >
    );
}

export default withRouter(LoginPage);