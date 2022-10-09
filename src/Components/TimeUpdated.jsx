import React, { useState } from 'react';

function TimeUpdated() {
  //useState is a hook and can only be called inside a function components
  const [greetingsTime, setTime] = useState(new Date().toLocaleTimeString());

  //current state is greetingsTime
  //function that will update this state is setTime()(or whatever)
  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

  return <p className="greetings__time">It's {greetingsTime}</p>;
}

export default TimeUpdated;
