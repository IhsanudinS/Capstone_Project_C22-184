class DataSource {
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }

    static async getAllSchool() {
        await fetch('https://datasekolahapi.herokuapp.com/api/data/sd/jakarta/cilandak')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

}

export default DataSource;