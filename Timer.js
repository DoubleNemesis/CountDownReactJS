import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StyledButton from './components/StyledButton'
import StyledTimeDisplay from './components/StyledTimeDisplay'
import StyledTimeInput from './components/StyledTimeInput'
import StyledContainer from './components/StyledContainer'
import StyledHeader from './components/StyledHeader'
import StyledAnimation from './components/StyledAnimation'
import StyledRocket from './components/StyledRocket'
import StyledMessage from './components/StyledMessage'
import StyledFlight from './components/StyledFlight'

function Timer() {
    const [timeRunning, setTimeRunning] = useState(false)
    const [hours, setHours] = useState('0')
    const [minutes, setMinutes] = useState('0')
    const [seconds, setSeconds] = useState('0')
    const [countdown, setCountdown] = useState(1000)
    const [total, setTotal] = useState(10000)
    const [finished, setFinished] = useState(false)
    let time = 0


    function handleChange(e) {
        const { name, value } = e.target
        if (name === 'hours') {
            setHours(value > 0 ? value : 0)
        }
        if (name === 'minutes') {
            setMinutes(value > 0 ? value : 0)
        }
        if (name === 'seconds') {
            setSeconds(value > 0 ? value : 0)
        }
    }

    function handleStartStop() {
        setTimeRunning(prev => !prev)
        if (timeRunning) {
            setHours('0')
            setMinutes('0')
            setSeconds('0')
            time = 0
            setFinished(false)
        }
    }
    useEffect(() => {


        if (timeRunning) {
            time = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds)
            setTotal(time)
            let myTimer = setInterval(function () {
                setCountdown(time)
                if (time >= 0) {
                    let nSeconds = time % 60
                    let nMinutes = ((time - nSeconds) % 3600) / 60
                    let nHours = ((time - (nMinutes * 60)) - nSeconds) / 3600
                    setSeconds(nSeconds)
                    setMinutes(nMinutes)
                    setHours(nHours)
                    time = time - 1


                }
                else {
                    console.log('done')
                    setFinished(true)
                    clearInterval(myTimer)
                }
            }, 1000)
            return () => clearInterval(myTimer)
        }

    }, [timeRunning])

    return !timeRunning ? (
        <>
            <StyledHeader image={'./images/nasa2.png'}>Launch Control Countdown</StyledHeader>
            <StyledContainer>
                <StyledTimeInput type="number" name="hours" value={hours} onChange={handleChange} label="Hour" />
                <StyledTimeInput type="number" name="minutes" value={minutes} onChange={handleChange} label="Min" />
                <StyledTimeInput type="number" name="seconds" value={seconds} onChange={handleChange} label="Sec" />
                <StyledButton onClick={handleStartStop} >{timeRunning ? 'Reset' : 'Go'}</StyledButton>
            </StyledContainer>
            <StyledFlight image={'./images/shuttle.png'}></StyledFlight>
        </>)
        : (
            <>
                <StyledAnimation>
                    <StyledTimeDisplay>{hours}</StyledTimeDisplay>
                    <StyledTimeDisplay>{minutes}</StyledTimeDisplay>
                    <StyledTimeDisplay>{seconds}</StyledTimeDisplay>
                    <StyledButton onClick={handleStartStop} >{timeRunning ? 'Reset' : 'Start'}</StyledButton>
                </StyledAnimation>
                <StyledMessage>{finished ? 'We Have Lift Off!' : 'Fuelling Up!'}</StyledMessage>
                <StyledRocket countdown={countdown} total={total} finished={finished} />

            </>
        )
}

export default Timer