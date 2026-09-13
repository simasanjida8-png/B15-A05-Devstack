import "./banner.css"
import heroImage from "../../assets/banner-stack.png";
export default function Banner(){
return(
    <section className="banner">
        <div className="banner-content">
            <div className="banner-text" >
                <h1>
                    Build Your Ideal
                    <span>Development Stack</span>
                </h1>
                <p>Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.</p>
               
            <div className="banner-buttons">
                <button className="primary-btn">Explore Technologies</button>
                <button className="secondary-btn">Learn More</button>

            </div>

            </div>
            <div className="banner-image">
                <img src={heroImage} alt="Development stack" />

            </div>

        </div>

    </section>
)
}
