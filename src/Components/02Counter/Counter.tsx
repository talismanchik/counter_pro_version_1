import React from 'react';
import s from './Counter.module.css'
import {Button} from "../Button";

type CounterPropsType = {
    min: number
    max: number
    value: number
    valueCounterAdd: () => void
    resetValueCounter: () => void
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        min,
                                                        max,
                                                        value,
                                                        valueCounterAdd,
                                                        resetValueCounter
                                                    }) => {



    return (
        <div className={s.CounterFrame}>
            <div className={s.ValueFrame}>
                <span className={value === max ? s.valueMax : s.value}>{value}</span>
            </div>
            <div className={s.ButtonFrame}>
                <Button className={`${s.Button} ${value === max? s.mute: ''}`} buttonName={'INC'} callBack={valueCounterAdd}/>
                <Button className={`${s.Button} ${value === min? s.mute: ''}`} buttonName={'RESET'} callBack={resetValueCounter}/>
            </div>
        </div>
    );
};

