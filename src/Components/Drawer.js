import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import {ListItem, ListItemText} from '@material-ui/core';
import {
    Route,
    NavLink,
    Switch
} from "react-router-dom";


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class PermanentDrawer extends React.Component {

    render() {
        const {classes} = this.props;

        return (


            <div className={classes.root}>

                <Drawer
                    variant="permanent"
                    anchor="left"
                    open={true}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <img style={{width: 100}} src="https://i.imgur.com/7NQmgxz.png"/>
                    <List>

                        <ListItem button component={NavLink} to="/home"><ListItemText primary="Home"/></ListItem>
                        <ListItem button component={NavLink} to="/training"><ListItemText
                            primary="Training"/></ListItem>
                        <ListItem button component={NavLink} to="/profile"><ListItemText primary="Profile"/></ListItem>
                        <ListItem button component={NavLink} to="/handoff"><ListItemText primary="Hand Off"/></ListItem>
                        <ListItem button component={NavLink} to="/signin"><ListItemText primary="Sign In"/></ListItem>
                        <ListItem button component={NavLink} to="/signup"><ListItemText primary="Sign Up"/></ListItem>
                        <Divider/>
                        <div>

                            <Grid container spacing={12}>
                                <Grid item xs={3}>
                                    <IconButton color="secondary" className={classes.button}
                                                             aria-label="Add an alarm">
                                    <a href="https://twitter.com/MaddoDev" target="_blank">
                                        <i className="fab fa-instagram" style={{color: "#1da1f2"}}></i>
                                    </a>
                                </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                                        <a href="https://twitter.com/MaddoDev" target="_blank">
                                            <i className="fab fa-twitter" style={{color: "#1da1f2"}}></i>
                                        </a>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                                        <a href="https://twitter.com/MaddoDev" target="_blank">
                                            <i className="fab fa-facebook-square" style={{color: "#222"}}></i>
                                        </a>
                                    </IconButton>
                                </Grid>
                            </Grid>


                        </div>
                    </List>
                </Drawer>

                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        <div>{this.props.children}</div>
                    </div>
                </main>
            </div>



        )
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);