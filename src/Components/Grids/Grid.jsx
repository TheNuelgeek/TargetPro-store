import "./Grid.css"
import { items } from "../Checkout-Card/utils/item";
import { selectedItem } from "../Checkout-Card/utils/slectedItems";
import { useParams, Link } from "react-router-dom";

function Grid(){
    const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
    
    const handleCardClick = (item, index) => {
        // Do something with the clicked card, such as navigation or updating state
        selectedItem.push({
            item: item,
            index: index
        })
        console.log(`Clicked on card: ${JSON.stringify(item)}`);
    };
    

    return(
        <section className="grid-section">
            <div className="grid-header">

            <h1>NEW COLLECTION</h1>
            <div className="grid-btn">
                <button className="grid-btn1"></button>
                <button className="grid-btn2"></button>
            </div>
            </div>
            <div class="wrapper">
            {/* <!-- Row 1: One box per column --> */}
            {
                items.map((item, index) => {
                    return(
                        <figure onClick={() => handleCardClick(item, index)}>
                            <Link to={`item-page/${index}`}>
                                <img src={item.image} alt="" class="one"/>
                                <figcaption key={index}>
                                    <h2>{item.name}</h2>
                                    <div className="fig-footer">
                                    <h4>{getFormattedPrice(item.price)}</h4>
                                    <p>(Men Original)</p>
                                    </div>
                                </figcaption>
                            </Link>
                        </figure>
                    )
                })
            }
            
            {/* comment */}

            </div>
        </section>
    )
}

export default Grid;

