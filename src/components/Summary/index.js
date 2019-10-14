import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux';
import get from 'lodash-es/get'
import {SummaryBlock} from "../SummaryBlock";

const getProjects = (state) => get(state, 'firestore.ordered.projects', []);


const Summary = ({ projects, auth }) => {
  const filteredProjects = projects.filter(project => project.authorId === auth.uid);
console.log(filteredProjects)
  return (
    <div className="card z-depth-0 project-summary summary-container">
      {filteredProjects.map(project =>
        <div className="card-content grey-text text-darken-3" key={project.id}>
          <p className="grey-text">Тест пройден: {project.createdAt && project.createdAt.toDate().toString()}</p>
          {project.generalResult &&
          <SummaryBlock
            count={project.generalResult.count}
            memoryWords={project.generalResult.memoryWords}
            perception={project.generalResult.perception}
            shulte={project.generalResult.shulte}
            shulteRed={project.generalResult.shulteRed}
          />
          }
      <hr />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: getProjects(state),
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Summary)