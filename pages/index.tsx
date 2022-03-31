import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="font-Poppins bg-gradient-to-br from-sky-500 to-blue-900 h-screen">
      <Head>
        <title>Nft Drop React.js Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1 className="font-bold text-transparent text-center text-3xl bg-clip-text bg-gradient-to-r from-[#f53844] to-[#42378f] font-Poppins">Welcome to the Parsa Nft Market Place!</h1>

    <div className="p-10 cursor-pointer" onClick={() => router.push("nft/papafam-apes")}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://links.papareact.com/8sg" alt="" />
      <div className="px-6 py-4 bg-gradient-to-br from-cyan-800 to-rose-500 rounded-lg">
        <div className="font-bold text-xl text-white mb-2">Papafam Apes</div>
      </div>
    </div>
   </div>
  </div>
  )
}

export default Home
