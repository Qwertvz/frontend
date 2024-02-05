import { GridGeneral } from "./InterfaceGridGeneral"

export const GridV1Sidebar: React.FC<GridGeneral> = ({ children }) => {
    return <section className="GridV1Sidebar bg-gray-700 rounded p-2">
        <section className="border-b mb-4">
            <h1 className="text-gray-300 font-bold text-3xl w-fit m-auto mb-3">List of services</h1>
        </section>

        {children}
    </section>
}