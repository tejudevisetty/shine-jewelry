document.addEventListener('DOMContentLoaded', () => {
    loadFunction();
})

// url = /api/category/get/bangles

function loadFunction(){
    const url = '/api/category/get/earrings';
    axios.get(url).then((response) => {
        console.log("response got here:");
        console.log(response.data); 
        const data = response.data;
        renderData(data);

    })
    .catch((error) => {
        console.log(error);
    })

    function renderData(data){


        const source = document.getElementById('earrings-jewelry-template').innerHTML;        
        const template = Handlebars.compile(source);
        const earringsData = template(data);
        document.getElementById('earrings-content').innerHTML = earringsData;

    }

}