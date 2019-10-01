import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, AppBar, Toolbar, Typography} from "@material-ui/core";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";
import "./styles.css";

const useStyles = makeStyles(theme => ({
    navBar: {
        backgroundColor: '#d8f0de'
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
}));

const Navbar = props => {
    const classes = useStyles();
    const {auth, profile} = props;
    const links = auth.uid ? (
        <SignedInLinks profile={profile} className={classes.link}/>
    ) : (
        <SignedOutLinks className={classes.link}/>
    );
    return (
        <AppBar position="static" className={classes.navBar}>
            <Toolbar className="container inner-wrapper">
                <Typography variant="h6">
                    <Link to="/" className={classes.link}>Главная</Link>
                </Typography>

                {links}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
};

export default connect(mapStateToProps)(Navbar);
