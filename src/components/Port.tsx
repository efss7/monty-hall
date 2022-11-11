import styles from '../styles/Port.module.css'
import PortModel from '../model/Port'

interface PortProps{
    port: PortModel;
}

export default function Port(props:PortProps) {
    const {port} = props
    const selected = port.selected ? styles.selected: ''
    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.port}>
                    <div className={styles.number}>{port.number}</div>
                    <div className={styles.doorHandle}></div>

                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
