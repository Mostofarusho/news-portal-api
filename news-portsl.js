const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data))
};
const showCategories = data => {
    const categoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory => {
        // console.log(singleCategory);
        // categoriesContainer.innerHTML+=`<a class="nav-link" href="#">${singleCategory.category_name}</a>`

        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="nav-link" href="#"  onclick="fetchCategoryNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer);
    });


}
const fetchCategoryNews = (category_id, category_name) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllNews(data.data, category_name))
}
const showAllNews = (data, category_name) => {
    console.log(data, category_name);
    document.getElementById('news-count').innerText=data.length;
    document.getElementById('category-name').innerText=category_name;
}