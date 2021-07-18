import React, { useCallback, useRef} from "react"
import Style from './layout.module.css'

export default function upload(){
    const refInputFile = useRef(null);

    const upload = useCallback(
        ()=>{
            const input =document.querySelector('input[type="file"') as HTMLInputElement;
            // refInputFile.current.click();
            input.click();
            console.log(refInputFile.current);
        },[refInputFile]
    )
    return(
        <>
        <input className={Style.hidden} ref={refInputFile} type="file"/>
        say som thing: <input type="text" />
        <button className={Style.button} onClick={upload}>upload</button>
        
        </>
    )
}