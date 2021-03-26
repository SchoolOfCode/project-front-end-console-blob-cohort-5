import React from react;


function SourceComponent({data}){
    return(
        <div>
        <p>{data.source}</p>
        <p>{data.lastupdated}</p>
        </div>
    );

}

export default SourceComponent;