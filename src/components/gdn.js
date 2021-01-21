import React from 'react'
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import appStyles from './styles';

  class Gdn extends Component {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.divClass}>
          <h1>{this.props.name} Calculator</h1>
        </div>
      );
    }
  }

  export default withStyles(appStyles)(Gdn);