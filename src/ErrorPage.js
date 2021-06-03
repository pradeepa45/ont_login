import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ErrorLogo from './undraw_No_data_re_kwbl.svg'
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'


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


const useStyles = makeStyles((theme) => ({
    cont: {
        marginTop: '10%',
    },
}));

//Page for other urls
export default function ErrorPage() {
    const classes = useStyles();
    document.title = 'Error Page Not Found';
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container direction='row' justify='space-evenly' alignItems='center' className={classes.cont}>
                    <Grid>
                        <img src={ErrorLogo} alt="no data" width='500vh'></img>
                    </Grid>
                    <Grid>
                        <Typography variant='h6'>
                            Looks like you are lost, wanderer!
                        </Typography>
                        <Typography variant='caption'>
                            <Link href="/login">
                                Click to go back
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </div>
    )
}