import React, {createContext, Fragment} from 'react'
import Container from './components/Container'
import Trash from './components/Trash'

import {MyContext} from './components/MyContext'
// import MyConsumerTest from './components/MyConsumerTest'
import Post from './components/Post'

  // <Container />
     // <Trash />  

const items = [
    {id: 1 , term : ' first', description: 'Описание 1'},
    {id: 2 , term : ' second',  description: 'Описание 2'},
    {id: 3 , term : ' third',  description: 'Описание 3'}
]




// console.log(MyContext)

const onClick = () => {
    console.log ('sssfgdfgdgdgdgdfgdfdfgdgdfgdfgdgdfgdfggfg')
}









function Button(props) {
  return <button onClick={props.onClick}>Say Hello</button>;
}

function HelloButton() {
  function handleClick() {
    alert('Hello!');
  }
  return <Button onClick={handleClick} />;
}







function App() {
   // console.log()

  return (
       <MyContext.Provider value = {1000}>
      <Fragment>
     <mark><h1>fgfgfgf</h1>sfvdgfg</mark>
          
      <hr/>

   
      <Container />
       
       <hr/>
        
       <Trash />
         
      <hr/>
       <Post/>
       
       <HelloButton/>


      </Fragment>

      </MyContext.Provider>
  );
}

export default App;
