import SearchBar from "./SearchBar";

export default function Navbar({ searchTerm, onSearchChange }) {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="QuickCart home">
          <span className="brand__mark" aria-hidden="true">Q</span>
          QuickCart
        </a>

        <div className="navbar__links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
        </div>

        
      </nav>
    </header>
  );
}
