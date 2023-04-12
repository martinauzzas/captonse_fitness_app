import { firebaseConfig } from '../config/firebase.config'
import { signInAnonymously, getAuth } from 'firebase/auth';
import { Auth } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

interface GuestProps {
    children: React.ReactNode;
}

const AuthGuest = ({ children } : GuestProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.currentUser){
            navigate("../")
            signInAnonymously(auth)
        }
    }, [])

    return (
        <>{ children }
            <div>
                <h1>LOGIN</h1>
            </div>
        </>
    )
}

export default AuthGuest