import React from 'react'
import {MyContext} from './MyContext'

const val = MyContext._currentValue

function Post() {
console.log(val)

	
	return (
          <MyContext.Consumer>
          {() => <div>  {val}  </div>}
         </MyContext.Consumer> 
  
		)
} 
export default Post