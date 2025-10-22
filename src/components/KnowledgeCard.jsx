import React from 'react'
import { assets } from '../assets/assets'
import { MoveLeft } from 'lucide-react'

const KnowledgeCard = ({fact}) => {
  return (
    <div className='flex flex-col justify-center items-center py-7 px-12 md:px-20 gap-7 rounded-3xl shadow-lg'>
        
        <div className=' relative h-20 w-20 rounded-full bg-white shadow-2xl items-center'>
            <img className='absolute w-10 h-10 left-1/4 top-1/4' src={assets.adobe} alt="" />
        </div>
        <h4 className='text-lg font-bold text-center'>{fact.title}</h4>
        <p>{fact.text}</p>
        <button className='mx-auto font-bold text-blue-700 flex justify-center items-center gap-3'>Know More <MoveLeft size={18}/></button>
    </div>
  )
}

export default KnowledgeCard