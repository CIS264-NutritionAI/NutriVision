import TeamCard from "../components/TeamCard";

const About = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pt-12 text-center">
          about nutrivision.
        </h1>
        <h3 className="text-sm sm:text-md md:text-lg lg:text-xl text-left justify-left py-12 mx-6 sm:mx-20">
          nutrivision is an AI-powered web-based health application designed to
          educate users on potentially harmful ingredients, minerals, chemicals,
          and allergens.
        </h3>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pl-6 sm:pl-12 mb-8 text-left">
          meet the team.
        </h1>

        <div className="flex flex-wrap justify-center gap-6 pb-16">
          <TeamCard
            image="https://i.imgur.com/n19WXEh.png"
            name="michael poniente"
            desc="full-stack developer"
          />
          <TeamCard
            image="https://i.imgur.com/n19WXEh.png"
            name="natalie luong"
            desc="full-stack developer"
          />
          <TeamCard
            image="https://i.imgur.com/n19WXEh.png"
            name="alisson lopez grijalva"
            desc="full-stack developer"
          />
          <TeamCard
            image="https://i.imgur.com/n19WXEh.png"
            name="aadarsh joshi"
            desc="full-stack developer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
