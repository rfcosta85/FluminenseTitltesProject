function scrollToOnClick(event)
{

    event.preventDefault();
    
    const to = getScrollTopByHref(event.target); 
    
    ScrollToPosition(to);

}

function ScrollToPosition(to)
{

    window.scroll({

        top: to,
        behavior: "smooth",

    });

}

const button_profile = document.querySelectorAll('nav a');

button_profile.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclick);

})

function getScrollTopByHref(element)
{

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;

}

function scrollToIdOnclick(events)
{

    events.preventDefault();
    const elements = events.target;    
    const to = document.querySelector("#cb07").offsetTop;   
    
    window.scroll({

        top: to,

        behavior: "smooth",

    });

}

