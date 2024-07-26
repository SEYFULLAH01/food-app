import React from 'react'

function CategoryMenu() {
    return (
        <div className='mx-6'>
            <h3 className='text-lg font-semibold py-4'>En müthiş yemeği keşfet!</h3>
            <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden '>
                <button className='px-3 py-2 bg-gray-200 text-center font-bold rounded-lg hover:bg-green-500 hover:text-white'> Hepsi</button>
                <button className='px-3 py-2 bg-gray-200 text-center font-bold rounded-lg hover:bg-green-500 hover:text-white'> Kahvaltı</button>
                <button className='px-3 py-2 bg-gray-200 text-center font-bold rounded-lg hover:bg-green-500 hover:text-white'> Öğle Yemeği</button>
                <button className='px-3 py-2 bg-gray-200 text-center font-bold rounded-lg hover:bg-green-500 hover:text-white'> Akşam Yemeği</button>  <button className='px-3 py-2 bg-gray-200 text-center font-bold rounded-lg hover:bg-green-500 hover:text-white'> Atıştırmalıklar</button>

            </div>
        </div >
    )
}

export default CategoryMenu
