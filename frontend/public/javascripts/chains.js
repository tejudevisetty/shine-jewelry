document.addEventListener('DOMContentLoaded', () => {
    loadFunction();
})

// url = /api/category/get/chains

function loadFunction(){
    const url = '/api/category/get/chains';
    axios.get(url).then((response) => {
        console.log("response got here:");
        console.log(response.data);
        const getChainsData = response.data;
        renderData(getChainsData);

    })
    .catch((error) => {
        console.log(error);
    })

    function renderData(getChainsData){


        const source = document.getElementById('chains-jewelry-template').innerHTML;        
        const template = Handlebars.compile(source);
        const chainsData = template(getChainsData);
        document.getElementById('chains-content').innerHTML = chainsData;

    }

}