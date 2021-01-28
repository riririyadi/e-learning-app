import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

function SignUpSucceed() {
	let history = useHistory();
	useEffect(() => {
		setInterval(()=>{
			history.push('/u');
		},5000)
	}, [])
	return (
		<div className="centering" style={{flexDirection:"column", minHeight:"100vh"}}>
				<div>You have successfully registered</div>
				<div>Wait a moment...</div>			
				<div>Redirecting to dashboard</div>
				<small>if not redirected, <Link to ="/u">click here</Link></small>			
		</div>
	)
}

export default SignUpSucceed