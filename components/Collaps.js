import React, { useState, useRef } from "react"

const Collaps = ({title, text}) => {
    const [open, setOpen] = useState(false);
    const sizeRef = useRef(null);
    const leftSvg = (classes) => <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    
    return (
        <>
        <p className="cursor-pointer text-2xl font-bold text-white py-3 flex items-center" onClick={()=>(setOpen(!open))}>
            <span className="flex-1">{title}</span>
            {leftSvg(`fill-white h-5 mr-1 duration-300 ${open?"rotate-[270deg]":"rotate-180"}`)}
        </p>
            <div className={`duration-300 overflow-hidden`} style={{height:sizeRef?.current&&open?`${sizeRef.current.scrollHeight}px`:'0px'}} ref={sizeRef}>
                <p className="pt-2 pb-5 text-md text-white">
                {
                    text
                }
                </p>
            </div>
        </>
    )
}
export default Collaps
