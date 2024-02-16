"use client"

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

function PokeSingle() {

    // เรียกใช้ useSearchParams Hooks
    const pokeNameParams = useSearchParams()
    // รับค่าจาก params (pokename) ที่ส่งมาจาก form 
    const pokeName = pokeNameParams.get('pokename')

    console.log(pokeName);

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Data from pokesingle", pokeData);

    const fetchPokeData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
            const data = await response.json();
            setPokeData(data);
            setLoading(false);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPokeData();
    }, [])

  return (
    <div className='p-24'>
    <Link href="/" className='bg-blue-500 text-white p-3 rounded-md'>Go Back</Link>
      <div className='flex justify-center text-center'>
        <div className='shadow-md p-10 rounded-lg'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Suspense>
                    <h3 className='text-3xl'>{pokeData.name}</h3>
                        <Image src={pokeData.sprites?.other.home.front_default} width={300} height={300} alt={pokeData.name} />
                            <div className='mt-5'>
                            <p className='my-3'>Weight: {pokeData.weight}</p>
                            <p className='my-3'>
                            Abilities: {" "}
                            {pokeData.abilities?.map(val => (
                                <span key={val.ability.name} className='bg-gray-500 text-white px-3 py-1 rounded-md'>{val.ability.name}</span>
                            ))}
                            </p>
                            <p className='my-3'>
                            Types: {" "}
                            {pokeData.types?.map(val => (
                                <span key={val.type.name} className='bg-gray-500 text-white px-3 py-1 rounded-md'>{val.type.name}</span>
                            ))}
                        </p>
                    </div>
                </Suspense>
            )}
        </div>
      </div>
    </div>
  )
}

export default PokeSingle
