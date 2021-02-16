import React from 'react';
import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  useEffect(() => {
    let tick = () => {
      setTime(new Date());
    }
    let interval = setInterval(tick, 1000);

    return (
      clearInterval(interval)
    )
  }, [])
  return (
    <section>
      <h1>Clock</h1>
      <div className='clock'>
        <p>
          <span>
            Time:
            </span>
          <span>
            {hours}:{minutes}:{seconds} PDT
            </span>
        </p>
        <p>Date: {time.toDateString()}</p>
      </div>
    </section>
  )
}

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date()
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   tick = () => {
//     this.setState({ time: new Date() });
//   }

//   render() {
//     let hours = this.state.time.getHours();
//     let minutes = this.state.time.getMinutes();
//     let seconds = this.state.time.getSeconds();

//     hours = (hours < 10) ? `0${hours}` : hours;
//     minutes = (minutes < 10) ? `0${minutes}` : minutes;
//     seconds = (seconds < 10) ? `0${seconds}` : seconds;

//     return (
//       <section>
//         <h1>Clock</h1>
//         <div className='clock'>
//           <p>
//             <span>
//               Time:
//             </span>
//             <span>
//               {hours}:{minutes}:{seconds} PDT
//             </span>
//           </p>
//           <p>Date: {this.state.time.toDateString()}</p>
//         </div>
//       </section>
//     );
//   }
// };

export default Clock;
