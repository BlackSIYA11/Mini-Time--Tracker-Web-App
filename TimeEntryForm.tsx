import React, { useState } from 'react';

interface Props {
  onAdd: (task: string, hours: number) => void;
}

const TimeEntryForm: React.FC<Props> = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [hours, setHours] = useState<number>(0);
  const [error, setError] = useState<{ task?: string; hours?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newError: { task?: string; hours?: string } = {};

    if (!task.trim()) {
      newError.task = 'Task name is required.';
    }

    if (hours <= 0) {
      newError.hours = 'Hours must be greater than 0.';
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    if (window.confirm(`Add task "${task}" with ${hours} hour(s)?`)) {
      onAdd(task.trim(), hours);
      setTask('');
      setHours(0);
      setError({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <input
          type="text"
          placeholder="Task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {error.task && <p style={{ color: 'red', marginTop: '0.25rem' }}>{error.task}</p>}
      </div>

      <div>
       <input
         type="number"
         placeholder="Hours"
         value={hours}
         onChange={(e) => setHours(Number(e.target.value))}
         min={0}
        step={0.25}
        inputMode="decimal"
       />
        {error.hours && <p style={{ color: 'red', marginTop: '0.25rem' }}>{error.hours}</p>}
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default TimeEntryForm;
