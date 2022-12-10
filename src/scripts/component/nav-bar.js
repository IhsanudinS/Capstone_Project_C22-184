class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="header-area">
            <a href="/"><img src="images/logo.png" class="logo" alt="gambar_logo"></a>
            <input type="checkbox" id="toggler">
            <label for="toggler">☰</label>
            <nav class="menu" id="drawer">
                <ul class="links">
                    <li><a href="/">Home</a></li>
                    <li class="dropdown">
                        Services ⏷
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#">Information</a></li>
                    <li>Join Us</li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('nav-bar', NavBar);