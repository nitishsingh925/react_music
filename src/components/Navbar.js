import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { mode, toggleThemeHandler } = useTheme();

  return (
    <div className="dark:bg-black dark:text-white flex justify-between">
      <div className="font-bold text-3xl">
        <button>MUSIC</button>
      </div>
      <div className="text-3xl">
        <button onClick={toggleThemeHandler}>
          {mode === "light" ? "🌙" : "🌕"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
