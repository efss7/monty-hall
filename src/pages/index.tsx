import { useState } from "react";
import Port from "../components/Port";
import PortModel from "../model/Port";

export default function Home() {
  const [p1, setP1] = useState(new PortModel(1));

  return (
    <div style={{ display: "flex" }}>
      <Port value={p1} />
    </div>
  )
}
