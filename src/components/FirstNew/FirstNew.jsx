import React from 'react'
import msi from '../../assets/msi.webp'

export const FirstNew = () => {
  return (
    <div className='w-2/3 bg-slate-900 mb-4 rounded-md '>
        <img src={msi} alt="" className='rounded-t-md' />

        <p className='text-red-500'>17/04/2024</p>
        <h2 className='text-white text-sm'>Oferta: esta laptop para gaming de MSI con GeForce RTX 4060 tiene un precio muy atractivo</h2>
        <p className='text-slate-300 text-xs pb-2'>Amazon tiene a la venta una laptop para gaming MSI Cyborg, un equipo de entrada para el gaming en PC que cuenta con el poder suficiente para jugar algunos títulos recientes y en definitiva la mayoría de los que ya tiene algunos años en el mercado. Esta laptop tiene un procesador Intel Core i7-12650H de doceava generación, una GPU NVIDIA GeForce RTX 4060, una SSD de 512 GB, y RAM de 8GB DDR5,</p>
    </div>
  )
}
