import ThemeToggleButton from "../ui/ThemeToggleButton";

const Header = () => {
  return (
    <>
      <header className="border-b shadow">
        <div className="mx-auto max-w-screen-lg px-6 py-2 flex items-center justify-between">
          <h1 className="font-semibold">App Name</h1>

          <nav>
            <ThemeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
