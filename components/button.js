import React, { useEffect, useCallback, useState, useMemo } from "react"
import Upload from './upload'
import useConstructor from './hooks/constructor'
// import Modal from './ModalSolution/index'

let isHide=false;

export default function button(){
    const [count, setCount] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const onClick = useCallback(
        ()=>{
            //@ts-ignore
            isHide=true;
            console.log("render");
            setCount(count+1);
        }, [count]
    );
    /////////////////////////////////////////////////////////////////////////////
    //way1
    useEffect(()=>{
        //didMount and didUpdate
        if (isHide===true) {
            //just didUpdate
        console.log("didUpdate");
    }
});
//way2
useEffect(()=>
    console.log("lang nghe su thay doi cua count")
    ,[count]);
/////////////////////////////////////////////////////////////////////
    //just didMount: way1
    useEffect(()=>
        console.log("didmount")
    ,[]);
    //way2
    /*useEffect(()=>{
        if (isHide===false) {
            console.log("Component button will didMount");
        }
    });*/
    ////////////////////////////////////////////////////////////////////
    useMemo(()=>
        console.log("useMemo-constructor")
        , []
    );
    useConstructor(()=>{
        console.log("customer new constructor")
    })
    /////////////////////////////////////////////////////////////////
    return (
        <>
        <button onClick={onClick}>count</button>
        <b>{count}</b>
        <hr style={{
            border: "2px solid gray",
        }}/>
        <Upload/>
        {/* <Modal
            isVisible= {openModal}
        >hello world</Modal> */}
        <button onClick={()=>setOpenModal(true)}>openModal</button>
        </>
    )
}
