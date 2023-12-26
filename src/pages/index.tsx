import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { useContractWrite, useAccount } from 'wagmi'
import storeItAbi from '../utils/abi/storeItAbi.json'

export default function Home() {
  const [number, setNewNumber] = useState('')
  const { isConnected } = useAccount()

  const { isLoading, isSuccess, write } = useContractWrite({
    address: '0x0526427bbcb2b3fa04d2d11cd2ee23c72ffd64a8',
    abi: storeItAbi,
    functionName: 'store',
  })

  //  handles change of input values
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    let sanitizedValue = value.replace(/[^0-9.]+/g, '') // Remove non-numeric characters except decimal point
    const decimalCount = (sanitizedValue.match(/\./g) || []).length // Count the decimal points

    /* Limit to one decimal point
     */
    if (decimalCount > 1) {
      const parts = sanitizedValue.split('.')
      sanitizedValue = parts[0] + '.' + parts.slice(1).join('')
    }

    setNewNumber(sanitizedValue)
    console.log(number)
  }

  // handles useContractWrite 'write'
  const handlefunctionWrite = () => {
    write({
      args: [number],
    })
  }

  return (
    <div className='h-full border-t text-center grid text-black bg-[#DAF079]  p-6 w-full'>
      <div className='w-full py-2 flex flex-col gap-4'>
        <div className='grid gap-3 min-w-[350px] mx-auto border-2 border-black p-3 shadow-[-7px_7px] shadow-black bg-[#EDE1D7] rounded-lg'>
          <div className='grid gap-4 pb-4'>
            <p className='text-start'>
              function <span className='text-red-700 font-bold'>store</span>(uint256 num)
            </p>
            <input
              type='text'
              placeholder='Enter a number'
              value={number}
              onChange={handleInputChange}
              className='border-2 border-black h-12 px-2 rounded-xl text-2xl'
            />
            <button
              className='w-32 p-3 shadow-[-4px_4px] hover:shadow-[-0px_0px] mx-auto flex items-center justify-center h-10 bg-white border-2 border-black hover:bg-[#EDE1D7]/90 duration-200 rounded-xl'
              onClick={handlefunctionWrite}
            >
              {isLoading ? 'Storing..' : 'Store It'}
            </button>
          </div>
        </div>
        {isSuccess ? (
          <p>
            Number Updated - Check{' '}
            <Link href='https://sepolia.etherscan.io/address/0x0526427bbcb2b3fa04d2d11cd2ee23c72ffd64a8#readContract' target='_blank' rel='noopener noreferrer'>
              <span className='font-bold underline hover:text-red-700 duration-200'>Etherscan</span>
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  )
}
