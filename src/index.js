
import { Component } from 'react';
import ReactDOM from 'react-dom/client';


function A (props){
 let firstName="Bhran";
 let rollno = "1";
return <span>First Name is:{firstName} <B rollno={rollno}>Athgarh</B> Surname is:{props.surname} </span>
}

class B extends Component{
  middleName ="Sekhar";
  render(){
    //console.log(this.props);
    return <h1>Middle name is :{this.middleName} and rollno is: {this.props.rollno} Address is:{this.props.children} company is:<C>Harman</C></h1>
  }
}

let C = (props)=>{
  //console.log(props);
  return <span>{props.children}</span> //console the props response then we will get to know how to get props.children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let title="Das";
root.render(
  <A surname={title}/>
);