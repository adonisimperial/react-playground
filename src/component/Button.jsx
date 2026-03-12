import { useState } from "react"

const Button = ({grpCtr, grpHandler}) => {
  const [ctr, setCtr] = useState(0)

  function handleCtr() {
    setCtr(ctr => ctr + 1);
  }

  return (
    // avoid unnecessary inline functions when a direct function reference works;
    // inline functions are recreated on every render
    // <button onClick={grpHandler ? grpHandler : ()=>handleCtr()}>Counter: {grpCtr ? grpCtr :ctr}</button>
    <button onClick={grpHandler ? grpHandler : handleCtr}>Counter: {grpCtr ? grpCtr :ctr}</button>
  )
}

export default Button