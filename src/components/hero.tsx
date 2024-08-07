const Hero: React.FC = () => {
  return (
    <section className="hero max-w-8xl mx-auto mt-[80px]">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-row">
          <div className="max-w-[645px]">
            <h1 className="font-medium text-6xl">
              We have thousand of your dream home
            </h1>
          </div>
          <div className="flex flex-col gap-y-[15px] ml-[138px]">
            <p className="text-lg text-secondaryBlack font-light">
              Lorem ipsum dolor sit amet consectetur. Elit elementum nunc
              fringilla id curabitur egestas arcu consectetur.
            </p>
            <a href="" className="underline underline-offset-8">
              About CozyHous
            </a>
          </div>
        </div>
        <div className="px-[60px] py-5 rounded-full border border-colorStroke">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-y-[2px] gap-x-3">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="1"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#DDDDDD"
                />
                <path
                  d="M26.25 23C26.25 22.4033 26.0129 21.831 25.591 21.409C25.169 20.9871 24.5967 20.75 24 20.75C23.4033 20.75 22.831 20.9871 22.409 21.409C21.9871 21.831 21.75 22.4033 21.75 23C21.75 23.5967 21.9871 24.169 22.409 24.591C22.831 25.0129 23.4033 25.25 24 25.25C24.5967 25.25 25.169 25.0129 25.591 24.591C26.0129 24.169 26.25 23.5967 26.25 23ZM33 23C33 27.311 28.3545 32.024 25.7385 34.337C25.2602 34.7642 24.6413 35.0003 24 35.0003C23.3587 35.0003 22.7398 34.7642 22.2615 34.337C19.6455 32.024 15 27.311 15 23C15 21.8181 15.2328 20.6478 15.6851 19.5558C16.1374 18.4639 16.8003 17.4718 17.636 16.636C18.4718 15.8003 19.4639 15.1374 20.5558 14.6851C21.6478 14.2328 22.8181 14 24 14C25.1819 14 26.3522 14.2328 27.4442 14.6851C28.5361 15.1374 29.5282 15.8003 30.364 16.636C31.1997 17.4718 31.8626 18.4639 32.3149 19.5558C32.7672 20.6478 33 21.8181 33 23ZM31.5 23C31.5 21.0109 30.7098 19.1032 29.3033 17.6967C27.8968 16.2902 25.9891 15.5 24 15.5C22.0109 15.5 20.1032 16.2902 18.6967 17.6967C17.2902 19.1032 16.5 21.0109 16.5 23C16.5 24.662 17.4225 26.5925 18.855 28.5245C20.256 30.4115 21.9855 32.09 23.2545 33.2135C23.4587 33.3986 23.7244 33.5011 24 33.5011C24.2756 33.5011 24.5413 33.3986 24.7455 33.2135C26.0145 32.09 27.7455 30.413 29.145 28.5245C30.5775 26.5925 31.5 24.662 31.5 23Z"
                  fill="#212427"
                />
              </svg>
              <div className="flex flex-col">
                <p>Location</p>
                <input type="text" placeholder="Search Location" className="" />
              </div>
            </div>
            <svg
              width="2"
              height="50"
              viewBox="0 0 2 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L0.999998 49"
                stroke="#DDDDDD"
                stroke-linecap="round"
              />
            </svg>
            <div className="flex flex-row gap-y-[2px] gap-x-3">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="1"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#DDDDDD"
                />
                <path
                  d="M34.5 32.1875H32.8125V21.5C32.8125 21.1519 32.6742 20.8181 32.4281 20.5719C32.1819 20.3258 31.8481 20.1875 31.5 20.1875H25.3125V15.5C25.3124 15.2624 25.2478 15.0294 25.1257 14.8256C25.0035 14.6219 24.8284 14.4551 24.6189 14.3431C24.4094 14.2311 24.1734 14.178 23.9361 14.1896C23.6989 14.2012 23.4692 14.2769 23.2716 14.4087L15.7716 19.4084C15.5918 19.5283 15.4445 19.6908 15.3426 19.8813C15.2407 20.0718 15.1874 20.2846 15.1875 20.5006V32.1875H13.5C13.3508 32.1875 13.2077 32.2468 13.1023 32.3522C12.9968 32.4577 12.9375 32.6008 12.9375 32.75C12.9375 32.8992 12.9968 33.0423 13.1023 33.1477C13.2077 33.2532 13.3508 33.3125 13.5 33.3125H34.5C34.6492 33.3125 34.7923 33.2532 34.8977 33.1477C35.0032 33.0423 35.0625 32.8992 35.0625 32.75C35.0625 32.6008 35.0032 32.4577 34.8977 32.3522C34.7923 32.2468 34.6492 32.1875 34.5 32.1875ZM31.5 21.3125C31.5497 21.3125 31.5974 21.3323 31.6326 21.3674C31.6677 21.4026 31.6875 21.4503 31.6875 21.5V32.1875H25.3125V21.3125H31.5ZM16.3125 20.5006C16.3126 20.4698 16.3202 20.4395 16.3348 20.4124C16.3493 20.3852 16.3703 20.3621 16.3959 20.345L23.8959 15.3444C23.9241 15.3256 23.9569 15.3147 23.9908 15.3131C24.0247 15.3114 24.0584 15.319 24.0883 15.3349C24.1182 15.3509 24.1432 15.3747 24.1607 15.4038C24.1782 15.4328 24.1874 15.4661 24.1875 15.5V32.1875H16.3125V20.5006ZM22.3125 23V24.5C22.3125 24.6492 22.2532 24.7923 22.1477 24.8977C22.0423 25.0032 21.8992 25.0625 21.75 25.0625C21.6008 25.0625 21.4577 25.0032 21.3523 24.8977C21.2468 24.7923 21.1875 24.6492 21.1875 24.5V23C21.1875 22.8508 21.2468 22.7077 21.3523 22.6023C21.4577 22.4968 21.6008 22.4375 21.75 22.4375C21.8992 22.4375 22.0423 22.4968 22.1477 22.6023C22.2532 22.7077 22.3125 22.8508 22.3125 23ZM19.3125 23V24.5C19.3125 24.6492 19.2532 24.7923 19.1477 24.8977C19.0423 25.0032 18.8992 25.0625 18.75 25.0625C18.6008 25.0625 18.4577 25.0032 18.3523 24.8977C18.2468 24.7923 18.1875 24.6492 18.1875 24.5V23C18.1875 22.8508 18.2468 22.7077 18.3523 22.6023C18.4577 22.4968 18.6008 22.4375 18.75 22.4375C18.8992 22.4375 19.0423 22.4968 19.1477 22.6023C19.2532 22.7077 19.3125 22.8508 19.3125 23ZM19.3125 28.25V29.75C19.3125 29.8992 19.2532 30.0423 19.1477 30.1477C19.0423 30.2532 18.8992 30.3125 18.75 30.3125C18.6008 30.3125 18.4577 30.2532 18.3523 30.1477C18.2468 30.0423 18.1875 29.8992 18.1875 29.75V28.25C18.1875 28.1008 18.2468 27.9577 18.3523 27.8523C18.4577 27.7468 18.6008 27.6875 18.75 27.6875C18.8992 27.6875 19.0423 27.7468 19.1477 27.8523C19.2532 27.9577 19.3125 28.1008 19.3125 28.25ZM22.3125 28.25V29.75C22.3125 29.8992 22.2532 30.0423 22.1477 30.1477C22.0423 30.2532 21.8992 30.3125 21.75 30.3125C21.6008 30.3125 21.4577 30.2532 21.3523 30.1477C21.2468 30.0423 21.1875 29.8992 21.1875 29.75V28.25C21.1875 28.1008 21.2468 27.9577 21.3523 27.8523C21.4577 27.7468 21.6008 27.6875 21.75 27.6875C21.8992 27.6875 22.0423 27.7468 22.1477 27.8523C22.2532 27.9577 22.3125 28.1008 22.3125 28.25Z"
                  fill="#212427"
                />
              </svg>
              <div className="flex flex-col">
                <p>Select Type</p>
                <button className="flex flex-row gap-x-3 items-center">
                  <p className="text-secondaryBlack">Search Type</p>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0926 11.5002L15.1289 5.472C15.1875 5.41309 15.2573 5.36654 15.3342 5.33511C15.4112 5.30368 15.4936 5.288 15.5767 5.28901C15.6598 5.29002 15.7418 5.30769 15.8179 5.34097C15.8941 5.37426 15.9627 5.42249 16.0199 5.4828C16.137 5.60616 16.2014 5.77032 16.1994 5.94039C16.1974 6.11047 16.1291 6.27305 16.0091 6.3936L9.5264 12.8673C9.46824 12.9259 9.39898 12.9722 9.32267 13.0037C9.24637 13.0352 9.16456 13.0512 9.08202 13.0507C8.99948 13.0502 8.91787 13.0332 8.84195 13.0008C8.76604 12.9684 8.69735 12.9212 8.6399 12.8619L1.9844 6.048C1.86661 5.92602 1.80078 5.76307 1.80078 5.5935C1.80078 5.42393 1.86661 5.26098 1.9844 5.139C2.04228 5.0794 2.11154 5.03201 2.18806 4.99966C2.26458 4.9673 2.34682 4.95063 2.4299 4.95063C2.51299 4.95063 2.59522 4.9673 2.67175 4.99966C2.74827 5.03201 2.81752 5.0794 2.8754 5.139L9.0926 11.5002Z"
                      fill="#868686"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <svg
              width="2"
              height="50"
              viewBox="0 0 2 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L0.999998 49"
                stroke="#DDDDDD"
                stroke-linecap="round"
              />
            </svg>
            <div className="flex flex-row gap-y-[2px] gap-x-3">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="1"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#DDDDDD"
                />
                <path
                  d="M18 22.5H22"
                  stroke="#212427"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.833 23.5H30.231C28.446 23.5 27 24.843 27 26.5C27 28.157 28.447 29.5 30.23 29.5H32.833C32.917 29.5 32.958 29.5 32.993 29.498C33.533 29.465 33.963 29.066 33.998 28.565C34 28.533 34 28.494 34 28.417V24.583C34 24.506 34 24.467 33.998 24.435C33.962 23.934 33.533 23.535 32.993 23.502C32.958 23.5 32.917 23.5 32.833 23.5Z"
                  stroke="#212427"
                  stroke-width="1.5"
                />
                <path
                  d="M32.965 23.5C32.887 21.628 32.637 20.48 31.828 19.672C30.657 18.5 28.771 18.5 25 18.5H22C18.229 18.5 16.343 18.5 15.172 19.672C14 20.843 14 22.729 14 26.5C14 30.271 14 32.157 15.172 33.328C16.343 34.5 18.229 34.5 22 34.5H25C28.771 34.5 30.657 34.5 31.828 33.328C32.637 32.52 32.888 31.372 32.965 29.5"
                  stroke="#212427"
                  stroke-width="1.5"
                />
                <path
                  d="M18 18.5L21.735 16.023C22.2603 15.6813 22.8734 15.4995 23.5 15.4995C24.1266 15.4995 24.7397 15.6813 25.265 16.023L29 18.5"
                  stroke="#212427"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M29.991 26.5H30.001"
                  stroke="#212427"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <p>Range Budget</p>
                <input
                  type="text"
                  placeholder="Determine your budget"
                  className=""
                />
              </div>
            </div>
            <div className="bg-colorButton py-4 px-8 rounded-full">
              <p className="text-primaryBlack font-medium text-lg">
                See Property
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
