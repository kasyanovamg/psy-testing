import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  Button,
  Card,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../actions/authActions";

const useStyles = makeStyles(theme => ({
  container: {
    width: 600,
    padding: 15,
    margin: "200px auto",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  form: {
    flexDirection: "column",
    display: "flex"
  },
  formItem: {
    marginBottom: 15
  },
  radio: {
    display: "flex",
    flexDirection: "row"
  }
}));

const Signup = props => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    group: "experimental"
  });

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    });
  };
  const setGroup = e => {
    setFormValues({
      ...formValues,
      group: e.target.value
    });
    console.log(formValues)
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.signUp(formValues);
  };
  const classes = useStyles();
  const { authError, auth } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Card className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5" className="grey-text text-darken-3">
          Зарегистрироваться
        </Typography>
        <TextField
          id="email"
          type="email"
          placeholder="Введите email"
          label="Email адрес"
          required
          onChange={handleChange}
          value={formValues.email}
          className={classes.formItem}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Введите пароль"
          label="Пароль"
          required
          onChange={handleChange}
          value={formValues.password}
          className={classes.formItem}
        />
        <TextField
          id="firstName"
          type="text"
          placeholder="Введите имя"
          label="Имя"
          required
          onChange={handleChange}
          value={formValues.firstName}
          className={classes.formItem}
        />
        <TextField
          id="lastName"
          type="text"
          placeholder="Введите фамилию"
          label="Фамилия"
          required
          onChange={handleChange}
          value={formValues.lastName}
          className={classes.formItem}
        />
        <Typography variant="h6">Группа</Typography>
        <RadioGroup
          name="group"
          value={formValues.isExperimentalGroup}
          onChange={setGroup}
          className={classes.radio}
          defaultValue={formValues.group}
        >
          <FormControlLabel
            id="isExperimentalGroup"
            value="experimental"
            control={<Radio />}
            label="Экспериментальная"
          />
          <FormControlLabel
            id="isExperimentalGroup"
            value="control"
            control={<Radio />}
            label="Контрольная"
          />
        </RadioGroup>
        <Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginRight: 20,  backgroundColor: '#d8f0de', color: 'black' }}
          >
            Зарегистрироваться
          </Button>
          {authError && <p>{authError}</p>}
        </Grid>
      </form>
      <br/>
      <p>Уже есть аккаунт? <NavLink to='/signin' className={props.className}>Войти</NavLink></p>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
