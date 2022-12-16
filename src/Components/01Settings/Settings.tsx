import React, {useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button";
import {BiRightArrow} from "@react-icons/all-files/bi/BiRightArrow";
import {BiLeftArrow} from "@react-icons/all-files/bi/BiLeftArrow";

type SettingsPropsType = {
    maxValue: number
    minValue: number
    error: string
    disable: boolean
    changeMaxValueUp: () => void
    changeMaxValueDown: () => void
    changeMinValueUp: () => void
    changeMinValueDown: () => void
    startCounter: () => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          maxValue,
                                                          minValue,
                                                          error,
                                                          disable,
                                                          changeMaxValueUp,
                                                          changeMaxValueDown,
                                                          changeMinValueUp,
                                                          changeMinValueDown,
                                                          startCounter
                                                      }) => {

    const [blockButton, setBlockButton] = useState<boolean>(false)

    const settingsAdd = () => {
        startCounter()
        setBlockButton(true)
    }
    const changeMaxValueDownHandler = () => {
        changeMaxValueDown()
        setBlockButton(false)
    }
    const changeMaxValueUpHandler = () => {
        changeMaxValueUp()
        setBlockButton(false)
    }
    const changeMinValueDownHandler = () => {
        changeMinValueDown()
        setBlockButton(false)
    }
    const changeMinValueUpHandler = () => {
        changeMinValueUp()
        setBlockButton(false)
    }

    return (
        <div className={s.SettingsFrame}>
            <div className={s.ValueFrame}>
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
            <div className={s.ButtonFrame}>
                {!disable
                    ? <Button
                        className={`${s.Button} ${blockButton ? s.mute : ''}`}
                        buttonName={'SET'}
                        callBack={settingsAdd}/>
                    : <span className={s.error}>{error}</span>}
            </div>
        </div>
    );
};

