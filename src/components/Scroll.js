import React from 'react'


const Scroll = (props) => {
   return(
    <div style={{overflow:'scroll',height:'600px',border:'5px solid black',marginTop:'50px',marginLeft:'10px',marginRight:'10px'}} className='scroll'>
        {props.children}
    </div>
   );
}

export default Scroll;