
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import api from '../../services/api';
import './styles.css'


interface ICard{
    id: string,
    name: string,
    image: string,
    species: string,   
    episode: string[],
    url: string,

    location: {
        url:string;
        name:string;
    },
    origin: {
        url:string;
        name:string;
    },
}


export function Detail (){
        const [card,setCard] = useState<ICard | null>(null);
        const { id } = useParams();

useEffect(()=>{
       async function load(){
            const response = await api.get(`/character/${id}/`);   
            setCard(response.data);
        }

        load()
},[])


    return (
        <>
            {card ?(
                <>
                    <div className="container-img">
                       <p>{card.name}</p>
                       <img src={card.image} alt={card.name} />
                        <div className="box">
                            <p># {card.id}</p>
                            <span>{card.species}</span> 
                        </div>     
                    </div>
                     <div className="table">
                           
                            <span>{card.origin.name}</span>
                            <span>{card.origin.url}</span>                      
                            <span>{card.location.name}</span>
                            <span>{card.location.url}</span>                       
                            <span>{card.episode.map(it =>it + '\n')}</span>
                            <span>{card.url}</span>
                            

                  </div>
                   </>    
                 
                ) : (
                    <Loading/>
                  )}
                <Link to="/"><button type='button' className='back'>Voltar</button></Link>
            </>
    )
}