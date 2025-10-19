import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative w-full min-h-screen tracking-wide font-peppermint bg-cream dark:bg-charcoal transition-colors">
      <div className="text-center pt-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          {user ? "Account Settings" : "View Your Account"}
        </h1>
        <h3 className="text-md sm:text-xl md:text-2xl lg:text-4xl py-6 mx-4 sm:mx-20">
          Welcome to the AI-powered App designed to educate users on nutritional facts.
        </h3>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
        {user ? (
          <button
            onClick={toggleDarkMode}
            className="px-8 py-6 bg-charcoal text-cream rounded-full font-semibold hover:charcoal"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="border border-charcoal inline-block bg-cream text-charcoal px-8 py-6 rounded-full 
                text-sm hover:bg-charcoal hover:text-cream hover:border-cream"
            >
              <h1 className="font-semibold">Login</h1>
            </Link>

            <Link
              to="/signup"
              className="border border-charcoal inline-block bg-cream text-charcoal px-8 py-6 rounded-full 
                text-sm hover:bg-charcoal hover:text-cream hover:border-cream"
            >
              <h1 className="font-semibold">Create an Account</h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
