import React from 'react'
import esfera1 from '../assets/esfera1.png'
import esfera2 from '../assets/esfera2.png'
import esfera3 from '../assets/esfera3.png'
import esfera4 from '../assets/esfera4.png'
import esfera5 from '../assets/esfera5.png'
import esfera6 from '../assets/esfera6.png'
import esfera7 from '../assets/esfera7.png'
import nube from '../assets/nube.webp'
import { BsLink } from "react-icons/bs";



const Character = ({ character }) => {
    return (
        <div className='w-60 transition-all relative duration-300 hover:brightness-50 hover:cursor-pointer'>
            <div className='h-64 relative'>
                <img className='w-full h-full' src={character.image.src} alt="" />
                <div className='absolute top-4 fondo-category style-category px-5'>
                    <p className='text-3xl text-[#FFFF09] font-saiyan sombra'>{character.category}</p>
                </div>
                <div className='absolute bottom-1 right-6'>
                    <p className='text-4xl text-[#FFFF09] font-saiyan sombra'>{character.name}</p>
                </div>
            </div>
            <div className='relative'>
                <div className='h-2.5 fondo-category w-full shadow-lg flex gap-2 justify-end items-center px-2'>
                    <BsLink  
                        size={16}
                        color='#66310e'
                    />
                     <BsLink  
                        size={16}
                        color='#66310e'
                    />
                     <BsLink  
                        size={16}
                        color='#66310e'
                    />
                     <BsLink  
                        size={16}
                        color='#66310e'
                    />
                     <BsLink  
                        size={16}
                        color='#66310e'
                    />
                </div>
                <div className='h-4 bg-[#BC5F1F] style-esferas flex items-center pl-5 pr-2 absolute -top-1 shadow-lg z-20'>
                    <img className='h-3' src={esfera1.src} alt="" />
                    <img className='h-3' src={esfera2.src} alt="" />
                    <img className='h-3' src={esfera3.src} alt="" />
                    <img className='h-3' src={esfera4.src} alt="" />
                    <img className='h-3' src={esfera5.src} alt="" />
                    <img className='h-3' src={esfera6.src} alt="" />
                    <img className='h-3' src={esfera7.src} alt="" />
                </div>

            </div>
            <div className='fondo-description relative overflow-hidden px-4'>
                <div className='text-center pb-4 pt-2 z-30 relative'>
                    <div className='text-sm font-semibold text-white sombra flex gap-2 justify-between'>
                        <p>Altura (mts):</p>
                        <p>{character.altura}</p>
                    </div>
                    <div className='text-sm font-semibold text-white sombra flex gap-2 justify-between'>
                        <p>Peso (kg):</p>
                        <p>{character.peso}</p>
                    </div>
                    <div className='text-sm font-semibold text-white sombra flex gap-2 justify-between'>
                        <p>Fuerza:</p>
                        <p>{character.fuerza}</p>
                    </div>
                    <div className='text-sm font-semibold text-white sombra flex gap-2 justify-between'>
                        <p>Peleas Ganadas:</p>
                        <p>{character.peleas}</p>
                    </div>
                  
                </div>
                <div className='absolute top-0 right-0  w-60 left-[130px]'>
                    <img src={nube.src} alt="" />
                </div>
            </div>

            <div className='flex items-center justify-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <button className='bg-amber-500 rounded-lg py-1 px-3 text-white'>Editar</button>
                <button className='bg-red-500 rounded-lg py-1 px-3 text-white'>Eliminar</button>
            </div>

        </div>
    )
}

export default Character