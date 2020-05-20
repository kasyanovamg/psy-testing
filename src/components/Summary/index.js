import React from 'react';
import { createSelector } from "reselect";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash-es/get';
import orderBy from 'lodash-es/orderBy';
import {Charts} from "../Charts";
import { SummaryAdmin } from '../AdminSummary';

const getAllProjects = (state) => get(state, 'firestore.ordered.projects', []);
const getProjects = createSelector(
  getAllProjects,
  (projects) => orderBy(projects, ['createdAt'],['asc'])
);

const SummaryNonAdmin = ({ projects, auth }) => {
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

const SummaryNonAdminContainer = compose(
  connect((state) => ({
    projects: getProjects(state),
    auth: state.firebase.auth,
  })),
  firestoreConnect(props => {
    return [
      { collection: 'projects', where: [['authorId', '==', props.auth.uid]] }
    ]
  })
)(SummaryNonAdmin);

export const Summary =
  connect((state) => ({
    auth: state.firebase.auth,
  })
)(({auth}) => {
if (auth.uid === "UuE6qoYQJAV63WZZHvvbJnTLiKE2") {
  return <SummaryAdmin />
}
return <SummaryNonAdminContainer/>
});