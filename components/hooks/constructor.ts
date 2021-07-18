import { useRef } from "react";

type ConstructorCallback = () => void;

function useConstructor(callback: ConstructorCallback):void {
    const isRun= useRef(true);
    if(isRun.current = true){
        callback();
        isRun.current=false;
    }
}
export default useConstructor;