export default function TabButton({children}){
    const handleClick=()=>{
        console.log("hello")
    }
    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

