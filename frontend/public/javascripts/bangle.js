document.addEventListener('DOMContentLoaded', () => {
    loadFunction();
})

// url = /api/category/get/bangles

function loadFunction(){
    const url = '/api/category/get/bangles';

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


        const source = document.getElementById('jewelry-template').innerHTML;        
        const template = Handlebars.compile(source);
        const banglesData = template(data);
        document.getElementById('bangles-content').innerHTML = banglesData;

    }

}

// function loadFunction() {
//     const url = '/api/category/get/bangles';

//     axios.get(url)
//         .then((response) => {
//             console.log("response got here:", response.data);
            
//             let data = response.data;

//             if (Array.isArray(data)) {
//                 data = data.map(item => ({
//                     ...item,
//                     formattedPrice: item.price?.toLocaleString("en-IN", {
//                         style: "currency",
//                         currency: "INR"
//                     })
//                 }));
//             } else {
//                 data.formattedPrice = data.price?.toLocaleString("en-IN", {
//                     style: "currency",
//                     currency: "INR"
//                 });
//             }

//             renderData(data);
//         })
//         .catch((error) => {
//             console.log("Error fetching data:", error);
//         });

//     function renderData(data) {
//         const source = document.getElementById('jewelry-template').innerHTML;
//         const template = Handlebars.compile(source);
//         const banglesData = template(data); 
//         document.getElementById('bangles-content').innerHTML = banglesData;
//     }
// }
