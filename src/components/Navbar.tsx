import React from 'react'
import { ConnectKitButton } from 'connectkit'

export default function Navbar() {
  return (
    <div className='flex justify-between p-4 items-center'>
      <h1>StoreIt</h1>
      <ConnectKitButton />
    </div>
  )
}
