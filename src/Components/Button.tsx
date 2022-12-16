import React from 'react';


type ButtonPropsType = {
    buttonName: string
    callBack: ()=>void
    className: string
}

export const Button:React.FC<ButtonPropsType> =({
                                                    buttonName,
                                                    callBack,
                                                    className
})=> {
    return (
        <div>
            <button className={className} onClick={()=>callBack()}>{buttonName}</button>
        </div>
    );
};

