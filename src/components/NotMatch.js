import React, { useEffect } from 'react'

function NotMatch() {
useEffect(() => {
document.title="404 Not Found"
}, [])

    return (
        <div className="centering" style={{minHeight:"100vh", flexDirection:"column"}}>
           <h5>404 Not Found.</h5>
           <p>You're accessing the wrong URL.</p>
        </div>
    )
}

export default NotMatch
