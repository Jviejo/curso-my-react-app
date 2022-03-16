const { ethereum } = window;
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';


export default function Balance() {
  const [cuenta, setCuenta] = useState(null)
  const [balance, setBalance] = useState(null)
  useEffect(() => {
    ethereum && ethereum.request({ method: 'eth_requestAccounts' }).then(i => {
      setCuenta(i[0])
      ethereum.on('accountsChanged', (i) => {
        setCuenta(i[0])
      })
    });
  }, [])

  useEffect(() => {
    if (cuenta) {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      provider.getBalance(cuenta).then(i => {
        console.log(i)
        console.log(ethers.utils.formatEther(i))
        setBalance(ethers.utils.formatEther(i))
      })
      console.log('aa')

    }
  }, [cuenta])

  return (
    <div>
      <h5>{cuenta}<br></br> Balance: {balance}</h5>
    </div>
  )
}
