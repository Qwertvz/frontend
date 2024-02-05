import React from "react"
import { GridGeneral } from "./InterfaceGridGeneral"

export const GridContainer: React.FC<GridGeneral> = ({ children }) => {
    return <section className="GridV1Container">{ children }</section>
}