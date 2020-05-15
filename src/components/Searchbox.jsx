import React, { Fragment } from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return ( 
    <Fragment>
        <input className = 'pa3 ba b--green bg-lightest-blue shadow-4'
        type = "search"
        placeholder = "search robots" 
        onChange={searchChange}
        />
        </Fragment>
    )
}

export default Searchbox;