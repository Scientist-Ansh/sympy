import React from 'react';
import parse from 'html-react-parser';
import './card.css'

const Card=(props)=>{
    let output = String (props.output);
    output = parse(output);
    console.log(output);
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.input}</p>
            {output=="undefined"?"Cannot Plot":output}
        </div>
    );
}

export default Card;