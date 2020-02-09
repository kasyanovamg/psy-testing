import React from 'react';
import get from 'lodash-es/get';
import max from 'lodash-es/max';
import { createSelector } from "reselect";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import orderBy from 'lodash-es/orderBy';
import { AdminCharts } from "../AdminCharts";
import {Redirect} from "react-router-dom";

const getAllProjects = (state) => get(state, 'firestore.ordered.projects', []);
const getProjects = createSelector(
  getAllProjects,
  (projects) => orderBy(projects, ['createdAt'],['asc'])
);
const getGroups = createSelector(
  getAllProjects,
  (projects) => {
    const group = new Set(projects.map(p => p.group));
    return [...group].concat('all')
  }
);
const getFilteredAuthors = (projects) => {
  const authors = new Set(projects.map(p => p.authorId));
  return [...authors].concat('all');
}
const SummaryAdminView = ({projects, auth, groups}) => {
  const [selectedAuth, setAuth] = React.useState('all');
  const onChangeAuth = React.useCallback((e) => setAuth(e.target.value), [selectedAuth]);
  const [selectedGroup, setGroup] = React.useState('all');
  const onChangeGroup = React.useCallback((e) => setGroup(e.target.value), [selectedGroup]);
  const filteredProjects = React.useMemo(() => projects.filter(project => (project.authorId === selectedAuth || selectedAuth === 'all') &&
    (project.group === selectedGroup || selectedGroup === 'all')
  ),[selectedAuth, selectedGroup]);
  const filteredAuthors = React.useMemo(() => getFilteredAuthors(filteredProjects), [selectedAuth, selectedGroup]);
  const dateArray = Array(max(filteredProjects.map(project => project.attempt || 0))).fill().map((e, i) => i + 1);
  if (!auth.uid) return <Redirect to='/signin'/>;
  return (
    <div className="card z-depth-0 project-summary summary-container">
      <h3>Admin</h3>
      <p>Выбрать группу: </p>
      <select onChange={onChangeGroup} value={selectedGroup}>{groups.map(group =>
        <option value={group} selected={group === selectedGroup}>{group}</option>
      )}</select>
      <p>Выбрать пользователя: </p>
      {/*check that users with same last name have their data under one account*/}
      <select onChange={onChangeAuth} value={selectedAuth}>{filteredAuthors.map(author =>
        <option value={author} selected={author === selectedAuth}>{author}</option>
      )}</select>

      <AdminCharts date={dateArray}
                   results={filteredProjects.map(project => project.generalResult ?
                     {result: project.generalResult.shulte, attempt: project.attempt, id: project.authorId} || 0 : 0)}
                   name='Таблицы Шульте'
      />
      Снижение показателя говорит об увеличении концентрации внимания
      <AdminCharts date={dateArray}
                   results={filteredProjects.map(project => project.generalResult ? {
                     result: project.generalResult.shulteRed,
                     attempt: project.attempt,
                     id: project.authorId
                   } || 0 : 0)}
                   name='Черно-Красные Таблицы Шульте'
      />
      Снижение показателя говорит об улучшении переключаемости внимания
      <AdminCharts date={dateArray}
                   results={filteredProjects.map(project => project.generalResult ? {
                     result: project.generalResult.perception,
                     attempt: project.attempt,
                     id: project.authorId
                   } || 0 : 0)}
                   name='Корректурные пробы'
      />
      Снижение показателя говорит об улучшении устойчивости внимания
      <AdminCharts date={dateArray}
                   results={filteredProjects.map(project => project.generalResult ? {
                     result: project.generalResult.count,
                     attempt: project.attempt,
                     id: project.authorId
                   } || 0 : 0)}
                   name='Счет'
      />
      Результат близкий к единице говорит о хорошей устойчивости внимания и низкой истощаемости
      <AdminCharts date={dateArray}
                   results={filteredProjects.map(project => project.generalResult ? {
                     result: project.generalResult.memoryWords,
                     attempt: project.attempt,
                     id: project.authorId
                   } || 0 : 0)}
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
    groups: getGroups(state),
  })),
  firestoreConnect(props => {
    return [
      { collection: 'projects' }
    ]
  })
)(SummaryAdminView);
