import React, { ReactNode } from 'react';
import './Card.css'

interface CardProps{
    children: ReactNode;

}

export default function Card(props: CardProps){

    return(
        <div className='cardContainer'>
            {props.children}
        </div>
    );
}