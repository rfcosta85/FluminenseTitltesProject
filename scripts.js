const brasileiro = document.querySelectorAll('.br-smooth');

brasileiro.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclickBrasileiro);

})

function scrollToIdOnclickBrasileiro(events)
{

    events.preventDefault();
    const elements = events.target;    
    const to = document.querySelector("#brasileiro").offsetTop;   
    
    window.scroll({

        top: to,

        behavior: "smooth",

    });

}


const copaDoBrasil = document.querySelectorAll('.cb-smooth');

copaDoBrasil.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclickCopaDoBrasil);

})

function scrollToIdOnclickCopaDoBrasil(events)
{

    events.preventDefault();
    const elements = events.target;    
    const to = document.querySelector("#cb07").offsetTop;   
    
    window.scroll({

        top: to,

        behavior: "smooth",

    });

}

const outros = document.querySelectorAll('.outros-smooth');

outros.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclick);

})

function scrollToIdOnclick(events)
{

    events.preventDefault();
    const elements = events.target;    
    const to = document.querySelector("#outros").offsetTop;   
    
    window.scroll({

        top: to,

        behavior: "smooth",

    });

}

