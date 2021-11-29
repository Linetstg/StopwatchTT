import './Buttons.css';

function Buttons(props) {

  return (
    <div >
      <div >
        <button onClick={props.start} className="button">Start</button>
        <button onClick={props.stop} className="button">Stop</button>
        <button onDoubleClick={props.wait} className="button">Wait</button>
        <button onClick={props.reset} className="button">Reset</button>
      </div>

    </div>
  );
}

export default Buttons;