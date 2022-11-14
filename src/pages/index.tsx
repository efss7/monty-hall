import { useState } from "react";
import Port from "../components/Port";
import { createPorts, updatePort } from "../functions/PortFunctions";

export default function Home() {
  const [ports, setPorts] = useState(createPorts(3, 2))


  function renderPorts() {
    return ports.map(port => {
      return <Port key={port.number} value={port}
        onChange={newPort => {
          setPorts(updatePort(ports, newPort))
        }} />
    })
  }

  return (
    <div style={{ display: "flex" }}>
      {renderPorts()}
    </div>
  )
}
