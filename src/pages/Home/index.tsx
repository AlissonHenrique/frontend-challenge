
import { useEffect, useState } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from "react-router-dom";
 
import { Loading } from '../../components/Loading';
import { Paginate } from '../../components/Paginate';
import Select from 'react-select'

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
interface IOption{
    name:string,
    value:string
}

const [list,setList] = useState<IResults[]>([])
const [total,setTotal] = useState(0)
const [limit,setCountLimit] = useState(8)
const [pages,setPages] = useState<number[]>([])
const [currentPage, setCurrentPage] = useState(1);
const [isLoading,setIsLoading] = useState(true);

const [listName,setListName] = useState<string>('')
const [optionsName,setOptionsName] = useState<string[]>([])


useEffect(()=>{
    async function load(){
         
        const response = await api.get(`character/?page=${currentPage}&name=${listName}`)
        
        const totalPages = Math.ceil(total / limit);

         const arrayPages = [];
         for (let i = 1; i <= totalPages; i++) {
            arrayPages.push(i);
          }  
         
          const totalPagesList = response.data.info.pages

          const nameMap = await response.data.results.map( (res:IOption) => ({ label: res.name, value: res.name }))

           if(listName.length <= 0){
                setOptionsName(nameMap)
            }
           

          setTotal(totalPagesList)
          setPages(arrayPages)         
          setList(response.data.results)
          setIsLoading(false)
    }
    load()
       
},[currentPage, total,limit, listName])

function handleNext(){
setCurrentPage(currentPage + 1);
}
function handlePrev(){
    setCurrentPage(currentPage - 1) 
}
function handleCurrentPage(page:number){
    setCurrentPage(page)
}

function handeleOptions(opt:any){
        setListName(opt.value)

}
function handleBack(){
    setListName('')
}

    if(isLoading){
        return <Loading/>
    }

return(
    <div className="container">
         <Select 
                options={optionsName}
                onChange={(opt) => handeleOptions(opt)}
                />
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
            
                <Paginate 
                    currentPage={currentPage}                    
                    pages={pages} 
                    handlePrev={handlePrev}                     
                    handleNext={handleNext}
                    handleCurrentPage={handleCurrentPage}                    
                    />
            {listName.length >= 0 ?(
                 <button onClick={handleBack}>Voltar</button>
                 ):''}
    </div>
)

}