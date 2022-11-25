const volunteer = {
    async render() {
        return `
        <div class="pages">
            <div class="image">
                <img src="images/teacher.jpg">
            </div>
            <div class="main-info">
                <h1>Be a Teacher</h1>
                <article id="list-item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const beasiswaContainer = document.querySelector('#list-item');

        beasiswaContainer.innerHTML = `
        <p>
        Ada banyak cara untuk terlibat dengan Gerakan Indonesia Mengajar. 
        Mari gabung dalam berbagai macam aktivitas kerelawanan, 
        setiap waktu luang yang kamu berikan untuk ikut berkerja bersama 
        Indonesia Mengajar akan sangat berarti bagi masa depan pendidikan anak-anak di Indonesia.
        </p>
        `;
    }


}

export default volunteer;