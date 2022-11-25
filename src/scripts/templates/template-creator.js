const createSchoolDetailTemplate = (school) => `
    <div class="info-container">
        <div class="school__info">
            <h2 class="school__title" tabindex="0">${school.nama}</h2>
            <br>
            <h3 tabindex="0">Information :</h3>
            <h4 tabindex="0">Alamat</h4>
            <p tabindex="0">${school.alamat},${school.kecamatan}</p>
            <h4 tabindex="0">Kabupaten</h4>
            <p tabindex="0">${school.kabupaten}</p>
            <h4 tabindex="0">Jenjang</h4>
            <p tabindex="0">${school.jenjang}</p>
        </div>
    </div>
`;

export { createSchoolDetailTemplate };