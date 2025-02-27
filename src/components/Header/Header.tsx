import ThemeToggleButton from "../ui/ThemeToggleButton";

const Header = () => {
  return (
    <>
      <header className="border-b shadow">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-2">
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
