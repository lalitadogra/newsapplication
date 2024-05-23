let key = "d079c18ca14bca2db5403997036a1a1f";
let newsgallery = document.getElementById("newsgallery")
apikey = 'API_KEY';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

const printData = (data) => {
    newsgallery.innerHTML = ""
    data.forEach((elm) => newsgallery.innerHTML += `
        <div class="news-card">
            <img src="${elm.image}">
            <h2>${elm.title}</h2>
            <p>${elm.description}</p>
        </div>
    `);
}

const onLoad = async (inpt) => {
    let res = await fetch(`https://gnews.io/api/v4/search?q=${inpt}&lang=en&max=10&apikey=${key}`);
    let jsondata = await res.json();

    console.log(jsondata);
    if(jsondata){
            let articles = jsondata.articles
        console.log(articles)
    
        if(articles.length != 0 ){
            printData(articles)
        }else{
            newsgallery.innerHTML = ""
    
            newsgallery.innerHTML =  "<h1>Something went wrong</h1>"
        }
    }else{
         newsgallery.innerHTML = ""
         newsgallery.innerHTML =  `<h1>${jsondata.message}</h1>`
    }
    

}

onLoad("india")

document.addEventListener("DOMContentLoaded", function () {
    var searchForm = document.querySelector('.searchbx');
    var searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var searchTerm = searchInput.value;

        onLoad(searchTerm)

    });
});