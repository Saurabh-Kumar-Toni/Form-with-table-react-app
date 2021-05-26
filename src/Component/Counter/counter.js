import React, {  } from 'react';

const Counter = ({count}) => {
    return( 
        <div id ="counter">
            <p>
                Our Total User Count Is: {count}
            </p>
            <p> Add more to increase the number</p>
        </div>
    );
}

export default Counter;