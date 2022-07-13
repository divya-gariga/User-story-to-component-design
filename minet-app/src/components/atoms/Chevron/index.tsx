import React from 'react';

const Chevron = (props: { chevronType: string }) => {
    const { chevronType } = props;
    let chevron = null;
    if (chevronType == "up")
        chevron = <img src="" alt="up arrow" />
    else if (chevronType == "down")
        chevron = <img src="" alt="down arrow" />
    return (
        <div>
            {chevron}
        </div>
    );
};

export default Chevron;