
interface TeamCardProps {
    image: string
    name: string
    desc: string
}


const TeamCard = ({ image, name, desc }: TeamCardProps) => {
    return (
        <div className="bg-cream border border-caramel min-w-[260px] min-h-[320px] font-peppermint text-charcoal items-center">
            <img
                src={image}
                // alt={${name} profile}
                alt="#"
                className="bg-cream flex flex-col px-8 py-4 mb-8"
            />

            <div>
                <h1 className="bg-cream text-charcoal sm:text-md md:text-lg lg:text-2xl">
                    {name}
                </h1>
                <h3 className="bg-cream text-charcoal sm:text-sm md:text-md: lg:text-xl px-12 py-8 mb-12">
                    {desc}sa
                </h3>
            </div>
        </div>
    );
}

export default TeamCard