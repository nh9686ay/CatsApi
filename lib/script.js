let randomButton = document.querySelector('.randomButton')
let searchButton = document.querySelector('.searchButton');

function getRandon (event) {    
    event.preventDefault()
    let url =`https://api.thecatapi.com/v1/images/search`;
    fetch(url, {
        headers: {
          'x-api-key': 'a06882fc-876b-4052-b065-518dc1bb3840'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(res => {
        let img = document.querySelector('.categoryCatImage')
        img.setAttribute('src', res[0].url)        
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });
}
// NOTE : search by its specific ID, name


function getByIdName (event) {    
    event.preventDefault()

    let textInput = document.querySelector('#test').value.toLowerCase();
    let a = typeof textInput 
    let url;
    if(a === 'string' ){
        url =`https://api.thecatapi.com/v1/images/search?category_names=${textInput}`
    }else{
        url =`https://api.thecatapi.com/v1/images/search?category_ids=${textInput}`
    }

    fetch(url,{
        headers: {
            'x-api-key': 'a06882fc-876b-4052-b065-518dc1bb3840'
        }
    })
    .then(res => {
        return res.json();
    })
    .then(res => { 
        let catImage = document.querySelector('.catImage')
        catImage.setAttribute('src', res[0].url)
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });
}

randomButton.addEventListener('click',getRandon)
searchButton.addEventListener('click',getByIdName)