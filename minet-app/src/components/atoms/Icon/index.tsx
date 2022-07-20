import React from 'react';

const Icon = (props:{src:string}) => {
  const {src}=props;
    return (
        <img src={src} alt="close icon"/>
    );
};

export default Icon;