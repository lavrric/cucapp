import React from "react";
import "./timer.scss";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: Math.floor(props.time / 60),
      seconds: props.time - Math.floor(props.time / 60) * 60,
    };
  }
  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearInterval(this.myInterval);
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }
  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="timer">
        <div className="title">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    );
  }
}

export default Timer;
