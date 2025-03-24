fetch('https://fakestoreapi.com/products')
.then((res) => res.json())

// .then((res) => {return res.json()})  another way of writing line 2

.then((data) => {
    console.table(data);
    for(const product of data) {
        // create then product div
        const div = document.createElement('div');
        div.classList.add('flex', 'flex-col', 'items-center');
        // create h1 and append to product div
        const h1 = document.createElement('h1');
        h1.innerText = product.title;
        h1.classList.add('text-2xl', 'font-bold');
        div.appendChild(h1);
        // create img and append to product div
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.setAttribute('alt', product.title);
        img.classList.add('h-[250px]');
        div.appendChild(img);
        // append the product div to the DOM
        const parent = document.getElementById('products');
        parent.appendChild(div);
    }

})

const handleResponse = (res) => {
    return res.json();
}

// write a function that takes fullname and then return the fullname with the surname all in CAPs. 
// where fullname follows the format <firstname others surname>
function transformFullName (fullName){
    return `${fullName}`;

    // split fullName based on space
    const nameParts = fullName.split('');
    // determine the lastindex
    const lastIndex = nameParts.length - 1;
    // replace the lastIndex element with the UPPERCASE of itself
    nameParts[lastIndex] = nameParts[lastIndex].toUpperCase();
    // join the array with space and return
    return nameParts.join('');

}

const myName = transformFullName('Dzidzo Mpya');
console.log (myNameName);
