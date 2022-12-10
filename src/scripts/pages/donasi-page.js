const donasi = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1>Info Donasi</h1>
                <article id="list-item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const detailContainer = document.querySelector('#list-item');

        detailContainer.innerHTML = `
            <embed type="text/html" src="https://donasi.dompetdhuafa.org/?donasi_1=Infak%20%2F%20Sedekah&donasi_2=Program%20Sosial&donasi_3=Hadiah%20untuk%20teman%20disabilitas"  width="100%" height="500">
        
        `;
    }


}

export default donasi;