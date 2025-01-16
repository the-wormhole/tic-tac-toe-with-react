import './Button.css'

export default function Button({textValue,customClass,...props}){

    return(
        <>
            <button className={customClass} {...props} >{textValue}</button>
        </>
    )
}