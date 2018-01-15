import React from 'react';
import lists from '../../mocks.js';
import List from '../List';


const BoardViewer = () => {
  return (
    <div className="board-viewer">
      <div className="list-viewer">
        {lists.map(list => {
          console.log("lists: ", lists);
          return <List content={list} />;
        })}
      </div>
      <div className="add-a-list" />
    </div>
  );
};

export default BoardViewer;
