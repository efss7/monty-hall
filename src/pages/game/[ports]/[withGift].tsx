import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Port from "../../../components/Port"
import { createPorts, updatePort } from "../../../functions/PortFunctions"
import styles from '../../../styles/Game.module.css'

export default function game() {
    const router = useRouter()
    const [valid, setValid] = useState(false)
    const [ports, setPorts] = useState([])


    useEffect(()=>{
        const ports = +router.query.ports
        const withGift = +router.query.withGift
        const qtyPortsValid = ports >= 3 && ports <= 100
        const withGiftValid = withGift >= 1 && withGift <= ports
        setValid(qtyPortsValid && withGiftValid)
        setPorts(createPorts(ports, withGift))
    },[ports])

    useEffect(() => {
        const ports = +router.query.ports
        const withGift = +router.query.withGift
        setPorts(createPorts(ports, withGift))
    }, [router?.query])

    function renderPorts() {
        return valid && ports.map(port => {
            return <Port key={port.number} value={port}
                onChange={newPort => {
                    setPorts(updatePort(ports, newPort))
                }} />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.ports} >
                { valid ?
                 renderPorts()
                : <h1> Valores inválidos </h1>}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button> Restart</button>
                </Link>
            </div>
        </div>
    )
}
