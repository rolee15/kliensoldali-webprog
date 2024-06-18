export const HamburgerMenu = ({ toggleMenu }) => {

  return (
    <div className="block lg:hidden">
      <button onClick={toggleMenu} className="flex items-center rounded border px-3 py-2 hover:border-white hover:text-white">
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};
