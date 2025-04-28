import React, { useState, useEffect } from 'react';
import { initializeApp, getApps, FirebaseApp, FirebaseError } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    Auth,
    User,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { Chrome, LogIn } from 'lucide-react';

// Read Firebase config from environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
try {
    const apps = getApps();
    if (!apps.length) {
        // Check if config values are present
        if (!firebaseConfig.apiKey) {
            throw new Error("Missing Firebase API Key in .env file (VITE_FIREBASE_API_KEY)");
        }
        app = initializeApp(firebaseConfig);
    } else {
        app = apps[0];
    }
    auth = getAuth(app);
    console.log("Firebase Initialized for Login Page");
} catch (error) {
    console.error("Firebase initialization failed:", error);
    // Consider setting an error state here to display to the user
}

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Listener for authentication state changes
    useEffect(() => {
        if (!auth) {
            setError("Firebase service is not available. Check configuration or refresh.");
            setAuthLoading(false);
            return;
        }
        setAuthLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setCurrentUser(user);
            setAuthLoading(false);
            if (user) {
                setError('');
            } else {
                 setError('');
                 if (message === "Successfully logged in!" || message === "Registration successful! You are now logged in.") {
                    setMessage('');
                 }
            }
        });
        return () => unsubscribe();
    }, [message]);

    const clearMessages = () => {
        setError('');
        setMessage('');
    };

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!auth) return setError("Auth service not available.");
        if (!email || !password) return setError("Please enter both email and password.");
        if (password.length < 6) return setError("Password must be at least 6 characters long.");
        clearMessages();
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Registration successful! You are now logged in.");
        } catch (err) {
            if (err instanceof FirebaseError) setError(err.message || `Registration failed: ${err.code}`);
            else setError("An unexpected error occurred during registration.");
        } finally { setLoading(false); }
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!auth) return setError("Auth service not available.");
        if (!email || !password) return setError("Please enter both email and password.");
        clearMessages();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("Successfully logged in!");
        } catch (err) {
            if (err instanceof FirebaseError) setError(err.message || `Login failed: ${err.code}`);
            else setError("An unexpected error occurred during login.");
        } finally { setLoading(false); }
    };

    const handleLogout = async () => {
        if (!auth) return setError("Auth service not available.");
        clearMessages();
        setLoading(true);
        try {
            await signOut(auth);
            setEmail(''); setPassword('');
            setMessage("Successfully logged out.");
        } catch (err) {
            if (err instanceof FirebaseError) setError(err.message || `Logout failed: ${err.code}`);
            else setError("An unexpected error occurred during logout.");
        } finally { setLoading(false); }
    };

    const handleGoogleLogin = async () => {
        if (!auth) return setError("Auth service not available.");
        clearMessages();
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setMessage("Successfully logged in with Google!");
        } catch (err) {
            if (err instanceof FirebaseError) setError(err.message || `Google Sign-In failed: ${err.code}`);
            else setError("An unexpected error occurred during Google Sign-In.");
            console.error("Google Sign-in error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Display loading indicator during initial auth check
    if (authLoading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white"><p>Loading authentication state...</p></div>;
    }

    if (!auth) { // Handle case where Firebase failed to init
         return <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl text-center">
                <h1 className="text-xl font-semibold text-red-400">Initialization Error</h1>
                <p className="text-gray-300 mt-2">Could not connect to authentication service. Please check configuration and ensure you have internet access.</p>
            </div>
         </div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl">
                <div className="text-center mb-8">
                  <Chrome className="mx-auto h-12 w-auto text-blue-400" />
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100">
                    Sign in to Whispr
                  </h1>
                   <p className="mt-2 text-sm text-gray-400">
                     Access your voice assistant features.
                   </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 rounded-md text-sm bg-red-900/30 border border-red-700 text-red-300">
                        {error}
                    </div>
                )}
                {message && (
                    <div className="mb-4 p-3 rounded-md text-sm bg-green-900/30 border border-green-700 text-green-300">
                        {message}
                    </div>
                )}

                {currentUser ? (
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-300 mb-4">Logged in as: <span className="font-semibold text-white">{currentUser.email}</span></p>
                        <button
                            onClick={handleLogout}
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                        >
                            {loading ? 'Logging out...' : 'Logout'}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
                            <input
                                type="email"
                                id="login-email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                                disabled={loading}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-600 disabled:cursor-not-allowed"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="login-password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                                disabled={loading}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-600 disabled:cursor-not-allowed"
                                placeholder="******"
                            />
                            <p className="mt-1 text-xs text-gray-500">Password should be at least 6 characters.</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                            >
                                <LogIn className="w-4 h-4"/>
                                {loading ? 'Processing...' : 'Sign in with Email'}
                            </button>
                            <button
                                type="button"
                                onClick={handleRegister}
                                disabled={loading}
                                className="w-full flex justify-center py-2.5 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                            >
                                {loading ? 'Processing...' : 'Register with Email'}
                            </button>
                        </div>

                         <div className="relative my-6">
                           <div className="absolute inset-0 flex items-center" aria-hidden="true">
                             <div className="w-full border-t border-gray-600" />
                           </div>
                           <div className="relative flex justify-center text-sm">
                             <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                           </div>
                         </div>

                         <div>
                           <button
                             type="button"
                             onClick={handleGoogleLogin}
                             disabled={loading}
                             className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                           >
                             <span className="sr-only">Sign in with Google</span>
                             <svg className="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                               <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                               <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                               <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                               <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                               <path fill="none" d="M0 0h48v48H0z"></path>
                             </svg>
                             Sign in with Google
                           </button>
                         </div>

                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
