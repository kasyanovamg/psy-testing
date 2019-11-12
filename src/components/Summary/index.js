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
    .filter(project => project.authorId !== 'UuE6qoYQJAV63WZZHvvbJnTLiKE2'),
);

const getAverage = (projects) => {

  let counter = 1;
  let temp = {
    [counter]: []
  };

  for (let i = 0; i < projects.length; i++) {
    let check = temp[counter].find(item => item.authorId === projects[i].authorId);
    if (!check) {
      temp[counter].push(projects[i]);
    } else {
      counter = counter + 1;
      temp[counter] = [];
      temp[counter].push(projects[i]);
    }
  }
  const results = {};
  Object.values(temp).forEach(
    (project, i) => {
      results[i] = {
        shulte: [],
        shulteRed: [],
        count: []
      };
      project.forEach(p => {
        if (p.generalResult) {
          if (p.generalResult.shulte > 0) {
            results[i].shulte.push(p.generalResult.shulte)
          }
        }

      })
    });

  return results;

};

const Summary = ({ projects, auth }) => {
  if (auth.uid === 'UuE6qoYQJAV63WZZHvvbJnTLiKE2') {
    //console.log(projects)
    const shulteResults = projects.filter(project => project.generalResult.shulte && (project.generalResult.shulte !== 0));
    const perceptionResults = projects.filter(project => project.generalResult.perception && (project.generalResult.perception !== 0));
    const memoryResults = projects.filter(project => project.generalResult.memoryWords && (project.generalResult.memoryWords !== 0));

    const dateArr = shulteResults.map(project => project.createdAt ? project.createdAt.toDate().toLocaleDateString() : 0);

    const average = getAverage(projects);
    console.log(average);

    return <div>
      <Charts date={dateArr}
              results={shulteResults.map(project => project.generalResult ? project.generalResult.shulte || 0 : 0)}
              name='Таблицы Шульте'
      />
      <Charts date={dateArr}
              results={perceptionResults.map(project => project.generalResult ? project.generalResult.perception || 0 : 0)}
              name='Корректурные пробы'
      />
      <Charts date={dateArr}
              results={memoryResults.map(project => project.generalResult ? project.generalResult.memoryWords || 0 : 0)}
              name='Запоминание слов'
      />
    </div>
  }
  const filteredProjects = projects.filter(project => project.authorId === auth.uid);
  console.log(filteredProjects)
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
    { collection: 'projects' },
  ])
)(Summary)