function Navbar({ setActivePage }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Recipe Finder</span>
      <div>
        <button className="btn btn-light me-2" onClick={() => setActivePage("home")}>
          Home
        </button>
        <button className="btn btn-light me-2" onClick={() => setActivePage("about")}>
          About
        </button>
        <button className="btn btn-light me-2" onClick={() => setActivePage("project")}>
          Project
        </button>
        <button className="btn btn-warning" onClick={() => setActivePage("product")}>
          Product
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
