// import Note from './components/Note'

// const App = ({ notes }) => {
//   console.log('...App Works')
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App

import Course from './components/Course'

const App = ({ course }) => {
  return(
    <div>
        <Course course={course} />
    </div>
  )
}

export default App