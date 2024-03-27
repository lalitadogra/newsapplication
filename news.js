let key = "fb4364da62124c0f85552a25e7adedc0";
let newsgallery = document.getElementById("newsgallery")


const printData = (data) => {
    newsgallery.innerHTML = ""
    data.forEach((elm) => newsgallery.innerHTML += `
        <div class="news-card">
            <img src="${elm.urlToImage}">
            <h2>${elm.title}</h2>
            <p>${elm.description}</p>
        </div>
    `);
}

const onLoad = async (inpt) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${inpt}&apiKey=${key}`, {
          mode: "cors",
        domains: 'https://lalita-news.netlify.app/',
         headers: {
          "Content-Type": "application/json",
             
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let jsondata = await res.json();

    if(jsondata.status === "ok"){
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
