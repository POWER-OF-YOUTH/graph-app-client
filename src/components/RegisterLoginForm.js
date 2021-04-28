import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "black"
    }
}));

function RegisterLoginForm() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}></div>
        </>
    )
}

export default RegisterLoginForm;