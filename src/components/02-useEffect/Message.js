import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('mount component!');
        return () => {
            console.log('unmount component!');
        }
    }, [])

    return (
        <>
          <h3> Your Awesome!</h3>  
        </>
    )
}
