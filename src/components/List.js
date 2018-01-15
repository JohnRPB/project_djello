import React from 'react';

const List = ({list}) => {
  return (
    <div className="list">
      <div className="list-title">
        <h2>{list.title}</h2>
      </div>
      <div className="list-body"></div>
    </div>
  )
}

export default List;
