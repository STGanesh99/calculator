import React from "react";
import Btn from "./Btn";
import operator from "./operators";
import Gdn from "./gdn";
import Info from "./info";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Displayans from "./displayans";
import browserHistory from 'react-router';
import App from "./app"

    function Bpp(){
        
       const [val,setval] = React.useState({
            a:"",
            b:"",
        })
        
        const [ans,setans] = React.useState("")
        
        function update(event){
            const {name,value} = event.target;
            setval(prev => {
                return{...prev,
                [name]:value,
            }
        }
            );
            
        }
        
        function Calculate(namel){
            //const namel  = event.target.value;
            console.log(namel);
            const a = Math.floor(val.a);
            const b = Math.floor(val.b);
            if(namel==="add"){
                setans(a+b);
            }
            else if(namel==="divide"){
                setans(a/b);
            }
            else if(namel==="subtract"){
                setans(a-b);
            }
            else if(namel=='multiply'){
                setans(a*b);
            }
            setval({
                a:"",
                b:"",
            })
        }
        function createBtn(operat){
            console.log(operat.op);
           return <Btn key = {operat.id} value = {operat.op} click = {Calculate}></Btn>
        }
        return(
            <Router>   
 <div className ="proj">
 <Info/>
 <Gdn name = "Ganesh"/>
 <input className="numb" onChange={update} name="a" placeholder = "Enter 1st Number" value = {val.a}></input>
 <br/>
   {operator.map(createBtn)}
   <br/>
   <Link  to={{
            pathname: "/ans",
            data: ans 
          }}>Send</Link> 
   <Route exact path="/ans" component = {Displayans} ></Route>
 <br/>
 <input className = "numb" onChange = {update} name ="b" placeholder = "Enter 2nd  Number" value = {val.b}></input>
 <br/>
 <input className = "ans" placeholder = "The answer is" value={ans}></input>
 </div>
 </Router>    
 )

}
export default Bpp;
