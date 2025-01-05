import resume from "../../public/nusrat_jahan.pdf";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-[#ec5b53]">
        <a href="#home">Home</a>
      </li>
      <li className="hover:text-[#ec5b53] ">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-[#ec5b53]">
        <a href="#resume">Resume</a>
      </li>
      <li className="hover:text-[#ec5b53]">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-[#ec5b53]">
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-90 bg-[#fefafa] open-sans container mx-auto md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#ec5b53] italic">
          Nusrat
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 scroll-smooth">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href={resume} download="nusrat_jahan.pdf">
          <button className=" bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
