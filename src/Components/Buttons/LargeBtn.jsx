
import "./LargeBtn.css"
function LargeBtn(prop){
    return(
        <button className="large-Btn" onClick={prop.func}>{prop.name}</button>
    )
}

export default LargeBtn