import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="flex space-x-10 bg-sky-200 p-2 pl-4 pr-4 font-sans">
    <h1 className="text-3xl font-bold">KUWS</h1>
    <nav className="flex w-full items-center">
      <ul className="flex w-full list-none space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <div>
        <Link to="cart">Cart</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
