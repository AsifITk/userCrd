import React from 'react'

function Card( props) {
  return (
   <>

   <div className='container'>
    <img src={props.user.picture.thumbnail} alt="" />
<div> 
  
  
  <h5>{props.user.name.first}</h5>

{props.user.email}</div>
   
  
    
    

   
   </div>
   {/* {console.log(props.user.name.first)} */}
   
   </>
  )
}

export default Card