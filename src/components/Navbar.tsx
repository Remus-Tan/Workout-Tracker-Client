import NavbarButton from './NavbarButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading haha</div>;
    }

    console.log(user, isAuthenticated, isLoading);

    return (
        <div className="sticky top-0 border-b-2 border-gray-100">
            <div className="m-auto max-w-screen-2xl">
                <div className="flex max-h-16 py-1 px-32 justify-between dark:bg-slate-800">
                    <div className="flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/9486/9486881.png" alt="Spooky logo" className="max-h-full"/>
                        BoohooHR
                    </div>
                    <div className="flex items-center">
                        <NavbarButton href="/">Home</NavbarButton>
                        <NavbarButton href="/about">About</NavbarButton>
                        { isAuthenticated ?
                        <LogoutButton /> :
                        <LoginButton />
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}