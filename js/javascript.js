// go to top of the page button

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// end of the page in console

window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
        console.log("You are at the end of the page.")
    }
}

// back to previous page button

const prevPage = () => history.go(-1);