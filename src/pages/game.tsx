import { useState } from "react"
import Port from "../components/Port"
import { createPorts, updatePort } from "../functions/PortFunctions"
import styles from '../styles/Game.module.css'
import Link from "next/link"

export default function game() {
    const [ports, setPorts] = useState(createPorts(20, 2))


    function renderPorts() {
        return ports.map(port => {
            return <Port key={port.number} value={port}
                onChange={newPort => {
                    setPorts(updatePort(ports, newPort))
                }} />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.ports} >
                {renderPorts()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button> Restart</button>
                </Link>
            </div>
        </div>
    )
}
