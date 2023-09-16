import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<button className="bg-purple-300 rounded-full" onClick={() => loginWithRedirect()}>Log In</button>
	)
}