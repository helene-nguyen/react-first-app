import React from 'react';
import TimeUpdated from './TimeUpdated';

function Greetings() {
  let moment;
  let greetingsWords;
  let icon;

  const currentDate = new Date();
  // test the hours, just activate it
  // currentDate.setHours(17,0,0,0)
  const currentTime = currentDate.getHours();

  currentTime < 12
    ? ((icon = '🌄'),(moment = 'morning'), (greetingsWords = 'morning'))
    : currentTime < 18
    ? ((icon = '🪂'),(moment = 'afternoon'), (greetingsWords = 'afternoon'))
    : ((icon = '🌙'),(moment = 'night'), (greetingsWords = 'night'));

  return (
    <div className="greetings">
      <TimeUpdated />
      <p className={`greetings__words greetings__words-${moment}`}>
        {icon} Time to say good {greetingsWords}
      </p>
    </div>
  );
}

export default Greetings;
