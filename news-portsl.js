const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data))
};
const showCategories=data=>{
     const categoriesContainer=document.getElementById('categories-container');
     data.news_category.forEach(singleCategory=>{
        console.log(singleCategory);
     });
}