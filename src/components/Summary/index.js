import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'


const Summary = ({ projects }) => {
  return (
    <div className="card z-depth-0 project-summary">
      {projects && projects.length && projects.map(project =>
        <div className="card-content grey-text text-darken-3" key={project.id}>
          <p>Name: {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{project.createdAt && project.createdAt.toDate().toString()}</p>
          {project.submitShulte &&
            <div>
              <h4>Shulte results</h4>
              <div>Time: {project.submitShulte && project.submitShulte.time}</div>
              <div>Errors: {project.submitShulte && project.submitShulte.errors}</div>
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