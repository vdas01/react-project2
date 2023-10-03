import React , {useEffect, useState} from 'react'
import Product from './Product';
import "./App.css"

export default function App() {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async ()=>{
    const res =  await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setproducts(data.products);
  }



  useEffect(() => {
      fetchData();
  }, []);
  
  return (
    <>
    <div className="results">
    {   
      products.slice((page-1)*10,((page-1)*10)+10).map((prod)=>{
        return (
          <Product prod={prod} key={prod.id}/>
          )
        })
      }
    </div>
      
   <div className="pagination">
    <span className={page > 1 ? 'pre' : "pagination_disable"} onClick={()=>setPage(page-1)}>◀</span>
    { 
     
       [...Array(products.length/10)].map((_,ind)=>{
        return (
          <>
              <span id="curr_page" className={page === ind+1 ? "page_selected":""} key={ind} 
              onClick={() => setPage(ind + 1)}>{ind+1}</span>
          </>
        )
     })  
    }
     
    <span className={page < products.length/10 ? 'nex' : "pagination_disable"}  onClick={()=>setPage(page+1)}>▶</span>
   </div>
      
    </>
  )
}