import { useState } from "react";
import Button from "../component/Button"

const CounterSection = () => {
  const [grpCtr, setGrpCtr] = useState(0)
  
  function grpHandlerCtr() {
    setGrpCtr(grpCtr => grpCtr + 1);
  }

  return (
    <section>
      <h1>Independent Counter</h1>
      <Button />
      <Button />

      <h1>Dependent Counter</h1>
      <Button grpCtr={grpCtr} grpHandler={grpHandlerCtr} />
      <Button grpCtr={grpCtr} grpHandler={grpHandlerCtr} />
    </section>
  )
}

export default CounterSection