var btnSearch = document.getElementById('search');
var key = '21c33810'
console.log('coucou');
btnSearch.addEventListener('click', function () {

    let search = '';
    let xhr = new XMLHttpRequest();

    let valtitle = document.getElementById('title').value;
    let valyears = document.getElementById('years').value;
    let valType = document.getElementById('type').value;

    if (valtitle.length !== 0 && valtitle !== null) {
        search += '&s=' + valtitle
    }

    if (valyears.length !== 0) {
        search += '&y=' + valyears
    }

    if (valType !== '#') {
        search += '&type=' + valType
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            filmResponse = JSON.parse(xhr.response).Search;

            filmResponse.forEach(film => {
                cardFilm(film);
            })

        }
    }

    xhr.open('GET', 'http://www.omdbapi.com/?apikey=' + key + search, true);
    xhr.send();
})

function additionner(){
    
}

function soustraire(){
    
}

function multiplier(){
    
}
function cardFilm(film){
    var 
    `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
}

