import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
  } from "@material-ui/core";
  

import React, {Component} from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    }
  });


const mapStateToProps = state => ({
    homeTitles: state.homeTitle
});

const mapDispatchToProps = dispatch => ({
    boom: title => dispatch(ACTIONS.boom(title))
});



class Home extends Component{

    constructor(){
        super();

        this.state = {
            homeTitle: "Bienvenido a Project Code Names"
        }

    }

    titleChange = (event) => {
        console.log(this.props);
        this.props.boom(this.state.homeTitles);
        
    }

    render(){
        return(
            <div>
                <h1>{this.props.homeTitles}</h1>
                <Button onClick={this.titleChange}>BOOM</Button>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Home));