const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchmorebtn = document.getElementById("show-more-btn");
const accessKey = "P7c8JopZsw6a8nvUEdh8WpX3KR4qjRtcJQ4EgVn6Mi4";
let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if(page==1)
    {
        searchResult.innerHTML= " ";
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small; // Corrected property name
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    })
    searchmorebtn.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
searchmorebtn.addEventListener("click",()=>{
page++;
searchImages();
})