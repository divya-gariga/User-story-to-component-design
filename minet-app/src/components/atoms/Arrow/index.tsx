import React from 'react';

const Arrow = (props: { arrowType: string }) => {
    const { arrowType } = props;
    let arrow = null;

    if (arrowType == "up")
        arrow = <img src="" alt="up arrow" />
    else if (arrowType == "down")
        arrow = <img src="" alt="down arrow" />
    else if (arrowType == "upright")
        arrow = <img src="" alt="upright arrow" />
    else if (arrowType == "downright")
        arrow = <img src="" alt="downright arrow" />
   
    return (
        <div>
            {arrow}
        </div>
    );
};

export default Arrow;