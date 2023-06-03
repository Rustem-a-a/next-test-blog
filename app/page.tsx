import Image from 'next/image'
import Posts from "@/components/Posts";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className=" px-6 mx-auto">
      <p className= "mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋 &nbsp;
        <span className= "whitespace-nowrap">I`m <span className= "font-bold">Rustem Abdulaev</span>
        </span>
      </p>
        <Posts/>
    </main>
  )
}
