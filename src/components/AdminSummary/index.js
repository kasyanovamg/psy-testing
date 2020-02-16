import React from 'react';
import get from 'lodash-es/get';
import max from 'lodash-es/max';
import {createSelector} from "reselect";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import orderBy from 'lodash-es/orderBy';
import {AdminCharts} from "../AdminCharts";
import {Redirect} from "react-router-dom";
import {setTrackGroup} from "../../actions/otherActions";

const getAllProjects = (state) => get(state, 'firestore.ordered.projects', []);
const getProjects = createSelector(
  getAllProjects,
  (projects) => {
    const allProjects = projects.filter(p => p.group !== 'test');
    return orderBy(allProjects, ['createdAt'], ['asc'])
  }
);
const getGroups = createSelector(
  getAllProjects,
  (projects) => {
    const allProjects = projects.filter(p => p.group !== 'test');
    const group = new Set(allProjects.map(p => p.group));
    return [...group].concat('all')
  }
);
const getFilteredAuthors = (projects) => {
  const authors = new Set(projects.map(p => p.authorId));
  return [...authors].concat('all');
};


const getSelectedGroup = (state) => get(state, 'utils.group', 'all');

const SummaryAdminView = ({projects, auth, groups, setGroup, selectedGroup}) => {
  const [selectedAuth, setAuth] = React.useState('all');
  const onChangeAuth = React.useCallback((e) => {
    setAuth(e.target.value);
    setGroup('all');
  }, [selectedAuth, selectedGroup]);
  const onChangeGroup = React.useCallback((e) => {
    setGroup(e.target.value);
    setAuth('all');
  }, [selectedGroup, selectedAuth]);

  const filteredProjects = React.useMemo(() => projects.filter(project => (project.authorId === selectedAuth || selectedAuth === 'all') &&
    (project.group === selectedGroup || selectedGroup === 'all')
  ), [selectedAuth, selectedGroup, projects]);
  const filteredAuthors = React.useMemo(() => getFilteredAuthors(filteredProjects), [selectedAuth, selectedGroup, projects]);
  const dateArray = React.useMemo(() =>
    Array(max(filteredProjects.map(project => project.attempt || 0))).fill().map((e, i) => i + 1), [projects, selectedAuth]);
  if (!auth.uid) return <Redirect to='/signin'/>;
console.log(111111, filteredProjects.filter(au  => !au.group));
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
const mapDispatchToProps = dispatch => {
  return {
    setGroup: (group) => dispatch(setTrackGroup(group)),
  }
}
export const SummaryAdmin = compose(
  connect((state) => ({
      projects: getProjects(state),
      auth: state.firebase.auth,
      groups: getGroups(state),
      selectedGroup: getSelectedGroup(state),
    }),
    mapDispatchToProps,
    ),
  firestoreConnect(props => {
    return [
      {collection: 'projects'}
    ]
  })
)(SummaryAdminView);
