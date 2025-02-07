"use client"
import Link from "next/link"
import { signIn, useSession, signOut } from 'next-auth/react'
import Image from "next/image";

function Navbar() {

  const { data: session } = useSession();
  console.log(session?.user)
  return (

    <nav className=" bg-slate-950 flex justify-between px-24 text-white items-center py-5">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          OVER-SIST
        </h1>
      </Link>

      {session?.user ? (
        <div className=" flex gap-10 items-center ">

          <p className="text-green-500">{session.user.name} </p>

      

          <button 
          className="bg-sky-400 px-3 py-2 rounded-md hover:bg-sky-500"
          onClick={async () => {
            await signOut()
            callbackUrl: "/"
          }}
          >Logout</button>
        </div>
      ) : (
        <button onClick={() => {
          signIn()
        }} className=" bg-sky-400 px-3 py-2 rounded-md">
          Sign In
        </button>
      )}
    </nav>
  )
}



export default Navbar
