import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NftDropPage() {
  
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // --

  // console.log(address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 font-Poppins bg-gradient-to-br from-sky-400 to-blue-900">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
           <img
            className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            src="https://links.papareact.com/8sg"
            alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl text-white">
              Papafam Apes
            </h1>
            <h2 className="text-xl text-gray-300">
              A collection of Papafam Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              Papafam
            </span>{' '}
            Nft Market Place
          </h1>

          <button
           onClick={() => (address ? disconnect() : connectWithMetamask())}
           className="rounded-full bg-gradient-to-br from-cyan-800 to-rose-600 hover:shadow-md duration-200 text-xs font-bold text-white px-4 py-2 lg:px-5 lg:py-3 lg:text-base"
          >
           {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border border-sky-400"/>
        {address && (
        <p
          className="text-center text-sm text-green-300"
        >
          You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>)}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />

          <h1 className="text-2xl font-bold lg:text-4xl lg:font-extrabold">The Papafam Ape Coding Club | Nft Drop</h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 Nft's claimed</p>
        </div>

        {/* Mint Button */}
        <button className="h-16 w-full bg-gradient-to-br from-sky-400 to-blue-600 text-white font-bold rounded-full mt-10 hover:shadow-xl duration-200 hover:opacity-90">Mint Nft (0.01 ETH)</button>
      </div>
    </div>
  )
}

export default NftDropPage