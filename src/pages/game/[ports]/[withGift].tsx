import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Port from "../../../components/Port"
import { createPorts, updatePort } from "../../../functions/PortFunctions"
import styles from '../../../styles/Game.module.css'

export default function game() {
    const router = useRouter()
    const [ports, setPorts] = useState([])

    useEffect(()=>{
        const ports = +router.query.ports
        const withGift = +router.query.withGift
        setPorts(createPorts(ports, withGift))
    },[router?.query])

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
