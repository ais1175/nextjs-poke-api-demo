"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

function Header() {

  // เรียกใช้ router
  const router = useRouter();

  // สร้าง state สำหรับเก็บชื่อ pokemon จาก input
  const [pokeName, setPokeName] = useState("");

  // รับค่าจาก Input
  const handleInput = (e) => {
    setPokeName(e.target.value);
  }

  // Function สำหรับจัดการกับ Form 
  // หลังจาก Submit ให้ส่งค่า pokename ไปหน้า /pokesingle
  const handleForm = async (e) => {
    e.preventDefault();
    router.push(`/pokesearch?pokename=${pokeName}`);
  }

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-5xl">NextJS Pokemon Finder App</h1>
          <p className="text-white text-2xl">
            Find your favourite Pokemon 
          </p>
          <form onSubmit={handleForm} className="flex mt-2">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md"
              placeholder="Pokemon Name..."
              onChange={handleInput}
            />
            <button
              className="inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </header>

    </>
  );
}

export default Header;
