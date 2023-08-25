const categoriesElement = document.querySelector('ul#categories');
const categoryElements = categoriesElement.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryElements.length}`);

const categoryCallback = categoryElement => {
    const categoryName = categoryElement.querySelector('h2').innerText;
    const elementsCount = categoryElement.querySelectorAll('li').length;
     
    console.log('');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
};
 
categoryElements.forEach(categoryCallback);
