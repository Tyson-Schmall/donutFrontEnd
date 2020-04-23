import React from "react";

const Donut = props => {
    const { id, description, name } = props.donut
    return (
        <div key={id} className="donut-container">
          <div className="donut-wrapper">
            <img className="donut-img" src={"https://source.unsplash.com/random"} alt="Donut Here" />
                    
            <div>
                <p>{name}</p>
            </div>

            <div>
                <p>{description}</p>
            </div>

          </div>
        </div>
    );   
}

export default Donut;