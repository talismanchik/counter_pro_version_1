import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Settings} from "./Components/01Settings/Settings";
import {Counter} from "./Components/02Counter/Counter";
import {BsArrowBarLeft} from "@react-icons/all-files/bs/BsArrowBarLeft";
import {BsArrowBarRight} from "@react-icons/all-files/bs/BsArrowBarRight";
import {Window} from "./Components/03Window/Window";

function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(true)
    const [valueCounter, setValueCounter] = useState<number>(0)
    const [minInCounter, setMinInCounter] = useState<number>(0)
    const [maxInCounter, setMaxInCounter] = useState<number>(0)
    const [twoFrame, setTwoFrame] = useState<boolean>(false)

    useEffect(()=>{
        let maxValueAsString = localStorage.getItem('maxValue')
        let minValueAsString = localStorage.getItem('minValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))
        minValueAsString && setMinValue(JSON.parse(minValueAsString))
    }, [])

    useEffect(() => {
        minValue < maxValue ? setDisable(false) : setDisable(true)
        minValue >= maxValue ? setError('data entered incorrectly') : setError('')
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [maxValue, minValue])



    const changeMaxValueUp = () => {
        setMaxValue(maxValue + 1)
    }
    const changeMaxValueDown = () => {
        setMaxValue(maxValue - 1)
    }
    const changeMinValueUp = () => {
        setMinValue(minValue + 1)
    }
    const changeMinValueDown = () => {
        setMinValue(minValue - 1)
    }

    const startCounter = () => {
        setValueCounter(minValue)
        setMaxInCounter(maxValue)
        setMinInCounter(minValue)
    }
    const valueCounterAdd = () => {
        valueCounter < maxInCounter && setValueCounter(valueCounter + 1)
    }
    const resetValueCounter = () => {
        setValueCounter(minInCounter)
    }

    const changeToSecondWindow = () => {
        setTwoFrame(true)
    }
    const changeToFirstWindow = () => {
        setTwoFrame(false)
    }


    return (
        twoFrame
            ? <div className={s.App}>
                <Settings
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    disable={disable}
                    changeMaxValueUp={changeMaxValueUp}
                    changeMaxValueDown={changeMaxValueDown}
                    changeMinValueUp={changeMinValueUp}
                    changeMinValueDown={changeMinValueDown}
                    startCounter={startCounter}
                />

                <Counter
                    min={minInCounter}
                    max={maxInCounter}
                    value={valueCounter}
                    valueCounterAdd={valueCounterAdd}
                    resetValueCounter={resetValueCounter}
                />
                <BsArrowBarLeft className={s.arrow} onClick={changeToFirstWindow}/>
            </div>
            : <div className={s.App}>
                <Window
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    disable={disable}
                    startCounter={startCounter}
                    min={minInCounter}
                    max={maxInCounter}
                    value={valueCounter}
                    valueCounterAdd={valueCounterAdd}
                    resetValueCounter={resetValueCounter}
                    changeMaxValueUp={changeMaxValueUp}
                    changeMaxValueDown={changeMaxValueDown}
                    changeMinValueUp={changeMinValueUp}
                    changeMinValueDown={changeMinValueDown}
                />
                <BsArrowBarRight className={s.arrow} onClick={changeToSecondWindow}/>
            </div>
    );
}

export default App;

