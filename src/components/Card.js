import React from 'react'

const Card = ({name,id,email}) => {

   return(
    <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
        <img src={`https://robohash.org/${id}`} alt={`robo-${id}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
   );
}

export default Card;