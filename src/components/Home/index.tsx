
import { useEffect, useState } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from "react-router-dom";


export function Home(){

    interface IInfo{
        count:number,   
        pages:number,
        next: string,
        prev: null | number

    }
    interface IResults{         
        id:number,
        name:string,
        status:string
        species: string,
        type: string,
        gender:string,
        image:string
    }


const [list,setList] = useState<IResults[]>([])
const [total,setTotal] = useState(0)
const [limit,setCountLimit] = useState(8)
const [pages,setPages] = useState<number[]>([])
const [currentPage, setCurrentPage] = useState(1);
const [isLoading,setIsLoading] = useState(true);

useEffect(()=>{
    async function load(){
         
        const response = await api.get(`character/?page=${currentPage}`)
        
        const totalPages = Math.ceil(total / limit);

         const arrayPages = [];
         for (let i = 1; i <= totalPages; i++) {
            arrayPages.push(i);
          }  
         
          const totalPagesList = response.data.info.pages
          setTotal(totalPagesList)
          setPages(arrayPages)         
          setList(response.data.results)
          setIsLoading(false)
    }
    load()
       
},[currentPage, total,limit])

function handleNext(){
setCurrentPage(currentPage + 1);
}
function handlePrev(){
    setCurrentPage(currentPage - 1) 
}
function handleCurrentPage(page:number){
    setCurrentPage(page)
}

    if(isLoading){
        return <h2>Carregando ...</h2>
    }

return(
    <div className="container">        
            <div className="content">

                {list.map(item =>(
               <Link to={`detail/${item.id}`} key={item.id} > 
                    <div className="container-img" >
                        <p>{item.name}</p>
                        <img src={item.image} alt={item.name} />
                        <div className="box">
                            <p># {item.id}</p>
                            <span>{item.species}</span>
                        </div>
                    </div>
                    </Link>

                 ))}

   
            </div>
            <div className="container-buttons">
      {currentPage > 1 && (  
                <button type='button' onClick={handlePrev}  >
                    Anterior
                 </button>
         )} 
         
            {pages.map(page =>(
                <button type='button' key={page} onClick={() => handleCurrentPage(page)} className={page === currentPage ? 'active' : ''} >
                    {page}
                </button>
            ))}  
        
           {currentPage < pages.length && (  
                 <button type='button'  onClick={handleNext} >
                    Próximo
                 </button>
                  )}  
            </div>
    </div>
)

}