import React from 'react'
import "./Title.css"


const Title = ({ name }) => (
    <h1 className="title">Mardown <span className="titleSpan">{name}</span></h1>
)

export default Title


