// import models from "./images/images/model-s.jpg"

function Section(props) {
    
    return (
        <section style={{ backgroundImage: "url(" +props.backgroundimg+ ")" }}>
            <div className="box">
                <div className="models">
                <h1>
                    {props.model}
                </h1>
                <p>
                    Order online for touch less delivery

                </p>
                </div>
            </div>
            <div className="buttons">
                <div className="lbtn"> <button>{props.lbtn}</button></div>
                
                
                    
               {    (props.rbtn)? <div className="rbtn"> <button>{props.rbtn}</button></div>:""}
                
                {/* // <div className="rbtn"> <button>{props.rbtn}</button></div> */}

            </div>


        </section>
    )

}
export default Section