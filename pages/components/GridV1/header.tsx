import Link from "next/link"

export type THeaderData = { id: number, name: string, link: string }
export interface IHeader {
    id: number
    link: string
    name: string
}

export const GridV1Header: React.FC<{HeaderData: IHeader[]}> = ({HeaderData}) => {
    return <section className="GridV1Header bg-gray-700 transition-colors rounded p-2">
        <ul className="flex justify-around">
            {HeaderData.map(item => (
                <li key={item.id}><Link className="text-gray-300 transition-colors hover:text-gray-500 cursor-pointer font-bold text-xl" href={item.link}>{item.name}</Link></li>
            ))}
        </ul>
    </section>
}