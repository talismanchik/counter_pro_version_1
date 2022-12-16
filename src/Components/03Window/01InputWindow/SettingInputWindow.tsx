import React from 'react';
import s from "./InputWindow.module.css";
import {BiLeftArrow} from "@react-icons/all-files/bi/BiLeftArrow";
import {BiRightArrow} from "@react-icons/all-files/bi/BiRightArrow";

type SettingInputWindowPropsType = {
    maxValue: number
    minValue: number
    changeMaxValueUp: () => void
    changeMaxValueDown: () => void
    changeMinValueUp: () => void
    changeMinValueDown: () => void
}
export const SettingInputWindow: React.FC<SettingInputWindowPropsType> = ({
                                                                              maxValue,
                                                                              minValue,
                                                                              changeMaxValueUp,
                                                                              changeMaxValueDown,
                                                                              changeMinValueUp,
                                                                              changeMinValueDown,
                                                                          }) => {
    const changeMaxValueDownHandler = () => {
        changeMaxValueDown()
    }
    const changeMaxValueUpHandler = () => {
        changeMaxValueUp()
    }
    const changeMinValueDownHandler = () => {
        changeMinValueDown()
    }
    const changeMinValueUpHandler = () => {
        changeMinValueUp()
    }


    return (
        <div className={s.inputWindow}>
                <div className={s.ValueFlex}>
                    <span>Max value</span>
                    <div className={s.counterSet}>
                        <BiLeftArrow onClick={changeMaxValueDownHandler}/>
                        <span>{maxValue}</span>
                        <BiRightArrow onClick={changeMaxValueUpHandler}/>
                    </div>
                </div>
                <div className={s.ValueFlex}>
                    <span>Min value</span>
                    <div className={s.counterSet}>
                        <BiLeftArrow onClick={changeMinValueDownHandler}/>
                        <span>{minValue}</span>
                        <BiRightArrow onClick={changeMinValueUpHandler}/>
                    </div>
                </div>
        </div>
    );
};

