import axios from 'axios';
import api from './api';
let apiObj = {}
function geneRealApi(api) {
    return function () {
        let method = api.split(' ')[0];
        let apiUrl = api.split(' ')[1];
        let url = `http://localhost:3333${apiUrl}`;
        let parma = {

        }
        return (
            axios[method](url, parma)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        )
    }
}
for (let key in api) {
    apiObj[key] = geneRealApi(api[key])
}
export default apiObj