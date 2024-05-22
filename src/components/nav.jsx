export function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#"><strong>Start Bootstrap</strong></a>
        <button 
        className="navbar-toggler ml-auto white"
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#"><strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#"><strong>About</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#"><strong>Services</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#"><strong>Contact</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}