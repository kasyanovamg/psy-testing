import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'


const Summary = ({ projects }) => {
    return (
        <div className="card z-depth-0 project-summary">
            {projects && projects.length && projects.map(project =>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{project.createdAt && project.createdAt.toDate().toString()}</p>
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