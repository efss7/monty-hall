import styles from '../styles/Port.module.css'
export default function Port(props) {

    return (
        <div className={styles.area}>
            <div className={styles.frame}>
                <div className={styles.port}>
                    <div className={styles.number}>3</div>
                </div>
            </div>
        </div>
    )
}