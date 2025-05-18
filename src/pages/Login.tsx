import React, { useState } from 'react'; // Ensure React is imported for JSX
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'


const supabase = createClient(
    'https://lwnofgcqewihwdnmbxzr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3bm9mZ2NxZXdpaHdkbm1ieHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDExNDYsImV4cCI6MjA2MzExNzE0Nn0.y1fsN1Z48UZkaY1WfiOrWa2VDwYwH-5aXZ_Tas5qh38'
)


const customTheme = {
    default: {
        colors: {
            textPrimary: '#3A3F47',
            textSecondary: '#3A3F47',
            brand: '#3A3F47',
            brandHover: '#2c3036',
            brandButtonText: 'white',
            defaultButtonBackground: '#3A3F47',
            defaultButtonBackgroundHover: '#2c3036',
        },
    },
    dark: {
        colors: {
            brand: 'hsl(153 60.0% 53.0%)',
            brandAccent: 'hsl(154 54.8% 45.1%)',
            brandButtonText: 'white',
            brandButtonBackground: '#3A3F47',
            brandButtonBackgroundHover: '#2c3036',
            defaultButtonBackground: '#ffffff',
            defaultButtonBackgroundHover: '#f0f0f0',
            //..
        },
    },
}

// Icon components (assuming these are correct as provided)
const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.018 6.516c-.92 0-1.952.445-2.83 1.213-.995.849-1.735 2.031-1.735 3.339 0 1.44.792 2.595 1.753 3.388.849.71 1.838 1.146 2.758 1.146.892 0 1.905-.427 2.795-1.183.985-.83 1.632-1.978 1.632-3.311 0-1.26-.61-2.408-1.571-3.269-.881-.772-1.856-1.169-2.797-1.169zm.143-2.461c.967 0 1.816.104 2.575.313.195.052.39.104.585.156-.13-.183-.289-.365-.477-.548-.881-.881-2.031-1.43-3.311-1.43s-2.43.548-3.311 1.43c-.187.183-.346.365-.477.548.195-.052.39.104.585-.156.76-.209 1.608-.313 2.575-.313zm-.143 13.072c-1.449 0-2.711-.586-3.621-1.58-.976-1.066-1.542-2.495-1.542-4.017s.566-2.951 1.542-4.017c.91-.995 2.172-1.58 3.621-1.58s2.711.586 3.621 1.58c.976 1.066 1.542 2.495 1.542 4.017s-.566 2.951-1.542 4.017c-.91.995-2.172 1.58-3.621 1.58zm6.599-10.954c-.018-.062-.036-.124-.054-.186a.758.758 0 00-.09-.219.783.783 0 00-.126-.19.751.751 0 00-.144-.153.87.87 0 00-.18-.126c-.054-.027-.108-.054-.171-.072a.804.804 0 00-.189-.045c-.072-.009-.144-.018-.216-.018h-.09c-.072 0-.144.009-.216.018a.804.804 0 00-.189.045c-.063.018-.117.045-.171-.072a.87.87 0 00-.18.126.751.751 0 00-.144.153.783.783 0 00-.126.19.758.758 0 00-.09.219c-.018.062-.036-.124-.054-.186a.783.783 0 00-.027.216c0 .072.009.144.027.216.009.054.027.108.045.162a.758.758 0 00.072.18.87.87 0 00.126.18.751.751 0 00.153.144.783.783 0 00.19.126.758.758 0 00.219.09c.062.018.124.036.186.054a.783.783 0 00.216.027c.072 0 .144-.009.216-.027a.783.783 0 00.216-.054.758.758 0 00.219-.09.783.783 0 00.19-.126.751.751 0 00.153-.144.87.87 0 00.126-.18.758.758 0 00.072-.18c.018-.054.027-.108.045-.162.009-.072.027-.144.027-.216a.783.783 0 00-.027-.216z" />
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

// Props interface for the LoginPage component
interface LoginPageProps {
    handleLoginState: (isLoggedIn: boolean, userData?: any) => void; // Pass userData on successful login
    handleGuestLogin: () => void;
}

async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'valid.email@supabase.io',
        password: 'example-password',
    })
}

function LoginPage({ handleLoginState, handleGuestLogin }: LoginPageProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    // formErrors is for API errors or very general form messages, NOT for individual field validation.
    const [formErrors, setFormErrors] = useState<string[]>([]);

    // console.log("LoginPage IS RENDERING. Current formErrors:", formErrors); // Useful for debugging render cycles

    // Email validation function
    // Note: Removed async/await from setState calls as they don't return Promises
    const validateEmailField = (emailToValidate: string): boolean => {
        if (!emailToValidate) {
            setEmailError('Email is required.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailToValidate)) {
            setEmailError('Please enter a valid email address.');
            return false;
        }
        setEmailError(''); // Clear specific email error if valid
        return true;
    };

    // Password validation function
    const validatePasswordField = (passwordToValidate: string): boolean => {
        if (!passwordToValidate) {
            setPasswordError('Password is required.');
            return false;
        }
        if (passwordToValidate.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            return false;
        }
        setPasswordError(''); // Clear specific password error if valid
        return true;
    };

    // Handler for form submission
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 1. Clear previous API/general form errors at the start of every submission.
        // This ensures the main error box doesn't show stale messages.
        setFormErrors([]);

        // 2. Validate individual fields.
        // These functions will set emailError and passwordError state,
        // which will cause a re-render to display those specific errors.
        const isEmailValid = validateEmailField(email);
        const isPasswordValid = validatePasswordField(password);

        // 3. Proceed if client-side validation passes
        if (isEmailValid && isPasswordValid) {
            console.log('Client-side validation successful. Attempting login with:', { email, password });
            try {
                // --- TODO: Replace with your actual API call for login ---
                // Example:
                // const response = await fetch('/api/login', { /* ... */ });
                // const data = await response.json();
                // if (response.ok) {
                //   handleLoginState(true, data.user); // Login success
                // } else {
                //   // API returned an error, set it in formErrors
                //   const apiErrorMessages = Array.isArray(data.errors) ? data.errors : [data.message || 'Login failed.'];
                //   setFormErrors(apiErrorMessages);
                // }

                // For demonstration purposes:
                if (email === "api.error@example.com") { // Simulate an API error
                    // Set formErrors ONLY for API-level errors
                    setFormErrors(["Simulated API error: Invalid credentials from server."]);
                    console.log('Simulated API error during login.');
                } else { // Simulate successful login
                    const simulatedUserData = { id: 'user123', email: email, name: 'Test User' };
                    await signInWithEmail();
                    handleLoginState(true, simulatedUserData); // Simulate success
                }

            } catch (error) {
                // Network error or other issue with the fetch call itself
                console.error("Login API call error:", error);
                setFormErrors(['An unexpected error occurred. Please check connection.']);
            }
        } else {
            // Client-side validation failed for one or both fields.
            // emailError and/or passwordError have already been set by their respective
            // validation functions (validateEmailField, validatePasswordField).
            // These errors will be displayed below their respective input fields after React re-renders.
            // **Crucially, DO NOT add emailError or passwordError to formErrors here.**
            // Doing so would cause field-specific messages to incorrectly appear in the general error box.
            console.log('Client-side validation failed. Specific field errors are (or will be) displayed below inputs.');
        }
    };

    const handleSocialLoginClick = (provider: string) => {
        console.log(`Login with ${provider}`);
        setFormErrors([]); // Clear general form errors before attempting social login
        // --- TODO: Implement your social login logic here ---
        const socialUserData = { id: `social-${provider}`, name: `${provider} User` };
        handleLoginState(true, socialUserData); // Simulate success
    };

    const handleGuestLoginClick = () => {
        setFormErrors([]); // Clear general form errors
        handleGuestLogin();
    };

    return (
        <div className="min-h-screen bg-[#FFF0D4] flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-sm flex flex-col items-center">
                <h1 className="text-4xl font-serif text-[#D9534F] mb-8">Recipe Planner</h1>
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: customTheme
                    }}
                    providers={['google', 'facebook', 'twitter']}
                />

                {/* This box is ONLY for formErrors (API errors, general form messages) */}
                {formErrors.length > 0 && (
                    <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
                        <strong className="font-bold">Login Error:</strong>
                        <ul className="mt-1 list-disc list-inside">
                            {formErrors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleLoginSubmit} className="w-full flex flex-col gap-2">
                    {/* Email field and its specific error message */}
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                // Optionally re-validate on change if there was an error, for faster feedback
                                if (emailError) validateEmailField(e.target.value);
                            }}
                            onBlur={() => validateEmailField(email)} // Validate when field loses focus
                            className={`input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:border-transparent ${emailError ? 'input-error ring-red-500' : 'focus:ring-[#D9534F]'}`}
                            required
                            aria-invalid={!!emailError}
                            aria-describedby={emailError ? "email-error-message" : undefined}
                        />
                        {emailError && <p id="email-error-message" className="text-red-500 text-xs mt-1 ml-1">{emailError}</p>}
                    </div>

                    {/* Password field and its specific error message */}
                    <div className="mt-2">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (passwordError) validatePasswordField(e.target.value);
                            }}
                            onBlur={() => validatePasswordField(password)}
                            className={`input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:border-transparent ${passwordError ? 'input-error ring-red-500' : 'focus:ring-[#D9534F]'}`}
                            required
                            aria-invalid={!!passwordError}
                            aria-describedby={passwordError ? "password-error-message" : undefined}
                        />
                        {passwordError && <p id="password-error-message" className="text-red-500 text-xs mt-1 ml-1">{passwordError}</p>}
                    </div>

                    <button
                        type="submit"
                        className="btn bg-[#3A3F47] hover:bg-[#2c3036] text-white w-full rounded-lg py-3 font-semibold transition duration-200 mt-4"
                    >
                        Login
                    </button>
                </form>

                <a href="#" className="font-semibold text-sm text-[#D9534F] hover:underline mt-4 mb-6">
                    Forgot password?
                </a>

                <p className="text-sm text-gray-700">
                    Don't have an account?{' '}
                    <a href="#" className="font-semibold text-[#D9534F] hover:underline">
                        Sign up
                    </a>
                </p>

                <div className="divider my-6 text-sm text-gray-500">Login with</div>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => handleSocialLoginClick('Apple')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Apple"
                    >
                        <AppleIcon />
                    </button>
                    <button
                        onClick={() => handleSocialLoginClick('Google')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Google"
                    >
                        <GoogleIcon />
                    </button>
                    <button
                        onClick={() => handleSocialLoginClick('Facebook')}
                        className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 rounded-lg p-3 flex items-center justify-center w-16 h-16 transition duration-200"
                        aria-label="Login with Facebook"
                    >
                        <FacebookIcon />
                    </button>
                </div>

                <button
                    onClick={handleGuestLoginClick}
                    className="btn btn-outline border-gray-400 hover:bg-gray-100 text-gray-700 w-full max-w-xs rounded-lg py-3 font-semibold transition duration-200"
                >
                    Continue as Guest
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
