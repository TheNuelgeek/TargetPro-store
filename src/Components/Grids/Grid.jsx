import "./Grid.css"

function Grid(){

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
            <figure>
            <div class="one"></div>
            <figcaption>
                <h2>Abstract 1</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure>
            <div class="two"></div>
            <figcaption>
                <h2>Abstract 2</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure>
            <div class="three"></div>
            <figcaption>
                <h2>Abstract 3</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure>
            <div class="four"></div>
            <figcaption>
                <h2>Abstract 4</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
        
            {/* <!-- Row 2: 2 boxes, each spanning 2 columns --> */}
            <figure class="span2">
            <div class="three"></div>
        
            <figcaption>
                <h2>Abstract 3</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure class="span2">
            <div class="one"></div>
            <figcaption>
                <h2>Abstract 1</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
        
            {/* <!-- Row 3: One box spans 3 columns, one box spans 1 column --> */}
            <figure class="span3">
            <div class="four"></div>
            <figcaption>
                <h2>Abstract 4</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure class="span1-lg">
            <div class="two"></div>
            <figcaption>
                <h2>Abstract 2</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
        
            {/* <!-- Row 4: One box spans 4 columns --> */}
            <figure class="span4">
            <div class="three"></div>
            <figcaption>
                <h2>Abstract 3</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
        
            {/* <!-- Row 5: 3 boxes, 1-2-1 distribution --> */}
            <figure class="span2-md order2">
            <div class="four"></div>
            <figcaption>
                <h2>Abstract 4</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure class="span4-md order1">
            <div class="two"></div>
            <figcaption>
                <h2>Abstract 2</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            <figure class="span2-md order2">
            <div class="one"></div>
            <figcaption>
                <h2>Abstract 1</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
            </figure>
            </div>
        </section>
    )
}

export default Grid;