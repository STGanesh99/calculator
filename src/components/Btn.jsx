import React from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import MaximizeIcon from '@material-ui/icons/Maximize';
import { Component } from "react";


class Btn extends Component {

    UNSAFE_componentWillMount(){
        console.log("will mount");
    }

    componentDidMount(){
        console.log("did mount");
    }

shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps,nextState);
    return true;
}

componentDidUpdate(nextProps, nextState){
    console.log("ji");
}

    render() {
      const { classes } = this.props;
      var l = "";
      var color1 = "";
      const val = this.props.value;
      if(val==="add"){
          l = <AddIcon/>
          color1 = "green";
      }
      else if(val=="subtract"){
          l = <RemoveIcon/>
          color1 = "red";
      }
      else if(val==="multiply"){
         l = <ClearIcon/>
         color1 = "yellow";
      }
      else{
          l = <MaximizeIcon/>
          color1 = "blue";
      }
      return (
          
          <button style ={{color:color1}} onClick ={()=>this.props.click(val)}>{l}</button>
      );
    }
  }

  export default  (Btn);
