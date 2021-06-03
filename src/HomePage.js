import Container from '@material-ui/core/Container'
import { withStyles, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo12.svg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

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


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#FF585F",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: "#FFC2C5",
        },
    },
}))(TableRow);

function createData(name, id, email, contact) {
    return { name, id, email, contact };
}

const rows = [
    createData('Frozen yoghurt', 159, "mail@domain.in", 9876543210),
    createData('Ice cream sandwich', 237, "mail@domain.in", 9876543210),
    createData('Eclair', 262, "mail@domain.in", 9876543210),
    createData('Cupcake', 305, "mail@domain.in", 9876543210),
    createData('Gingerbread', 356, "mail@domain.in", 9876543210),
    createData('Pizza', 158, "mail@domain.in", 9876543210),
    createData('Foot long Sub', 210, "mail@domain.in", 9876543210),
    createData('Frankie', 261, "mail@domain.in", 9876543210),
    createData('Peach Cobbler', 304, "mail@domain.in", 9876543210),
    createData('Ginger Ale', 355, "mail@domain.in", 9876543210),
    createData('Pasta', 160, "mail@domain.in", 9876543210),
    createData('Chicken Piccatio', 238, "mail@domain.in", 9876543210),
    createData('Abalone Salad', 263, "mail@domain.in", 9876543210),
    createData('Sushi', 306, "mail@domain.in", 9876543210),
    createData('Pilaf Rice', 357, "mail@domain.in", 9876543210),
];

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#FF585F",
        width: "100%",
        padding: theme.spacing(2)
    },
    button: {
        justifySelf: 'flex-end'
    }
}));

function HomePage(props) {
    const classes = useStyles();
    const handleClick = () => {
        props.history.replace('/')
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <Typography className={classes.title}>
                        <img src={Logo} alt="logo" width="100px"></img>
                        </Typography>
                        <Button color="inherit" variant='outlined' onClick={handleClick}>Sign Out</Button>
                    </Toolbar>

                </AppBar>
                <Container>
                    <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell align="right">ID</StyledTableCell>
                                        <StyledTableCell align="right">Email ID</StyledTableCell>
                                        <StyledTableCell align="right">Contact</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                            <StyledTableCell align="right" component="th" scope="row">{row.id}</StyledTableCell>
                                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                                            <StyledTableCell align="right">{row.contact}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default withRouter(HomePage);