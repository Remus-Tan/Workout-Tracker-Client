import Navbar from '../components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';

export default function Root() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	
	if (isLoading) {
		return <div>Loading!</div>
	}

	return (
		<div>
				<Navbar />
				{ isAuthenticated ? 
				<div>
					<img src={ user?.picture } />
					<p>{ user?.name }</p>
					<p>{ user?.email }</p>
				</div> : <></>
				}
		</div>
	)   
}