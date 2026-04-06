customElements.define(
  "site-header",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="header no-print">
            <div class="header-inner">
                <a href="/" class="header-left">Dylan Clark</a>

                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                <label for="nav-toggle" class="nav-burger">&#9776;</label>

                <nav class="header-right">
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="log.html">Log</a>
                    <a href="resume.html">Resume</a>
                </nav>
            </div>
        </header>
    `;
    }
  },
);
