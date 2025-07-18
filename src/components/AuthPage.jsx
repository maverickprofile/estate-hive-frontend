import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'; // Import Supabase client

// Supabase Configuration
const supabaseUrl = 'https://qfmglenbyvhfrydozzqp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWdsZW5ieXZoZnJ5ZG96enFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3Nzc1MTksImV4cCI6MjA2ODM1MzUxOX0.KgiS9wmPVCnGCxYxLE2wSKRgwYwXvLU-j8UtIpmDUfQ';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Supabase Auth State Listener
  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Supabase auth state change:", event, session);
        if (event === 'SIGNED_IN' && session?.user) {
          console.log("User is signed in:", session.user);
          // Redirect to home on successful sign-in
          navigate('/');
        } else if (event === 'SIGNED_OUT') {
          console.log("User signed out.");
          // Optionally redirect to login page on sign-out
          // navigate('/auth');
        }
      }
    );

    // Check initial session on component mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        console.log("Initial session found:", session.user);
        navigate('/'); // Redirect if user is already logged in
      }
    });

    return () => {
      // Correctly unsubscribe from the listener
      if (authListener && authListener.data && authListener.data.subscription) {
        authListener.data.subscription.unsubscribe();
      }
    };
  }, [navigate]); // Add navigate to dependency array

  // Function to save/update user data in a 'profiles' table in Supabase
  const saveUserDataToSupabase = async (userId, name = '', phone = '', userEmail = '') => {
    try {
      const { data, error } = await supabase
        .from('profiles') // Assuming you have a 'profiles' table in Supabase
        .upsert(
          {
            id: userId,
            full_name: name,
            phone_number: phone,
            email: userEmail,
            created_at: new Date().toISOString(), // Use ISO string for Supabase timestamp
          },
          { onConflict: 'id', ignoreDuplicates: false } // Upsert based on 'id', prevent duplicate inserts
        );

      if (error) throw error;
      console.log("User profile data saved/updated in Supabase:", data);
    } catch (error) {
      console.error("Error saving user data to Supabase:", error);
      setErrorMessage("Failed to save user profile data.");
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      // Supabase's signInWithOAuth initiates a redirect to Google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined'
      ? window.location.origin
      : 'https://estatehive.in', // fallback
        },
      });

      if (error) throw error;

      console.log("Google login initiated (redirecting):", data);
      // The actual user session will be established after the redirect
      // and detected by the onAuthStateChange listener.
    } catch (error) {
      console.error("Google login error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkedInLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      // Supabase's signInWithOAuth for LinkedIn (OpenID Connect)
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'linkedin_oidc', // Use 'linkedin_oidc' for LinkedIn OpenID Connect
        options: {
          redirectTo: 'https://qfmglenbyvhfrydozzqp.supabase.co/auth/v1/callback', // Your specified callback URL
        },
      });

      if (error) throw error;

      console.log("LinkedIn login initiated (redirecting):", data);
      // The actual user session will be established after the redirect
      // and detected by the onAuthStateChange listener.
    } catch (error) {
      console.error("LinkedIn login error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const formattedPhoneNumber = `+91${phoneNumber}`; // Assuming Indian numbers, adjust as needed

      // For phone number login/signup, Supabase uses signInWithOtp
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: formattedPhoneNumber,
      });

      if (error) throw error;

      console.log("OTP sent successfully:", data);
      setShowOtpInput(true);
      setErrorMessage('OTP sent to your phone!');
    } catch (error) {
      console.error("Phone authentication error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      // Verify the OTP received
      const { data, error } = await supabase.auth.verifyOtp({
        phone: `+91${phoneNumber}`,
        token: otp,
        type: 'sms', // Specify type 'sms' or 'whatsapp' based on your Supabase setup
      });

      if (error) throw error;

      console.log("OTP verification successful:", data.user);
      // If user is new or existing, save/update their profile data
      if (data.user) {
        await saveUserDataToSupabase(data.user.id, fullName, phoneNumber, email);
      }
      navigate('/'); // Redirect to home on success
    } catch (error) {
      console.error("OTP verification error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Variants for Framer Motion animations
  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.4, ease: 'easeIn' } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 },
  };

  const toggleTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10 md:p-8 mt-20">
      <div
        className="
          bg-neutral-100 rounded-3xl
          shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] /* Neumorphic outset shadow for the main container */
          max-w-5xl w-full
          grid grid-cols-1 md:grid-cols-2 /* Two columns on medium screens and up */
          overflow-hidden /* Ensure rounded corners clip content */
        "
      >
        {/* Left Side: Login/Sign Up Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? 'login-form' : 'signup-form'}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-8 md:p-10 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              {isLogin ? 'Login to Estate Hive' : 'Sign Up for Estate Hive'}
            </h2>

            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full" role="alert">
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={showOtpInput ? verifyOtp : handlePhoneAuth} className="w-full space-y-4">
              {!isLogin && (
                <motion.div variants={inputVariants} initial="hidden" animate="visible">
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Full Name"
                    required={!isLogin}
                    className="
                      w-full px-5 py-3 rounded-xl
                      bg-neutral-200 text-gray-800
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                      transition-all duration-200
                    "
                  />
                </motion.div>
              )}

              {!isLogin && (
                <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required={!isLogin}
                    className="
                      w-full px-5 py-3 rounded-xl
                      bg-neutral-200 text-gray-800
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                      transition-all duration-200
                    "
                  />
                </motion.div>
              )}

              <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: isLogin ? 0 : 0.2 }}>
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g., 9876543210 (include country code if not +91)"
                  required
                  className="
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  "
                />
              </motion.div>

              {showOtpInput && (
                <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                  <label htmlFor="otp" className="block text-gray-700 text-sm font-semibold mb-2">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                    className="
                      w-full px-5 py-3 rounded-xl
                      bg-neutral-200 text-gray-800
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                      transition-all duration-200
                    "
                  />
                </motion.div>
              )}

              {/* Removed reCAPTCHA container as it's not directly used with Supabase client-side phone auth */}

              <motion.button
                type="submit"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                disabled={loading}
                className="
                  w-full bg-blue-600 text-white font-bold text-lg
                  py-3 rounded-full mt-6
                  shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                  hover:shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {loading ? 'Processing...' : (showOtpInput ? 'Verify OTP' : (isLogin ? 'Login with Phone' : 'Sign Up with Phone'))}
              </motion.button>
            </form>

            <motion.div variants={toggleTextVariants} initial="hidden" animate="visible" className="mt-6 text-gray-600 text-center">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <span
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                    onClick={() => { setIsLogin(false); setShowOtpInput(false); setErrorMessage(''); setPhoneNumber(''); setOtp(''); setEmail(''); setFullName(''); }}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                    onClick={() => { setIsLogin(true); setShowOtpInput(false); setErrorMessage(''); setPhoneNumber(''); setOtp(''); setEmail(''); setFullName(''); }}
                  >
                    Login
                  </span>
                </>
              )}
            </motion.div>

            <div className="w-full flex items-center justify-between my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="w-full space-y-4">
              <motion.button
                onClick={handleGoogleLogin}
                variants={socialButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                disabled={loading}
                className="
                  w-full flex items-center justify-center gap-3
                  bg-neutral-200 text-gray-700 font-semibold text-base
                  py-3 rounded-full
                  shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                  hover:shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                <FaGoogle className="text-red-500 text-xl" />
                {loading ? 'Processing...' : (isLogin ? 'Login with Google' : 'Sign Up with Google')}
              </motion.button>
              <motion.button
                onClick={handleLinkedInLogin} // Call the new LinkedIn handler
                variants={socialButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.4 }}
                disabled={loading}
                className="
                  w-full flex items-center justify-center gap-3
                  bg-neutral-200 text-gray-700 font-semibold text-base
                  py-3 rounded-full
                  shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                  hover:shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF]
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                <FaLinkedinIn className="text-blue-700 text-xl" />
                {loading ? 'Processing...' : (isLogin ? 'Login with LinkedIn' : 'Sign Up with LinkedIn')}
              </motion.button>
            </div>

            {/* "Back to Home" button for mobile screens */}
            <div className="mt-8 md:hidden text-center">
              <button
                onClick={() => navigate('/')}
                className="
                  bg-blue-600 text-white font-semibold px-6 py-3 rounded-full
                  shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300
                  w-full
                "
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Side: Information Panel (Desktop Only) */}
        <motion.div
          variants={rightPanelVariants}
          initial="hidden"
          animate="visible"
          className="
            hidden md:flex /* Hide on mobile, show on desktop */
            relative
            bg-gradient-to-br from-blue-600 to-purple-700
            rounded-r-3xl
            p-8 md:p-12
            flex-col items-center justify-center text-white text-center
          "
        >
          {/* Abstract background elements (optional, for more visual flair) */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
          <div className="absolute inset-0 bg-black opacity-10"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Unlock Your Dream Property
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Access exclusive listings, AI-powered insights, and personalized property matches.
            </p>
            <p className="text-sm md:text-base opacity-90 mb-8">
              Estate Hive is your trusted partner in navigating the real estate market with intelligence and ease.
            </p>
            {/* "Back to Home" button (Desktop Only) */}
            <button
              onClick={() => navigate('/')}
              className="
                bg-white text-blue-600 font-semibold px-6 py-3 rounded-full
                shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300
              "
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthPage;
