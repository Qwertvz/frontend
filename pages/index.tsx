import React, { useState } from "react"

import { GridV1Header, THeaderData} from "./components/GridV1/header"
import { GridV1Sidebar } from "./components/GridV1/sidebar"
import { GridV1Content } from "./components/GridV1/content"
import { GridV1Footer } from "./components/GridV1/footer"
import { GridContainer } from "./components/GridV1"

export default function HomePage() {
    const HeaderData: THeaderData[] = [
        { id: 1, link: "/", name: "Status" },
        { id: 2, link: "/services", name: "Services" },
        { id: 3, link: "/toolchain", name: "Toolchain" },
        { id: 4, link: "/testmenu", name: "HorizontalMenu" },
    ]

    const ContentData = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
        { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
        { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },
        { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 },
        { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 },
        { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 }
    ]

    return <main className="max-h-screen p-1">
        <GridContainer>
            <GridV1Header HeaderData={ HeaderData } />
            <GridV1Sidebar>
                <button className="text-zinc-700 bg-zinc-200 hover:bg-zinc-700 hover:text-zinc-200 transition-colors rounded select-none font-bold w-full text-xl py-1 mb-2">GethNode</button>

                <button className="text-zinc-700 bg-zinc-200 hover:bg-zinc-700 hover:text-zinc-200 transition-colors rounded select-none font-bold w-full text-xl py-1 mb-2">Hardhatenv</button>

                <button className="text-zinc-700 bg-zinc-200 hover:bg-zinc-700 hover:text-zinc-200 transition-colors rounded select-none font-bold w-full text-xl py-1 mb-2">Checkerall</button>

                <button className="text-zinc-700 bg-zinc-200 hover:bg-zinc-700 hover:text-zinc-200 transition-colors rounded select-none font-bold w-full text-xl py-1 mb-2">Api</button>
            </GridV1Sidebar>

            <GridV1Content ContentData={ ContentData } />
            <GridV1Footer> </GridV1Footer>
        </GridContainer>
    </main>
}
