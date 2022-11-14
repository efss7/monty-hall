import { useState } from "react";
import Port from "../components/Port";
import { createPorts } from "../functions/PortFunctions";
import PortModel from "../model/PortModel";

export default function Home() {
  const [p1, setP1] = useState(new PortModel(1));
  const [p2, setP2] = useState(new PortModel(2));
  const [p3, setP3] = useState(new PortModel(3));


  console.log(createPorts(3, 2))

  return (
    <div style={{ display: "flex" }}>
      <Port value={p1} onChange={newPort => setP1(newPort)} />
      <Port value={p2} onChange={newPort => setP2(newPort)} />
      <Port value={p3} onChange={newPort => setP3(newPort)} />

    </div>
  )
}
