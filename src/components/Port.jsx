import styles from '../styles/Port.module.css'
export default function Port(props) {
    const selected = props.selected ? styles.selected: ''
    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.port}>
                    <div className={styles.number}>3</div>
                    <div className={styles.doorHandle}></div>

                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
