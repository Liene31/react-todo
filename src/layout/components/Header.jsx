export const Header = () => {
  return (
    <header className="flex justify-between py-4 px-8">
      <div className="flex items-center gap-4">
        <img
          className="w-12"
          src="icons/organic-organism-svgrepo-com.svg"
          alt="logo of organic organism"
        />
        <p>Logo</p>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
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
