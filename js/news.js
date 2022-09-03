const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category);
}


const displayNews = news => {
    const catagoriesContainer = document.getElementById('catagories');
    catagoriesContainer.innerHTML = '';

    news.forEach(data => {
        console.log(data.category_id);
        // const emon = data.category_id;

        const catagoriesDiv = document.createElement('div');
        catagoriesDiv.classList.add('col')
        catagoriesDiv.innerHTML = `
        <p class="btn btn-light"  onclick="myFunction(${data.category_id})">${data.category_name}</p>
        `;
        catagoriesContainer.appendChild(catagoriesDiv);

        console.log(data.category_id);
    })

}

// const akashvai = (id) => console.log(id);






loadNews();




