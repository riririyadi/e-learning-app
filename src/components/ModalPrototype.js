import React from 'react'

const modalStyle = {
    modal:{
        position:"absolute",
        height:"300px",
        width:"200px",
        top: "50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        backgroundColor:"blue"
    }
}

function ModalPrototype() {
    return (
        <div className="modal" style={modalStyle}>
        
            
        </div>
    )
}

export default ModalPrototype;