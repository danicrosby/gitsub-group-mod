import PrintToDom from './PrintToDom';

const PrintNavBar = () => {
  const NavBar = `
        <section id="nav-container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="index.html">Overview</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link" href="repo.html">Repositories</a></li>
                <li class="nav-item"><a class="nav-link" href="projects.html">Projects </a></li>
                <li class="nav-item"><a class="nav-link" href="packages.html">Packages</a></li>
              </ul>
            </div>
          </nav>
        </section>`;

  PrintToDom('#nav-card-container', NavBar);
};

export default PrintNavBar;
