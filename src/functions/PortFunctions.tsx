import PortModel from "../model/PortModel";

export function createPorts(
    qty: number,
    selected: number
): PortModel[] {
    return Array.from({ length: qty }, (_, i) => {
        const number = i + 1
        const haveAGift = number === selected
        return new PortModel(number, haveAGift)
    })
}