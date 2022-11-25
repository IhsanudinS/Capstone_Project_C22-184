class HeroBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="info">
                <h1>Pendidikan Inklusif</h1>
                <p>
                Adalah sistem penyelenggaraan pendidikan yang memberikan 
                kesempatan kepada semua peserta didik yang memiliki kelainan dan memiliki potensi 
                kecerdasan dan atau bakat istimewa untuk mengikuti pendidikan atau pembelajaran dalam 
                satu lingkungan pendidikan secara bersama-sama dengan peserta didik pada umumnya.
                </p>
                <br>
                <a href="#/inklusif" class="button">Explore</a>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-bar', HeroBar);