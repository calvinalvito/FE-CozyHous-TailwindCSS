import footerImage from "../assets/img/footer.png";

const Footer: React.FC = () => {
  return (
    <section className="footer mt-[100px]">
      <div className="relative">
        <div className="relative z-0">
          <img src={footerImage} alt="" className="h-[600px]" />
        </div>
        <div className="absolute inset-0 flex top-[53px] justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-white font-medium text-5xl text-center leading-[60px] mb-1">
              Where every brick<br />tells a story of comfort
            </h3>
            <p className="text-lg text-white font-light mb-4">
              Grow and live together to pursue happiness that we always dreaming
              of
            </p>
            <button className="bg-colorButton py-4 px-8 rounded-full inline-block">
              <p className="text-primaryBlack font-medium text-lg">
                Get Started
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mt-[100px] mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-y-2 max-w-[420px]">
            <h3 className="font-medium text-4xl">CozyHous</h3>
            <p className="font-light text-lg text-secondaryBlack leading-8">
              A property platform for the experience of searching, building, and
              owning homes with comfort and warmth. We emphasize innovative
              design and quality
            </p>
          </div>
          <div>
            <p className="font-medium text-xl mb-3">Home</p>
            <ul className="text-lg text-secondaryBlack font-light flex flex-col gap-y-[18px]">
              <li>Menu</li>
              <li>Home</li>
              <li>Location</li>
              <li>Success</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-xl mb-3">Type</p>
            <ul className="text-lg text-secondaryBlack font-light flex flex-col gap-y-[18px]">
              <li>All Type</li>
              <li>Family House</li>
              <li>Urban House</li>
              <li>Modern House</li>
              <li>Modern House</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-xl mb-3">Follow Us On</p>
            <ul className="text-lg text-secondaryBlack font-light flex flex-col gap-y-[18px]">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Tiktok</li>
              <li>X</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-xl mb-3">Locate Us</p>
            <ul className="text-lg text-secondaryBlack font-light flex flex-col gap-y-[18px]">
              <li>
                555 Midnight Crescent <br />Moonlight Town Nocturnia
              </li>
              <li>info@CozyHous.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between text-lg text-secondaryBlack mt-[100px] mb-5">
          <h3>@CozyHous Production</h3>
          <div className="flex flex-row gap-x-[60px]">
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
