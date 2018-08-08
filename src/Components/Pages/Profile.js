import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'



const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 180,
        height: 180,
    },


};


class Profile extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container justify="center" direction="row" alignItems="center">
                    <Avatar
                        className={classes.bigAvatar}
                        src="https://www.ccapp.us/site_media/media/boards/member_None/avatar/place%20holder.png"/>
                </Grid>

                <Grid container direction="row" justify="left" alignItems="flex-start">
                    <Grid item xs={3}></Grid>
                    <Grid direction="column" item xs={9}><h3>Name : Amal</h3>
                    <h3>Gender : female</h3>
                    <h3>Age : 23</h3>
                    <h3>Major : IT student</h3>
                    <h3>Organization : king University</h3>
                    <h3>Email : xxxxxxx@gmail.com</h3>
                    <h3>phone number : 055555555</h3></Grid>
                </Grid>

            </div>


        );
    }
}

export default withStyles(styles)(Profile);