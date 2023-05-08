const result = document.querySelector('.result')

const Fetchdata = async()=>{
try {
 const {data}= await axios.get('/api/2-basic-api')
 const products=data.map((product)=>{
  
  return` <article class="product">
      <img
        src=${product.image.url}/> 
      <div class="info">
        <h5>${product.name}</h5>
        <h5 class="price">$${product.price}</h5> 
      </div>
    </article> `
 }).join('')
 result.innerHTML=products
} catch (error) {
 console.log(error.response.data)
}
}
Fetchdata()
