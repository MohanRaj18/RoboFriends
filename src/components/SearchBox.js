import React from 'react'

const SearchBox = ({onSearch}) => {
    return(
       <div>
          <input type='search' placeholder='Search here' className='pa3 ba b--green bg-lightest-blue' onChange={onSearch}/>
       </div>
    );
}

export default SearchBox;