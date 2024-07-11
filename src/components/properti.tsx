import Properti1 from "../assets/img/property-1.png";
import Properti2 from "../assets/img/property-2.png";
import Properti3 from "../assets/img/property-3.png";
import Properti4 from "../assets/img/property-4.png";
import Properti5 from "../assets/img/property5.png";

const Property: React.FC = () => {
  return (
    <section className="most-property max-w-8xl mx-auto mt-[100px]">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-5xl">Most People View</h2>
            <p className="text-lg text-secondaryBlack font-light">
              From nature to heart and becomes all what we need to have
            </p>
          </div>
          <a
            href=""
            className="flex flex-row gap-x-2 items-center py-3 px-[32px] border border-primaryBlack rounded-full right-0"
          >
            <p className="text-lg font-medium">Discover More</p>
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3357 26.8479C11.1775 26.6897 11.0886 26.4751 11.0886 26.2513C11.0886 26.0275 11.1775 25.8129 11.3357 25.6547L24.2144 12.776L14.3188 12.776C14.0976 12.7722 13.8868 12.6816 13.7317 12.5238C13.5766 12.366 13.4897 12.1536 13.4897 11.9324C13.4897 11.7112 13.5766 11.4988 13.7317 11.341C13.8868 11.1832 14.0976 11.0926 14.3188 11.0888L26.2512 11.0888C26.475 11.0888 26.6895 11.1777 26.8477 11.3359C27.0059 11.4941 27.0948 11.7087 27.0949 11.9324L27.0949 23.8648C27.091 24.086 27.0005 24.2969 26.8427 24.4519C26.6849 24.607 26.4725 24.6939 26.2512 24.6939C26.03 24.6939 25.8176 24.607 25.6598 24.4519C25.502 24.2969 25.4115 24.086 25.4076 23.8648L25.4076 13.9693L12.529 26.8479C12.3707 27.0062 12.1561 27.0951 11.9323 27.0951C11.7086 27.0951 11.4939 27.0062 11.3357 26.8479Z"
                fill="#212427"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-y-[13px]">
          <div className="flex flex-col rounded-md max-w-[387px]">
            <img src={Properti1} alt="" />
            <div className="flex flex-row justify-between items-center mt-[18px]">
              <h3 className="text-3xl">$350,000</h3>
              <div className="py-2 px-5 rounded-full border border-primaryBlack">
                <p>For Sale</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">Green Meadow</h3>
              <p className="font-light text-lg text-secondaryBlack">
                456 Sunshine Avenue Metropolis Happyland
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md max-w-[387px]">
            <img src={Properti2} alt="" />
            <div className="flex flex-row justify-between items-center mt-[18px]">
              <h3 className="text-3xl">$350,000</h3>
              <div className="py-2 px-5 rounded-full border border-primaryBlack">
                <p>For Sale</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">Green Meadow</h3>
              <p className="font-light text-lg text-secondaryBlack">
                456 Sunshine Avenue Metropolis Happyland
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md max-w-[500px]">
            <img src={Properti4} alt="" className="h-[350px] bg-cover" />
            <div className="flex flex-row justify-between items-center mt-[18px]">
              <h3 className="text-3xl">$350,000</h3>
              <div className="py-2 px-5 rounded-full border border-primaryBlack">
                <p>For Sale</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">Green Meadow</h3>
              <p className="font-light text-lg text-secondaryBlack">
                456 Sunshine Avenue Metropolis Happyland
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md max-w-[500px]">
            <img src={Properti3} alt="" className="h-[350px] bg-cover" />
            <div className="flex flex-row justify-between items-center mt-[18px]">
              <h3 className="text-3xl">$350,000</h3>
              <div className="py-2 px-5 rounded-full border border-primaryBlack">
                <p>For Sale</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">Green Meadow</h3>
              <p className="font-light text-lg text-secondaryBlack">
                456 Sunshine Avenue Metropolis Happyland
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-md max-w-[387px] max-h-[350px] justify-between">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">
                Not satisfied with our current offerings? Explore beyond and
                uncover more ideal homes
              </h3>
            </div>
            <a
              href=""
              className="flex flex-row gap-x-2 items-center justify-center py-3 px-[32px] border border-primaryBlack rounded-full right-0"
            >
              <p className="text-lg font-medium">Discover More</p>
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3357 26.8479C11.1775 26.6897 11.0886 26.4751 11.0886 26.2513C11.0886 26.0275 11.1775 25.8129 11.3357 25.6547L24.2144 12.776L14.3188 12.776C14.0976 12.7722 13.8868 12.6816 13.7317 12.5238C13.5766 12.366 13.4897 12.1536 13.4897 11.9324C13.4897 11.7112 13.5766 11.4988 13.7317 11.341C13.8868 11.1832 14.0976 11.0926 14.3188 11.0888L26.2512 11.0888C26.475 11.0888 26.6895 11.1777 26.8477 11.3359C27.0059 11.4941 27.0948 11.7087 27.0949 11.9324L27.0949 23.8648C27.091 24.086 27.0005 24.2969 26.8427 24.4519C26.6849 24.607 26.4725 24.6939 26.2512 24.6939C26.03 24.6939 25.8176 24.607 25.6598 24.4519C25.502 24.2969 25.4115 24.086 25.4076 23.8648L25.4076 13.9693L12.529 26.8479C12.3707 27.0062 12.1561 27.0951 11.9323 27.0951C11.7086 27.0951 11.4939 27.0062 11.3357 26.8479Z"
                  fill="#212427"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col rounded-md max-w-[387px]">
            <img src={Properti5} alt="" />
            <div className="flex flex-row justify-between items-center mt-[18px]">
              <h3 className="text-3xl">$350,000</h3>
              <div className="py-2 px-5 rounded-full border border-primaryBlack">
                <p>For Sale</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-[28px]">Green Meadow</h3>
              <p className="font-light text-lg text-secondaryBlack">
                456 Sunshine Avenue Metropolis Happyland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
