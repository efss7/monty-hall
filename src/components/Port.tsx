import PortModel from '../model/PortModel';
import styles from '../styles/Port.module.css';
import Gift from './Gift'

interface PortProps {
    value: PortModel;
    onChange: (newPort: PortModel) => void
}

export default function Port(props: PortProps) {
    const port = props.value
    const selected = port.selected && !port.opened ? styles.selected : ''
    const toggleSelection = e => props.onChange(port.alternateSelection())
    const open = e => {
        e.stopPropagation()
        props.onChange(port.open())
    }

    function renderPort() {
        return (
            <div className={styles.port}>
                <div className={styles.number}>{port.number}</div>
                <div className={styles.doorHandle} onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {port.closed ? 
                renderPort() :
                port.haveAGift ? <Gift></Gift> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
