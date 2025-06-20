import React, { useState, useEffect } from 'react';

interface Props {
  onAdd: (task: string, hours: number) => void;
}

const Timer: React.FC<Props> = ({ onAdd }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (running && !paused) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running, paused]);

  const stopAndSave = () => {
    const hours = seconds / 3600;
    if (task && hours > 0) {
      onAdd(task.trim(), Number(hours.toFixed(2)));
    }
    setRunning(false);
    setPaused(false);
    setSeconds(0);
    setTask('');
    setError('');
  };

  const handleStart = () => {
    if (!task.trim()) {
      setError('Please enter a task before starting the timer.');
      return;
    }
    setRunning(true);
    setPaused(false);
    setError('');
  };

  const pauseTimer = () => setPaused(true);
  const resumeTimer = () => setPaused(false);

  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Task name for timer"
        value={task}
        onChange={e => setTask(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          marginBottom: '1rem',
          fontSize: '1rem'
        }}
      />
      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}

      <div style={{ margin: '1rem 0' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          ⏱ {Math.floor(seconds / 60)}:{('0' + (seconds % 60)).slice(-2)}
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={handleStart} disabled={running && !paused}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!running || paused}>
          Pause
        </button>
        <button onClick={resumeTimer} disabled={!running || !paused}>
          Resume
        </button>
        <button onClick={stopAndSave} disabled={!running}>
          Stop & Save
        </button>
      </div>
    </div>
  );
};

export default Timer
