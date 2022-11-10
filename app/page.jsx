'use client'
import Script from "next/script"
import "../styles/style.css"

import { CVBody } from "./components/Navigation"
export default function HomePage() {

    return (
        <>
            <Script src="./js/jquery.js" async />
            <Script src="./js/plugins.js" async />

            <div className="waves"></div>

            <CVBody />
        </>


    )
}
