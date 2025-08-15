const number = [45,65,37,23,46,];
// for(let i =0; i <number.length;i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
//  console.log(number);
}
const products = [
    {id: 1, name:'xiami phone one night',price:19000},
    {id: 2, name:'iphone',price:19000},
    {id: 3, name:'mac book air',price:190000},
    {id: 4, name:'lenovo youg laptop 2025',price:19000},
    {id: 5, name:'dell inspiron leptop',price:19000},
    {id: 6, name:'samsung phone note 17',price:19000},
    {id: 7, name:'nokia old age phone',price:19000},
    {id: 8, name:'phone one',price:19000},
];

// for(const product of products){
//     console.log(product);
// }
function matcedProducts (products,search){
    const matched = [];
for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product)
    }

}
return matched;
}
const result = matcedProducts(products,'laptop');
console.log(result)


// vary hard java scrip topick