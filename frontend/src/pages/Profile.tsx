import { Link } from "react-router-dom";


const Profile = () => {
  return (


    <div>
      <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pt-12 text-center">
          view your account information.
        </h1>
        <h3 className="text-md sm:text-xl md:text-2xl lg:text-4xl text-center py-12 mx-20">
          Welcome to the AI-powered App designed to educate users on nutritional facts.
        </h3>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <Link
          to="/login"
          className="border border-charcoal inline-block bg-cream text-charcoal px-8 py-6 rounded-full 
      text-sm hover:bg-charcoal hover:text-cream hover:border-cream"
        >
          <h1 className="font-semibold">login</h1>
        </Link>

        <Link
          to="/signups"
          className="border border-charcoal inline-block bg-cream text-charcoal px-8 py-6 rounded-full 
      text-sm hover:bg-charcoal hover:text-cream hover:border-cream"
        >
          <h1 className="font-semibold">create an account</h1>
        </Link>

        <Link
          to="/results"
          className="border border-charcoal inline-block bg-cream text-charcoal px-8 py-6 rounded-full 
      text-sm hover:bg-charcoal hover:text-cream hover:border-cream"
        >
          <h1 className="font-semibold">view previous scan results</h1>
        </Link>
      </div>



    </div>


  );
};

export default Profile;