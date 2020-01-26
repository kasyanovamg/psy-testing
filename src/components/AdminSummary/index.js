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
const getAuthors = createSelector(
  getAllProjects,
  (projects) => {
    const authors = new Set(projects.map(p => p.authorId));
    return [...authors].concat('all');
  }
);

const SummaryAdminView = ({ projects, auth, authors }) => {
  const [selectedAuth, setAuth] = React.useState('all');
  const onChangeAuth = React.useCallback((e) => setAuth(e.target.value), []);
  const filteredProjects = projects.filter(project => project.authorId === selectedAuth || selectedAuth === 'all');
  const dateArray = filteredProjects.map(project => project.createdAt ? project.createdAt.toDate().toLocaleDateString() : 0);
  console.log(filteredProjects);
  return (
    <div className="card z-depth-0 project-summary summary-container">
      <h3>Admin</h3>
      <p>Выбрать пользователя: </p>
      <select onChange={onChangeAuth} value={selectedAuth}>{authors.map(author =>
        <option value={author} selected={author===selectedAuth}>{author}</option>
      )}</select>

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

export const SummaryAdmin = compose(
  connect((state) => ({
    projects: getProjects(state),
    auth: state.firebase.auth,
    authors: getAuthors(state),
  })),
  firestoreConnect(props => {
    return [
      { collection: 'projects' }
    ]
  })
)(SummaryAdminView);
