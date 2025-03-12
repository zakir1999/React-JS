import React from 'react';

export default function ComponentD(props){
    return (
        <div className='Box'>
            <h1>Inner C component D</h1>

            <h2>{props.user}</h2>

        </div>
    )
}