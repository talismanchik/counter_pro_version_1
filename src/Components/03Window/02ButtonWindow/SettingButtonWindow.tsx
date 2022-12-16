import React from 'react';
import s from "./ButtonWindow.module.css";
import {Button} from "../../Button";

type SettingButtonWindowPropsType ={
    error: string
    disable: boolean
    startCounter: () => void
}

export const SettingButtonWindow:React.FC<SettingButtonWindowPropsType> = ({
    error,
    disable,
    startCounter,
                                                                           }) => {



    const settingsAdd = () => {
        startCounter()
    }

    return (
        <div className={s.buttonWindow}>
            {!disable
                ? <Button
                    className={`${s.Button}`}
                    buttonName={'SET'}
                    callBack={settingsAdd}/>
                : <span className={s.error}>{error}</span>}
        </div>
    );
};

