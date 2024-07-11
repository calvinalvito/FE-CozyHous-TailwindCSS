const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="max-w-8xl mx-auto flex flex-row justify-between items-center h-[100px]">
        <div>
          <h3 className="font-medium text-2xl">CozyHous</h3>
        </div>
        <div>
          <ul className="flex flex-row gap-x-8">
            <li>
              <a href="" className="hover:font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:font-semibold">
                Location
              </a>
            </li>
            <li>
              <a href="" className="hover:font-semibold">
                Success
              </a>
            </li>
            <li>
              <a href="" className="hover:font-semibold">
                Features
              </a>
            </li>
            <li>
              <a href="" className="hover:font-semibold">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-colorButton py-3 px-7 rounded-full">
          <p className="text-primaryBlack font-medium text-lg">Sign In</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
