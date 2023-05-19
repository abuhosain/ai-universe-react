import React from 'react';
import { children } from 'react';

const Button = ({children}) => {
    // const { children } = props;
    return (
        <div className='text-center'>
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;