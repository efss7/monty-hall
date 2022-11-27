import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import styles from "../styles/Form.module.css";

export default function Form() {
    const [qtyPorts, setQtyPorts] = useState(3)
    const [withGift, setWithGift] = useState(1)
    return (
        <div className={styles.form}>
            <div>
                <Card bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                    <NumberInput text="Quantidade de Portas?"
                        value={qtyPorts}
                        onChange={newQty => setQtyPorts(newQty)}
                    />
                </Card>
            </div>
            <div>
                <Card>
                    <NumberInput text="Porta com Presente?"
                        value={withGift}
                        onChange={newWithGift => setWithGift(newWithGift)}
                    />
                </Card>

                <Card bgcolor="#28a085" >
                    <Link href={`/game/${qtyPorts}/${withGift}`} >
                        <h2 className={styles.link}>Iniciar Jogo</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
