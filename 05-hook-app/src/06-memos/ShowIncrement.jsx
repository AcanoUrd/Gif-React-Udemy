import React from "react";

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Se renderiza')
    return (
    <>
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(15);
            }}
        >
            +1
        </button>
    </>
  )
})