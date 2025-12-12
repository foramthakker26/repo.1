function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <h3 className="navbar-brand fw-bold">Recipe Finder</h3>

      <div className="d-flex gap-3">
        <button className="btn btn-light" onClick={() => setPage("home")}>Home</button>
        <button className="btn btn-light" onClick={() => setPage("about")}>About</button>
        <button className="btn btn-light" onClick={() => setPage("project")}>Project</button>
      </div>
    </nav>
  );
}

export default Navbar;
