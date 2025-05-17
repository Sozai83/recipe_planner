import { useState } from 'react'

const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.018 6.516c-.92 0-1.952.445-2.83 1.213-.995.849-1.735 2.031-1.735 3.339 0 1.44.792 2.595 1.753 3.388.849.71 1.838 1.146 2.758 1.146.892 0 1.905-.427 2.795-1.183.985-.83 1.632-1.978 1.632-3.311 0-1.26-.61-2.408-1.571-3.269-.881-.772-1.856-1.169-2.797-1.169zm.143-2.461c.967 0 1.816.104 2.575.313.195.052.39.104.585.156-.13-.183-.289-.365-.477-.548-.881-.881-2.031-1.43-3.311-1.43s-2.43.548-3.311 1.43c-.187.183-.346.365-.477.548.195-.052.39-.104.585-.156.76-.209 1.608-.313 2.575-.313zm-.143 13.072c-1.449 0-2.711-.586-3.621-1.58-.976-1.066-1.542-2.495-1.542-4.017s.566-2.951 1.542-4.017c.91-.995 2.172-1.58 3.621-1.58s2.711.586 3.621 1.58c.976 1.066 1.542 2.495 1.542 4.017s-.566 2.951-1.542 4.017c-.91.995-2.172 1.58-3.621 1.58zm6.599-10.954c-.018-.062-.036-.124-.054-.186a.758.758 0 00-.09-.219.783.783 0 00-.126-.19.751.751 0 00-.144-.153.87.87 0 00-.18-.126c-.054-.027-.108-.054-.171-.072a.804.804 0 00-.189-.045c-.072-.009-.144-.018-.216-.018h-.09c-.072 0-.144.009-.216.018a.804.804 0 00-.189.045c-.063.018-.117.045-.171.072a.87.87 0 00-.18.126.751.751 0 00-.144.153.783.783 0 00-.126.19.758.758 0 00-.09.219c-.018.062-.036.124-.054.186a.783.783 0 00-.027.216c0 .072.009.144.027.216.009.054.027.108.045.162a.758.758 0 00.072.18.87.87 0 00.126.18.751.751 0 00.153.144.783.783 0 00.19.126.758.758 0 00.219.09c.062.018.124.036.186.054a.783.783 0 00.216.027c.072 0 .144-.009.216-.027a.783.783 0 00.216-.054.758.758 0 00.219-.09.783.783 0 00.19-.126.751.751 0 00.153-.144.87.87 0 00.126-.18.758.758 0 00.072-.18c.018-.054.027-.108.045-.162.009-.072.027-.144.027-.216a.783.783 0 00-.027-.216z" />
    </svg>
);
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.03998C6.48 2.03998 2 6.51998 2 12.04C2 17.06 5.66 21.21 10.44 21.9V14.89H7.9V12.04H10.44V9.80005C10.44 7.29005 11.93 5.96005 14.22 5.96005C15.31 5.96005 16.45 6.15005 16.45 6.15005V8.62005H15.19C13.95 8.62005 13.56 9.39005 13.56 10.18V12.04H16.34L15.89 14.89H13.56V21.9C18.34 21.21 22 17.06 22 12.04C22 6.51998 17.52 2.03998 12 2.03998Z" />
    </svg>
);


interface LoginPageProps {
    handleLoginState: (isLoggedIn: boolean) => void;
    handleGuestLogin: () => void;
}

function LoginPage({ handleLoginState, handleGuestLogin }: LoginPageProps) {
    // State for email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler for form submission
    const handleLogin = (e) => {
        e.preventDefault();
        handleLoginState(true);
        // Add your login logic here
        console.log('Login attempt with:', { email, password });
        // Example: You might call an API, dispatch an action, etc.
    };

    // Handler for social login
    const handleSocialLogin = (provider) => {
        // Add your social login logic here
        console.log(`Login with ${provider}`);
    };

    return (
        // Main container for the login page
        // Uses flexbox to center content vertically and horizontally
        // Sets a background color and ensures full screen height
        <div className="min-h-screen bg-[#FFF0D4] flex flex-col items-center justify-center p-4 font-sans">
            {/* Inner container for the login form elements */}
            {/* Max width for medium screens and above, padding, and rounded corners */}
            <div className="w-full max-w-sm flex flex-col items-center">

                {/* Title of the application */}
                <h1 className="text-4xl font-serif text-[#D9534F] mb-10">Recipe Planner</h1>

                {/* Login form */}
                <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
                    {/* Email input field */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#D9534F] focus:border-transparent"
                        required
                    />
                    {/* Password input field */}
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#D9534F] focus:border-transparent"
                        required
                    />
                    {/* Login button */}
                    <button
                        type="submit"
                        className="btn bg-[#3A3F47] hover:bg-[#2c3036] text-white w-full rounded-lg py-3 font-semibold transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot password link */}
                <a href="#" className="font-semibold text-sm text-[#D9534F] hover:underline mt-4 mb-6">
                    Forgot password?
                </a>

                {/* Sign up link */}
                <p className="text-sm text-gray-700">
                    Don't have an account?{' '}
                    <a href="#" className="font-semibold text-[#D9534F] hover:underline">
                        Sign up
                    </a>
                </p>

                {/* "Login with" text separator */}
                <div className="divider my-6 text-sm text-gray-500">Login with</div>

                {/* Social login buttons container */}
                {/* Uses flexbox to arrange buttons horizontally with spacing */}
                <div className="flex justify-center gap-4 mb-6">
                    {/* Apple login button */}
                    <button
                        onClick={() => handleSocialLogin('Apple')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Apple"
                    >
                        <AppleIcon />
                    </button>
                    {/* Google login button */}
                    <button
                        onClick={() => handleSocialLogin('Google')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Google"
                    >
                        <GoogleIcon />
                    </button>
                    {/* Facebook login button */}
                    <button
                        onClick={() => handleSocialLogin('Facebook')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Facebook"
                    >
                        <FacebookIcon />
                    </button>
                </div>

                {/* Continue as Guest button */}
                <button
                    onClick={handleGuestLogin}
                    className="btn btn-outline border-gray-400 hover:bg-gray-100 text-gray-700 w-full max-w-xs rounded-lg py-3 font-semibold transition duration-200"
                >
                    Continue as Guest
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
