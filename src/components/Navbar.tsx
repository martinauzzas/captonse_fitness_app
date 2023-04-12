import { Link } from 'react-router-dom';
import { signInWithPopup, signOut, signInAnonymously } from 'firebase/auth';
import { auth, Providers  } from '../config/firebase';
import logo from '../assets/images/logo.png';

function Navbar () {
    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response =await signInWithPopup( auth, Providers.google );
        if ( response.user ) {
            location.reload();
        }
    }

    const signInOnClickGuest = async () => {
        const response =await signInAnonymously(auth)
        if ( response.user ) {
            location.reload();
        }
    }

    return (
        <div className='bg-blue-300'>
            <nav className="flex">
                        <button>
                            <Link to="/">
                                <img src={logo} alt="" className='w-16 h-14 m-4'/>
                            </Link>
                        </button>
                <div className="w-full flex flex-nowrap justify-end ">
                    <div className="text-base navbar-text">
                        <button className="text-slate-700 hover:text-yellow-300 p-3 m-4 justify-items-center">
                                <Link to="/">
                                    HOME
                                </Link>
                        </button>
                        <button className="text-slate-700 hover:text-yellow-300 p-3 m-4 justify-items-center">
                                <Link to="/dashboard">
                                    DASHBOARD
                                </Link>
                        </button>
                            {
                                !auth.currentUser ?
                                <>
                                    <Link to="/" onClick={ () => { signInOnClick() }}>
                                        <button className="text-slate-700 hover:text-yellow-300 p-3 m-4 justify-items-center">
                                                LOGIN
                                        </button>
                                    </Link>
                                    <Link to="/" onClick={ () => { signInOnClickGuest() }}>
                                    <button className="text-slate-700 hover:text-yellow-300 p-3 m-4 justify-items-center">
                                            LOGIN AS GUEST
                                    </button>
                                    </Link>
                                </>
                                :
                                <Link to="/"  onClick = { () => { signOutOnClick() }}>
                                    <button className="text-slate-700 hover:text-yellow-300 p-3 m-4 justify-items-center">
                                            LOGOUT
                                    </button>
                                </Link>
                            }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
