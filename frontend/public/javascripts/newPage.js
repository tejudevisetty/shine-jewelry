// navitaging to page according to category

   function navigateTo(pageType){
 
    if(pageType === 'bangles'){
        window.location.href= '/jewelry/bangles';
    }
    else if(pageType === 'chains'){
        window.location.href = '/jewelry/chains';
    }
    else if(pageType === 'rings'){
        window.location.href = '/jewelry/rings';
    }
    else if(pageType === 'earrings'){
        window.location.href = '/jewelry/earrings';
    }
    else{
        console.log("error occured");
    }

    }  

    function navigateToViewPage(id){


        window.location.href= `/get/details/${id}`;
        
    }
    
    
       
    
    
    
    