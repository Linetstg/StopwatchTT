import './Timer.css';

function Timer(props) {
  return (
    <div >
      <div >
        <div >
          <span className="timers">{('0' + Math.floor((props.time / (1000 * 60 * 60)) % 24)).slice(-2)}</span>&nbsp;:&nbsp;
          <span className="timers">{('0' + Math.floor(props.time / 6000)).slice(-2)}</span>&nbsp;:&nbsp;
          <span className="timers">{('0' + Math.floor((props.time / 100) % 60)).slice(-2)}</span>
        </div>
      </div>

    </div>
  );
}

export default Timer;