import React from 'react';

export const SummaryBlock = ({count = 0, memoryWords = 0 , perception = 0 , shulte = 0, shulteRed = 0}) => {
  return (<div>
    <div>
      Таблицы шульте: {shulte}
    </div>
    <div>
      Чернокрасные таблицы Шульте: {shulteRed}
    </div>
    <div>
      Корректурная проба: {perception}
    </div>
    <div>
      Счет: {count}
    </div>
    <div>
      Запоминание слов: {memoryWords}
    </div>
  </div>);
}

