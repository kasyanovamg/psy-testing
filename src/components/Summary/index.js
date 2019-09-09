import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'


const Summary = ({ projects, auth }) => {
  return (
    <div className="card z-depth-0 project-summary container">
      {projects && projects.length && projects.filter(project => project.authorId === auth.uid).map(project =>
        <div className="card-content grey-text text-darken-3" key={project.id}>
          <p>Имя: {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{project.createdAt && project.createdAt.toDate().toString()}</p>
          {project.shulteResult &&
            <div>
              <h4>Результат методики "Таблицы шульте"</h4>
              <div>Время: {project.shulteResult && project.shulteResult.time}</div>
              <div>Ошибки: {project.shulteResult && project.shulteResult.errors}</div>
            </div>
          }
      <hr />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Summary)