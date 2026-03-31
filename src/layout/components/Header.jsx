export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-main-blue-50">
      <div className="flex items-center gap-4">
        <img
          className="w-12"
          src="icons/organic-organism-svgrepo-com.svg"
          alt="logo of organic organism"
        />
        <p className="text-main-blue-950 font-bold ">Logo</p>
      </div>
      <nav>
        <ul className="flex items-center gap-4 font-bold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Tasks</a>
          </li>
          <li>
            <a href="">Pomodoro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
