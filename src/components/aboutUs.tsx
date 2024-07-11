const AboutUs: React.FC = () => {
  return (
    <section className="abaout-us max-w-8xl mx-auto mt-[100px]">
      <div className="flex flex-col gap-y-[18px]">
        <h2 className="font-light text-[32px]">
          Welcome to CozyHous.
          <span className="text-secondaryBlack">
            We understand that searching for, building, or owning your dream
            home is not just a process but an emotional and meaningful journey.
          </span>
          Every step in finding the perfect dwelling is a part of your life
          story.
        </h2>
        <h2 className="font-light text-[32px]">
          And here at CozyHous, we are here to make each moment truly
          significant.
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
