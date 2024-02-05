// import Link from "next/link"

export type TContentData = { id: number, name: string, link: string }
export interface IContent { id: number }

export const GridV1Content: React.FC<{ ContentData: IContent[] }> = ({ ContentData }) => {
    return <section className="GridV1Content bg-gray-700 overflow-y-scroll rounded p-2">
        <table className="w-full select-none">
            <thead>
                <tr>
                    <th className="text-gray-300 text-center p-1">Number</th>
                    <th className="text-gray-300 text-center p-1">Key</th>
                    <th className="text-gray-300 text-center p-1">Account</th>
                    <th className="text-gray-300 text-center p-1">Called contract</th>
                    <th className="text-gray-300 text-center p-1">Data</th>
                </tr>
            </thead>

            <tbody>
                {ContentData.map(item => (
                    <tr key={ item.id } className="hover:bg-zinc-500 transition-colors cursor-pointer">
                        <td className="text-gray-300 text-center p-1">{item.id}</td>
                        <td className="text-gray-300 text-center p-1">0x124e...89ff</td>
                        <td className="text-gray-300 text-center p-1">0x124e...89ff</td>
                        <td className="text-gray-300 text-center p-1">0x124e...89ff</td>
                        <td className="text-gray-300 text-center p-1">0x124e...89ff</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
}



// 192.168.0.1
// 128 64 32 16 8 4 2 1

// 11000000 10101000 00000000 00000001
// 11111111 11111111 11111100 00000000

// 11000000 10101000 00000001 00000001
// 11111111 11111111 1 1 1 1 1 1   00 00000000
// 255.255.252.00