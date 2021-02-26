
import React, {useState, Fragment, useContext} from 'react'



import ReactDOM from 'react-dom';

import {Provider, connect} from 'react-redux'




import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {MyContext} from './MyContext'







const initialState = {}

const CHANGE = 'CHANGE';

const change = () => {
   return {
      type: CHANGE
   }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        



        default: return state
    }
}


export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));





function Trash() {


  

 

   const val = useContext(MyContext)

   console.log(val)

    return (
      <div>
        <span onClick={val}>Привет</span>

      </div>
    );
  
}
  


export default Trash





















// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import React, {useState} from 'react'



// import ReactDOM from 'react-dom';

// import {Provider, connect} from 'react-redux'




// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';





// const styles = {
//    div: {
//       border: '1px solid grey',
//       minHeight: '500px',
//       backGroundColor: 'red',
//       margin: '10px'
//    }
// }







// const initialState = 

// [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];



// const CHANGE = 'CHANGE';

// const change = () => {
//    return {
//       type: CHANGE
//    }
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
        



//         default: return state
//     }
// }


// export const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(),
//   // other store enhancers if any
// ));









// function SearchBar(props){
// // console.log(props.arr)

 



//    return(
//        <div style = {styles.div} >
//          <input onChange = {OnchangeHandle}
//           type="search"   />  
//          <hr/> 
//          <label htmlFor="">
//          <input type='checkbox'/>
//          <span>Only show products in stock</span>
//          </label>
//          <ProductTable data ={props.arr} />
//        </div>

//     )
// }



// function ProductItem(props) {
//   // console.log(props.el)
     

//       return (

// <div className='row'>


//  { props.el.category == 'Sporting Goods'

//   ? <div className='col'> {props.el.name} {props.el.price}</div> 
//   : null} 

//     </div>

 

//       )
      
// }




// function ProductItemEl(props) {
//   // console.log(props.el)
     

//       return (

// <div className='row'>


//  { props.el.category == 'Electronics'

//   ? <div className='col'> {props.el.name} {props.el.price}</div> 
//   : null} 

//     </div>

 

//       )
      
// }






// function ProductTable(props) {
// // console.log(props.data)

//    return (
    
//       <div className='container' >
//           <div className='row border'>
//               <div className='col'>Name</div>
//               <div className='col'>Price</div>

//           </div>
//             <div className='row border mt-3 '>
//                   <h5>Sporting Goods</h5>
//             </div>

//             <div className='row border'>
//                <div>
//                 {props.data.map( (el, index) => { 
//                    return (
//                       <div>
                        
//                         <ProductItem
//                         el = {el} key = {index} /> 
                         
//                       </div>

//                    )  
  
//                 })}
//                </div> 
//            </div>
           

//             <div className='row border'>
//                <h5>Electronics</h5>
//             </div>

//              <div className='row border'>
//                <div>
//                 {props.data.map( (el, ind) => { 

//                    return (
//                       <div>
                        
//                         <ProductItemEl
//                         el = {el} key = {ind} /> 
                         
//                       </div>

//                    )  
  
//                 })}
//                </div> 
//            </div>
//       </div>
    
//    )
// }





// function Trash(props) {

//      const [val, setValue] = useState('')
// var OnchangeHandle = (e) => {
     
//      console.log(e.target.value )
// }
   

//      return (
//       <div>

//        <SearchBar arr = {props.cat}  />
        

       



//        </div>
//       );
// }


// const mapStateToProps = (state)=> {
//    return {
//       cat: state
//    }

// }



// const mapDispatchToProps = (dispatch)=> {
//    return {
//       change: () => {dispatch(change())}
//    }

// }




// export default connect(mapStateToProps, mapDispatchToProps) (Trash)