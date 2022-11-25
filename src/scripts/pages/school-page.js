import DataSource from "../data/data-source";
import { createSchoolDetailTemplate } from "../templates/template-creator";
const school = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1>Sekolah</h1>
                <article id="list-item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const schoolList = await DataSource.getAllSchool();
        const detailContainer = document.querySelector('#list-item');

        schoolList.forEach((school) => {
            detailContainer.innerHTML += createSchoolDetailTemplate(school);
        });

    },
}

export default school;