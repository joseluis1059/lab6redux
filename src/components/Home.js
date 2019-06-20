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
  )(Home);