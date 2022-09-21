import React from 'react'
import Content from './Content'

const Header = ({course}) => {
    return(
        <h1>
            <Content course ={course.name} />
        </h1>
    )
}

export default Header