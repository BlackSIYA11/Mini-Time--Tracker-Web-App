import React, { useState } from 'react';
import type { TimeEntry } from '../types/TimeEntry';

interface Props {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
  onEdit: (entry: TimeEntry) => void;
}

const TimeEntryList: React.FC<Props> = ({ entries, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [task, setTask] = useState('');
  const [hours, setHours] = useState(0);

  const startEditing = (entry: TimeEntry) => {
    setEditingId(entry.id);
    setTask(entry.task);
    setHours(entry.hours);
  };

  const saveEdit = (id: string) => {
    // Confirm before saving
    if (window.confirm('Are you sure you want to save the changes?')) {
      onEdit({ id, task, hours });
      setEditingId(null);
    }
  };

  const confirmDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this time entry?')) {
      onDelete(id);
    }
  };

  if (entries.length === 0) return <p>No time entries yet.</p>;

  return (
    <ul>
      {entries.map(entry => (
        <li key={entry.id}>
          {editingId === entry.id ? (
            <>
              <input value={task} onChange={e => setTask(e.target.value)} />
              <input
                type="number"
                value={hours}
                onChange={e => setHours(Number(e.target.value))}
                min={0}
                step={0.01}
              />
              <button onClick={() => saveEdit(entry.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{entry.task}</strong>: {entry.hours} hr(s)
              <button onClick={() => startEditing(entry)}>Edit</button>
              <button onClick={() => confirmDelete(entry.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TimeEntryList;
