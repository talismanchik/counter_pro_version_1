import React from 'react';
import s from "./InputWindow.module.css";

type CounterInputWindowPropsType = {
    max: number
    value: number
}

export const CounterInputWindow:React.FC<CounterInputWindowPropsType> = ({
                                                                             max,
                                                                             value,
                                                                         }) => {
    return (
        <div className={s.inputWindow}>
            <div className={s.ValueFrame}>
                <span className={value === max ? s.valueMax : s.value}>{value}</span>
            </div>
        </div>
    );
};

