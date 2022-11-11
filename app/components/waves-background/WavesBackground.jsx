'use client'
import Script from "next/script";
import "../../../styles/style.css";
export default function WavesBackground() {
    return (
        <>
            <Script src="./js/jquery.js" async />
            <Script src="./js/plugins.js" async />
            <div className="waves"></div>
        </>
    )
}