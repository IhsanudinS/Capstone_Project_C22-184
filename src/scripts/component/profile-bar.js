class profileBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="foto">
                <div class="description">
                    <img src="images/photo.png" alt="ihsanudin">
                    <h3>Yazid Aqsa Raisnaldi</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        program Pengembang Front-End Web dan Back-End
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo.png" alt="ihsanudin">
                    <h3>Afdol Fahmul Rozi Siregar</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        program Pengembang Front-End Web dan Back-End
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo.png" alt="ihsanudin">
                    <h3>Muhammad Ihsanudin Syaifullah</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        program Pengembang Front-End Web dan Back-End
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo.png" alt="ihsanudin">
                    <h3>Akmad Faiz Fildan Nugroho</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        program Pengembang Front-End Web dan Back-End
                    </p>
                </div>        
        </header>
        `;
    }
}

customElements.define('profile-bar', profileBar);