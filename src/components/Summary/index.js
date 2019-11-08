import React from 'react';
import { createSelector } from "reselect";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash-es/get';
import orderBy from 'lodash-es/orderBy';
import {Charts} from "../Charts";

const getAllProjects = (state) => get(state, 'firestore.ordered.projects', []);
const getProjects = createSelector(
  getAllProjects,
  (projects) => orderBy(projects, ['createdAt'],['asc'])
);

const Summary = ({ projects, auth }) => {
  if (auth.uid === 'UuE6qoYQJAV63WZZHvvbJnTLiKE2') {
    //console.log(projects)
    const shulteResults = projects.filter(project => project.generalResult.shulte && (project.generalResult.shulte !== 0));
    //console.log(shulteResults);
    const dateArr = shulteResults.map(project => project.createdAt ? project.createdAt.toDate().toLocaleDateString() : 0);

    // let shul = [];
    // for (let i=0; i < projects.length; i++) {
    //   if (projects[i].generalResult.shulte && (projects[i].generalResult.shulte !== 0)) {
    //     shul.push(projects[i].generalResult.shulte)
    //   }
    // }
    // console.log(shul)
    let counter = 1;
    let temp = {
      [counter]: []
    };

    for (let i=0; i < projects.length; i++) {
     // console.log(projects[i])
      //console.log(temp[counter].map(item =>  [item.authorId, projects[i].authorId]));
     // let check = temp[counter].filter(item => item.authorId !== projects[i].authorId);
     // console.log(check)
      if (temp[counter].filter(item => item.authorId !== projects[i].authorId) !== []) {
        //console.log(temp[counter].filter(item => item.authorId !== projects[i].authorId))
        temp[counter].push(projects[i]);
        console.log("we pushed")
      } else {
        console.log('else')
        temp[counter].push(projects[i]);
        counter++;
      }
    }
console.log(temp)
    return <div>
      <Charts date={dateArr}
              results={shulteResults.map(project => project.generalResult ? project.generalResult.shulte || 0 : 0)}
              name='Таблицы Шульте'
      />
    </div>
  }
  const filteredProjects = projects.filter(project => project.authorId === auth.uid);
  const dateArray = filteredProjects.map(project => project.createdAt ? project.createdAt.toDate().toLocaleDateString() : 0);
  return (
    <div className="card z-depth-0 project-summary summary-container">
      <Charts date={dateArray}
              results={filteredProjects.map(project => project.generalResult ? project.generalResult.shulte || 0 : 0)}
              name='Таблицы Шульте'
      />
      Снижение показателя говорит об увеличении концентрации внимания
      <Charts date={dateArray}
              results={filteredProjects.map(project => project.generalResult ? project.generalResult.shulteRed || 0 : 0)}
              name='Черно-Красные Таблицы Шульте'
      />
      Снижение показателя говорит об улучшении переключаемости внимания
      <Charts date={dateArray}
              results={filteredProjects.map(project => project.generalResult ? project.generalResult.perception || 0 : 0)}
              name='Корректурные пробы'
      />
      Снижение показателя говорит об улучшении устойчивости внимания
      <Charts date={dateArray}
              results={filteredProjects.map(project => project.generalResult ? project.generalResult.count || 0 : 0)}
              name='Счет'
      />
      Результат близкий к единице говорит о хорошей устойчивости внимания и низкой истощаемости
      <Charts date={dateArray}
              results={filteredProjects.map(project => project.generalResult ? project.generalResult.memoryWords || 0 : 0)}
              name='Запоминание слов'
      />
      Увеличение показателя говорит об улучшении памяти
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    projects: getProjects(state),
    auth: state.firebase.auth
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Summary)