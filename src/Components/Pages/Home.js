import React, { Component } from "react"
import Grid from "@material-ui/core/Grid";


class Home extends Component {
  render() {
    return (
       <Grid container direction="column" justify="space-between" alignItems="center">
          <Grid item xs={6}><img style={{width: 700}} src="https://i.imgur.com/qJHoEdu.jpg"/> </Grid>
          <Grid item xs={6}><img style={{width: 700}} src="https://i.imgur.com/pqoxTuX.jpg"/> </Grid>
          <Grid item xs={6}><img style={{width: 700}} src="https://i.imgur.com/uEs7Uhj.jpg"/> </Grid>

        </Grid>
    );
  }
}
 
export default Home;