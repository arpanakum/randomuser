import React from 'react';

function ResetButton({handleReset, children}){
   console.log("reset btn loaded");
    return (
    <button onClick={handleReset}>{children}</button>
    )
}

export default React.memo(ResetButton);