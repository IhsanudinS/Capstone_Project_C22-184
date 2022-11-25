const inklusif = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1>Pendidikan Inklusif</h1>
                <article id="list-item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const detailContainer = document.querySelector('#list-item');

        detailContainer.innerHTML = `
        <p>
        Menurut Buku Saku Penyelenggaraan Pendidikan Inklusif di Sekolah Dasar (2021) yang dikeluarkan Kemendikbud, pendidikan inklusif adalah sistem pendidikan yang memberikan kesempatan bagi siswa berkebutuhan khusus untuk mengikuti pembelajaran di lingkungan pendidikan yang sama dengan siswa pada umumnya.
        </p>
        <p>Meskipun memiliki perbedaan, siswa berkebutuhan khusus nggak mendapatkan perlakuan istimewa dari guru. Mereka mempunyai hak dan kewajiban yang sama dengan siswa lainnya di kelas. Namun, dalam prosesnya, mereka akan diawasi oleh pendamping khusus.<br>

        Dengan kata lain, pendidikan inklusif melatih keberagaman dan sikap toleransi antarsiswa. Mereka harus saling menghargai di tengah perbedaan yang ada.<br>
        
        Melalui sistem pendidikan ini, setiap siswa bisa mendapatkan layanan pendidikan yang sesuai dengan kebutuhan khususnya. Sehingga, terbuka akses pendidikan yang bermutu seluas-luasnya bagi mereka, tanpa adanya diskriminasi.<a href="https://www.zenius.net/blog/pendidikan-inklusif" target="_blank" rel="noreferrer noopener">[zenius]</a></p> <br>
        <br>
        <div class="chart-container">
        <iframe id="iframe-chart" class="responsive-iframe" src="https://databoks.katadata.co.id/datapublishembed/113111/pada-2018-hanya-548-penyandang-disabilitas-yang-masih-sekolah"></iframe>
        <p class="chart-img" style="text-align:center;"><a href="https://cdn1.katadata.co.id/media/chart_thumbnail/113111-pada-2018-hanya-548-penyandang-disabilitas-yang-masih-sekolah.png?v=1669073089" class="fancybox"><img class="embed-chart" src="https://cdn1.katadata.co.id/media/chart_thumbnail/113111-pada-2018-hanya-548-penyandang-disabilitas-yang-masih-sekolah.png?v=1669073089" alt="Grafik: " ></a><br/><small></small></p>
        </div>
        <p>
        Saat ini di indonesia ketimpangan partisipasi sekolah antara penyandang disabilitas dan yang bukan disabilitas masih terjadi. Berdasarkan Statistik Pendidikan 2018, persentase penduduk usia 5 tahun ke atas penyandang disabilitas yang masih sekolah hanya 5,48%. Persentase tersebut jauh dari penduduk yang bukan penyandang disabilitas, yaitu mencapai 25,83%.
        <br>
        <br>
        Penyandang disabilitas yang belum atau tidak pernah bersekolah sama sekali mencapai 23,91%. Adapun penduduk usia 5 tahun ke atas yang bukan disabilitas dan belum sekolah hanya 6,17%. Sementara itu, penyandang disabilitas yang tidak bersekolah lagi sebesar 70,62%.
        <br>
        <br>
        Semakin tinggi kelompok umur, semakin rendah pula angka partisipasi sekolah (APS). APS tertinggi terjadi pada kelompok umur 7-12 tahun, yaitu sebesar 91,12% untuk penyandang disabilitas dan 99,29% untuk bukan penyandang disabilitas. Sementara itu, APS terendah terjadi pada kelompok umur 19-24 tahun, yaitu 12,96% untuk penyandang disabilitas dan 24,53% untuk penyandang bukan disabilitas.<a href="https://databoks.katadata.co.id/datapublish/2019/08/29/pada-2018-hanya-548-penyandang-disabilitas-yang-masih-sekolah" target="_blank" rel="noreferrer noopener">[katadata]</a>
        </p>
        `;
    }


}

export default inklusif;