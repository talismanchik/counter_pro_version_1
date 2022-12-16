import React from 'react';
import s from "./ButtonWindow.module.css";
import {Button} from "../../Button";

type CounterButtonWindowPropsType={
    min: number
    max: number
    value: number
    valueCounterAdd: () => void
    resetValueCounter: () => void
    toSettingHandler: () => void
}

export const CounterButtonWindow:React.FC<CounterButtonWindowPropsType> = ({
                                                                               min,
                                                                               max,
                                                                               value,
                                                                               valueCounterAdd,
                                                                               resetValueCounter,
                                                                               toSettingHandler,
                                                                           }) => {

    return (
        <div className={s.buttonWindow}>
            <Button className={`${s.Button} ${value === max? s.mute: ''}`} buttonName={'INC'} callBack={valueCounterAdd}/>
            <Button className={`${s.Button} ${value === min? s.mute: ''}`} buttonName={'RESET'} callBack={resetValueCounter}/>
            <Button className={`${s.Button}`} buttonName={'TO SET'} callBack={toSettingHandler}/>
        </div>
    );
};

