import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

function Course ({ course }) {
    return(
        <div>
            {course.map((course) => {
                return(
                    <>
                        <Header key={course.id} courseName={course.name} />
                        <Content key={course.id} parts={course.parts} />
                        <Total key={course.id} sums={course.parts} />
                    </>
                )
            }
            )}
        </div>
    )
}

export default Course