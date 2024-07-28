const Navbar = () => (
  <header className="pl-4 pr-4 flex space-x-10 p-2 font-sans bg-sky-200">
    <h1 className="text-3xl font-bold">KUWS</h1>
    <nav className="flex w-full items-center">
      <ul className="flex w-full list-none space-x-4">
        <li>Home</li>
        <li>Shop</li>
      </ul>
      <div>Cart</div>
    </nav>
  </header>
);

export default Navbar;
