 import React, {useState, useContext } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {connect} from 'react-redux'
import {MyContext} from './MyContext'






const CHANGE = 'CHANGE';

const change = (isToggleOn) => {
   return {
      type : CHANGE, 
      payload: isToggleOn
   }
}

const initialState = {
     isToggleOn : true

}







let reducer = (state = initialState, action) => {
    

   switch(action.type){
     case CHANGE:
     return {...state, isToggleOn: action.payload


       }


    default: return state
   }

}


export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));


console.log()

function Container(props) {
  
   // let [isToggleOn, setTogle] =
       // useState(true); 
   
    // let state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
   

 const handleClick = () => {
   
  
        // !props.value.isToggleOn
        // ? props.value.isToggleOn = true
        // : props.value.isToggleOn = false

    //  if (!props.value.isToggleOn){
    // console.log(props.value.isToggleOn = true)
    // } else {props.value.isToggleOn = false}

       props.value.isToggleOn = !props.value.isToggleOn



    store.dispatch(change(props.value.isToggleOn))
          
  }

  console.log('props', props)

   
 const value = useContext(MyContext);


console.log('value' ,value)







    return (

      
      <span>
      <p onClick = {value}> For Function </p>
      <button onClick={handleClick}>
       
        <h2>sfrf</h2>
        { props.value.isToggleOn ? 'ON' : 'OFF'}

      </button>

         <h3>{props.value.isToggleOn ? 'Линия включена' : 'Линия Отключена'}</h3>
       </span>
       
       
   
    );
  
}

const mapStateToProps = (state) => {
  // console.log(state)
   return {
      value: state
   }
} 

const mapDispatchToProps = (dispatch) => {
   return {
      change : (isToggleOn) => { dispatch(change(isToggleOn)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Container)

