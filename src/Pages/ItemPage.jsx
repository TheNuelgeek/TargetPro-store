import NavBar from "../Components/NavBar/NavBar";
import redTshirt from "../Components/Grids/Asset/wears/golf-red-tee.jpg"
import LargeBtn from "../Components/Buttons/LargeBtn";
import "./ItemPage.css"
import CheckoutCard from "../Components/Checkout-Card/CheckoutCard";
import { selectedItem } from "../Components/Checkout-Card/utils/slectedItems";
import { items } from "../Components/Checkout-Card/utils/item";
import { useParams, Link } from "react-router-dom";


function ItemPage(){
    const {id} = useParams()

    selectedItem.map(item => {
        console.log("value", item)

    })


    return(
        <div className="item-page">
            <NavBar />
            {/* <Link to={`item-page/${items}`}></Link> */}
            <div className="item-page-item">
                <img src={redTshirt} alt="" />
                <div className="item-info">
                    <div className="rating">
                        <p>Men's Original, {id}</p>
                        <p><span>★★★☆</span>   3039</p>
                    </div>
                    <h1>Red Golf Tee</h1>
                    <h2>$30</h2>
                    <div>
                        <h4>Sizes</h4>
                        <ul className="item-sizes">
                            <li>XL</li>
                            <li>L</li>
                            <li>XXL</li>
                            <li>S</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>Experience the perfect fusion of fashion and performance with our Red Golf T-Shirt. Crafted from breathable fabric, it ensures optimal comfort throughout your golfing sessions. The bold red color exudes passion and vitality, setting you apart from the crowd. The tailored fit and minimalist design add a touch of sophistication to your outfit, making it a versatile choice for both casual rounds and competitive tournaments. Step onto the green with style and confidence in our Red Golf T-Shirt, and redefine your golfing aesthetic today.</p>
                    </div>
                    <div className="item-btns">

                    <LargeBtn name = 'Add to Bag' />
                    <CheckoutCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;