import styles from '../styles/Port.module.css'
import PortModel from '../model/Port'

interface PortProps{
    value: PortModel;
}

export default function Port(props:PortProps) {
    const port = props.value
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
