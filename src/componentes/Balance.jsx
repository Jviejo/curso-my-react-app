const { ethereum } = window;
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ethers, utils } from 'ethers';


export default function Balance() {
  const [cuenta, setCuenta] = useState(null)
  const [balance, setBalance] = useState(null)
  const [formulario, setFormulario] = useState({
    cuenta: "0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4",
    importe: "0.0001"
  })
  const [txOk, setTxOk] = useState(false)
  const [txRechazo, setTxRechazo] = useState(false)
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
        console.log(ethers.utils.formatEther(i))
        setBalance(ethers.utils.formatEther(i))
      })
    }
  }, [cuenta]);


  function handleOnChange(event) {
    console.log(event.target.name, formulario)
    setTxOk(false)
    setTxRechazo(false)
    setFormulario({ ...formulario, [event.target.name]: event.target.value })
  }
  async function sendTx(event) {

    event.preventDefault();

    const transactionParameters = {
      // nonce: '0x00', // ignored by MetaMask
      // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
      // gas: '0x2710', // customizable by user during MetaMask confirmation.
      to: formulario.cuenta, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: ethers.utils.parseEther(formulario.importe).toHexString()
    };
    console.log(transactionParameters)
    try {
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      console.log(transactionParameters)
      console.log(txHash)
      setTxOk(txHash)

    } catch (error) {
      setTxRechazo(error)
    }
   
  }

  if (!ethereum)
    return <div>No esta conectado</div>

  return (
    <>
      <div>
        <div className="mb-5">{cuenta}<br></br> Balance: {balance}</div>
        <h4>Realizar un envio</h4>
        <form className="form-inline" onSubmit={(event) => sendTx(event)}>
          <div className="form-group mb-3">
            <label htmlFor="cuenta">Address</label>
            <input type="text" className="form-control" onChange={handleOnChange} id="cuenta" name="cuenta" placeholder="Destino" value={formulario.cuenta} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="importe">Importe</label>
            <input type="text" className="form-control" onChange={handleOnChange} id="importe" name="importe" placeholder="importe" value={formulario.importe} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          {txOk && <div className="mt-3 alert alert-info">Transaccion realizada {txOk}</div>}
          {txRechazo && <div className="mt-3 alert alert-danger">Transaccion rechazada</div>}
        </form>
      </div>
    </>
  )
}
