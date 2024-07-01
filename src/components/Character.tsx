import React from 'react'


const Character = ({ character }) => {
    return (
        <div className='w-56'>
            <div className='h-64 relative'>
                <img className='w-full h-full' src={character.image.src} alt="" />
                <div className='absolute top-4 bg-amber-400 style-category px-5'>
                    <p className='text-2xl font-bold text-amber-200'>{character.category}</p>
                </div>
                <div className='absolute bottom-0 right-6'>
                    <p className='text-2xl font-bold text-amber-200'>{character.name}</p>
                </div>
            </div>
            <div className='h-3 bg-orange-400'>

            </div>
            <div className='bg-amber-400'>
                <div className='text-center pb-4'>
                    <p className='text-sm font-semibold text-white'>{character.altura}</p>
                    <p className='text-sm font-semibold text-white'>{character.peso}</p>
                    <p className='text-sm font-semibold text-white'>{character.fuerza}</p>
                </div>
            </div>

        </div>
    )
}

export default Character