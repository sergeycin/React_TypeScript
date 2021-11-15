import React from 'react'
import { useNavigate } from 'react-router-dom'
export const AboutPage: React.FC = () =>{
    const history = useNavigate();
    
    return(
        <>
        <h1>Страница информации</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate eius, possimus inventore laborum repellendus magni molestias iure reprehenderit alias?</p>
        <button className="btn" onClick={() => history('/')}>Обратно к списку дел</button>
        </>
    )
}