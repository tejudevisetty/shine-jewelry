
document.addEventListener('DOMContentLoaded', () => {
    loadFunction();
})

// url = /api/category/get/bangles

function loadFunction(){
    const url = '/api/category/get/rings';
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


        const source = document.getElementById('rings-jewelry-template').innerHTML;        
        const template = Handlebars.compile(source);
        const ringsData = template(data);
        document.getElementById('rings-content').innerHTML = ringsData;

    }

}