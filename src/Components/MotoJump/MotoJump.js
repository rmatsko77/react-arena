import React, { useState, useEffect } from 'react'
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from './updateCustomValue.js'

function MotoJump() {

    const WORLD_HEIGHT = 30
    const WORLD_WIDTH = 100


    window.addEventListener('resize', setPixelToWorldScale)
    document.addEventListener('keydown', handleStart, { once: true })

    const setPixelToWorldScale = () => {
        const gameElem = document.getElementById('game')
        let worldToPixelScale
        if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
            worldToPixelScale = window.innerWidth / WORLD_WIDTH
        } else {
            worldToPixelScale = window.innerHeight / WORLD_HEIGHT
        }

        gameElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
        gameElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
    }


    let lastTime
    /*useEffect(() => {
        update()
        setupRoad()
        setPixelToWorldScale()

    })*/

    function handleStart() {
        update()
        setupRoad()
        setPixelToWorldScale()
        lastTime = null
    }

    function update(time) {
        if (lastTime == null) {
            lastTime = time
            window.requestAnimationFrame(update)
            return
        }
        const delta = time - lastTime

        updateRoad(delta, 1)

        lastTime = time
        window.requestAnimationFrame(update)
    }

    const updateRoad = (delta, speedScale) => {

        const SPEED = .05
        const roadElems = document.querySelectorAll('[data-road]')

        roadElems.forEach(road => {
            incrementCustomProperty(road, '--left', delta * speedScale * SPEED * -1)

            if (getCustomProperty(road, '--left') <= -300) {
                incrementCustomProperty(road, '--left', 600)
            }
        })

    }

    const setupRoad = () => {
        const roadElems = document.getElementsByClassName('road')
        setCustomProperty(roadElems[0], '--left', 0)
        setCustomProperty(roadElems[1], '--left', 300)
    }

    return (
        <div className='moto-container'>
            <div className='game-container' id='game'>
                <img src='moto-imgs/road.png' className='road' data-road></img>
                <img src='moto-imgs/road.png' className='road' data-road></img>
                <img src='moto-imgs/moto.png' className='moto'></img>
            </div>
        </div>
    )
}

export default MotoJump