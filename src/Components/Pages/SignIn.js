import React, {Component} from "react";
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class SignIn extends Component {
    render() {
        return (
            <div>

                <Grid container
                      direction="column"
                      justify="center"
                      spacing={40}
                      alignItems="center">

                    <Grid item></Grid>
                    <img style={{width: 100}} src="https://i.imgur.com/7NQmgxz.png"/>
                    <Grid item><TextField placeholder="username"/></Grid>
                    <Grid item><TextField placeholder="password" type="password"/></Grid>

                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedA"
                                />
                            }
                            label="forget password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox

                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="remember me"
                        />
                    </FormGroup>

                    <Link to="/signup">Not a member? Sign up</Link>

                    <Button style={{margin: 10}} variant="contained" color="secondary">Sign up</Button>


                </Grid>

            </div>


        );
    }
}

export default SignIn;