import { GridGeneral } from "./InterfaceGridGeneral"

export const GridV1Footer: React.FC<GridGeneral> = ({ children }) => {
    return <section className="GridV1Footer bg-gray-700 rounded p-2">{ children }</section>
}