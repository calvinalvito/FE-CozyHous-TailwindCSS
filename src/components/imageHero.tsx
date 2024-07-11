import heroImg from "../assets/img/hero-img.png"

const ImageHero: React.FC = () => {
  return (
    <section className="image-hero mt-10">
      <div className="relative">
        <div className="relative z-0">
          <img src={heroImg} alt="" className="h-[600px]" />
        </div>
        <div className="absolute bottom-[60px] left-[60px] flex flex-row gap-x-10">
          <div>
            <h3 className="text-6xl text-white">50+</h3>
            <p className="text-lg text-white">Type House Model</p>
          </div>
          <svg
            width="1"
            height="87"
            viewBox="0 0 1 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500004"
              y2="87"
              stroke="white"
            />
          </svg>
          <div>
            <h3 className="text-6xl text-white">100+</h3>
            <p className="text-lg text-white">Project Success</p>
          </div>
          <svg
            width="1"
            height="87"
            viewBox="0 0 1 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500004"
              y2="87"
              stroke="white"
            />
          </svg>
          <div>
            <h3 className="text-6xl text-white">80</h3>
            <p className="text-lg text-white">Total Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHero;
