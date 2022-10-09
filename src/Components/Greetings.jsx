import React from 'react';
import TimeUpdated from './TimeUpdated';

function Greetings() {
  let moment;
  let greetingsWords;

  const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const greetingsTime = currentDate.toLocaleTimeString();

  currentTime < 12
    ? ((moment = 'morning'), (greetingsWords = 'morning 🌄'))
    : currentTime < 18
    ? ((moment = 'afternoon'), (greetingsWords = 'afternoon 🪂'))
    : ((moment = 'night'), (greetingsWords = 'night 🌙'));

  return (
    <div className="greetings">
      <TimeUpdated />
      <p className={`greetings__words greetings__words-${moment}`}> Time to say good {greetingsWords}</p>
    </div>
  );
}

export default Greetings;
