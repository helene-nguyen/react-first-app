import React from 'react';

function Note({ title, content, category }) {
  //* 2 ways to get props => 
  return (
    // <>
    //   {datas.map((note) =>

    //     (<article className="note" key={note.title}>
    //       <header className="note__item note__item__header">{note.title}</header>
    //       <main className="note__item note__item__main">{note.content}</main>
    //       <footer className="note__item note__item__footer">{note.category}</footer>
    //     </article>)

    //   )}
    // </>
    <article className="note">
      <header className="note__item note__item__header">{title}</header>
      <main className="note__item note__item__main">{content}</main>
      <footer className="note__item note__item__footer">{category}</footer>
    </article>
  );
}

export default Note;
