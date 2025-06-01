const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏡 Property Listings</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Rooms</li>
          <li>Mansions</li>
          <li>Countryside</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
