
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css'


interface ICard{
    id: string,
    name: string,
    image: string,
    species: string,
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
                    <div className="container-img">
                       <p>{card.name}</p>
                       <img src={card.image} alt={card.name} />
                        <div className="box">
                            <p># {card.id}</p>
                            <span>{card.species}</span> 
                        </div>     
                </div>
                ) : (
                    <p>Carregando...</p>
                  )}
                <Link    to="/"><button type='button'>Voltar</button></Link>
                </>
    )
}