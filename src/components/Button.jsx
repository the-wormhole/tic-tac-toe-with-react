import './Button.css'
import handleClick from "../handlers/handleClick"

export default function Button({textValue,customClass,...props}){

    return(
        <>
            <button className={customClass} {...props} >{textValue}</button>
        </>
    )
}