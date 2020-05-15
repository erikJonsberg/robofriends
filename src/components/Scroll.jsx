import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '100vh', margin: '3em 0 0 0' }}>
            {props.children}
        </div>
    )
}

export default Scroll;