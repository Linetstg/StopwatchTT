import './App.css';
import React, { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Timer from './components/Timer';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


function App() {
  const [time, setTime] = useState(0);

  const [interv, setInterv] = useState(false);


  useEffect(() => {
    const stream = new Subject();
    interval(10)
      .pipe(takeUntil(stream))
      .subscribe(() => {
        if (interv) {
          setTime(val => val + 1)
        }
      });
    return () => {
      stream.next();
      stream.complete();
    };
  }, [interv]);


  const start = () => {
    setInterv(prevState => !prevState);
  };

  const wait = () => {
    if (time !== 0) {
      setInterv(false)
    }

  };

  const stop = () => {
    setTime(0);
    setInterv(false);
  };

  const reset = () => {
    setTime(0);
    setInterv(false);
    setInterv(prevState => !prevState);
  };


  return (
    <div className="main-section">
      <div className="stopwatch-holder">
        <div className="timer">
          <p>
          <Timer time={time} />
          </p>
          <p>
          <Buttons
            start={start}
            wait={wait}
            stop={stop}
            reset={reset}
          />
          </p>
          
          
        </div>
      </div>

    </div>
  );
}

export default App;
