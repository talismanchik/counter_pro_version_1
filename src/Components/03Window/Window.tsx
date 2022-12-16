import React, {useState} from 'react';
import s from './Window.module.css'
import {SettingInputWindow} from "./01InputWindow/SettingInputWindow";
import {SettingButtonWindow} from "./02ButtonWindow/SettingButtonWindow";
import {CounterButtonWindow} from "./02ButtonWindow/CounterButtonWindow";
import {CounterInputWindow} from "./01InputWindow/CounterInputWindow";


type WindowPropsType = {
    maxValue: number
    minValue: number
    error: string
    disable: boolean
    startCounter: () => void
    min: number
    max: number
    value: number
    valueCounterAdd: () => void
    resetValueCounter: () => void
    changeMaxValueUp: () => void
    changeMaxValueDown: () => void
    changeMinValueUp: () => void
    changeMinValueDown: () => void
}

export const Window: React.FC<WindowPropsType> = ({
                                                      maxValue,
                                                      minValue,
                                                      error,
                                                      disable,
                                                      startCounter,
                                                      min,
                                                      max,
                                                      value,
                                                      valueCounterAdd,
                                                      resetValueCounter,
                                                      changeMaxValueUp,
                                                      changeMaxValueDown,
                                                      changeMinValueUp,
                                                      changeMinValueDown,
                                                  }) => {

    const [settingOn, setSettingOn] = useState<boolean>(true)

    const startCounterHandler = () => {
        startCounter()
        setSettingOn(false)
    }
    const toSettingHandler = () => {
        setSettingOn(true)
    }

    return (
        settingOn
            ?
            <div className={s.window}>
                <SettingInputWindow
                    maxValue={maxValue}
                    minValue={minValue}
                    changeMaxValueUp={changeMaxValueUp}
                    changeMaxValueDown={changeMaxValueDown}
                    changeMinValueUp={changeMinValueUp}
                    changeMinValueDown={changeMinValueDown}
                />
                <SettingButtonWindow
                    error={error}
                    disable={disable}
                    startCounter={startCounterHandler}
                />
            </div>
            :
            <div className={s.window}>
                <CounterInputWindow
                    max={max}
                    value={value}
                />
                <CounterButtonWindow
                    min={min}
                    max={max}
                    value={value}
                    valueCounterAdd={valueCounterAdd}
                    resetValueCounter={resetValueCounter}
                    toSettingHandler={toSettingHandler}
                />
            </div>
    );
};

