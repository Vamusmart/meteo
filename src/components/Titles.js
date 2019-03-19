import React from "react";

class Titles extends React.Component{
    render(){
        return(
            <div>
                <h1 className="title-container__title">Weather</h1>
                <h3 className="title-container__subtitle">Is it sunny Today?</h3>
            </div>
        );
    }
};

export default Titles;