import { useEffect, useState } from "react"

const ChronosSection = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const d = new Date();
  const [currentTime, setCurrentTime] = useState({
    s: d.getSeconds(),
    m: d.getMinutes(),
    h: d.getHours()
  })

  // Instead of using IF ELSE statement, observe how the two useEffect was executed.
  // normal clock when no timelapse
  useEffect(() => {
    let timer = setTimeout(() => {
      setCurrentTime({
        h: d.getHours(),
        m: d.getMinutes(),
        s: d.getSeconds()
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentTime]);

  const [rollTime, setRollTime] = useState(currentTime);

  // timelapse animation
  useEffect(() => {
    if (!selectedTime) return;

    const [sh, sm] = selectedTime.split(":").map(Number);

    if (sh === rollTime.h && sm === rollTime.m) {
      setRollTime({
        h: sh,
        m: sm,
        s: 0
      });
      return;
    }

    const timer = setTimeout(() => {
      setRollTime(prev => {
        let {h, m, s} = prev

        s++;
        
        if (s >= 60) {
          s = 0;
          m++;
        }

        if (m >= 60) {
          m = 0;
          h++;
        }

        if (h >= 24) h = 0;

        return {s, m, h};
      });
    }, 0);
    
    return () => clearTimeout(timer);
  }, [rollTime, selectedTime]);

  function handleTime(e) {
    const value = e.target.value;
    setSelectedTime(value);
  }

  return (
    <section
      id="chronos"
      style={{
        background: rollTime.h > 5 && rollTime.h < 17 ? "white" : "black",
        color: rollTime.h > 5 && rollTime.h < 17 ? "black" : "white",
        transition: "background 1s linear, color 1s linear"
      }}
    >
      <h1>Chronos</h1>

      Select a Time to timelapse: <input type="time" onChange={handleTime} />
      
      {selectedTime && (
        <p>Time Selected: {selectedTime}</p>
      )}

      <p>Current Time:</p>
      <h2>
        {String(currentTime.h).padStart(2, "0")}:
        {String(currentTime.m).padStart(2, "0")}:
        {String(currentTime.s).padStart(2, "0")}
      </h2>

      {selectedTime ? (
        <>    
          <p>Timelapse:</p>
          <h2>
            {String(rollTime.h).padStart(2, "0")}:
            {String(rollTime.m).padStart(2, "0")}:
            {String(rollTime.s).padStart(2, "0")}
          </h2>
        </>
      ) : (
        <>
          <p>Normal Timelapse: [Time rolls fast if time will be selected]</p>
          <h2>
            {String(currentTime.h).padStart(2, "0")}:
            {String(currentTime.m).padStart(2, "0")}:
            {String(currentTime.s).padStart(2, "0")}
          </h2>
        </>
      )}
      
      <p>
        Note: When user will select a time...
        The seconds, minutes and hours animate in a timelapse.
        The time roll from the current time to the selected time.
        The background gradually change depending on time rolling time.
        The background will turn to night(dark) or day(white).
      </p>
    </section>
  )
}

export default ChronosSection