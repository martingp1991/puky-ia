import { useState, useEffect } from "react";

function Switch() {
  const [theme, setTheme] = useState("light");
  const modeText = theme === "dark" ? "Light Mode" : "Dark Mode";

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mb-3">
      <div className="relative inline-block w-6 ml-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="themeToggle"
          className="absolute block w-4 h-4 duration-200 ease-in border-4 rounded-full outline-none appearance-none cursor-pointer bg-slate-400 left-1 checked:bg-green-500 focus:outline-none right-4 checked:right-0 "
          checked={theme === "dark"}
          onChange={handleThemeSwitch}
        />
        <label
          htmlFor="themeToggle"
          className="block h-4 overflow-hidden rounded-full cursor-pointer"
        ></label>
      </div>
      <span className="mx-2 text-sm font-medium text-gray-600 dark:text-gray-300">{modeText}</span>
    </div>
  );
}

export default Switch;
