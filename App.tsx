import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TimeEntryForm from './components/TimeEntryForm';
import TimeEntryList from './components/TimeEntryList';
import TotalHours from './components/TotalHours';
import Timer from './components/Timer.tsx';
import type { TimeEntry } from './types/TimeEntry';

const App: React.FC = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (task: string, hours: number) => {
    const newEntry: TimeEntry = {
      id: uuidv4(),
      task,
      hours,
    };
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (updatedEntry: TimeEntry) => {
    setEntries(entries.map(entry =>
      entry.id === updatedEntry.id ? updatedEntry : entry
    ));
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mini Time Tracker</h1>
      <TimeEntryForm onAdd={addEntry} />
      <Timer onAdd={addEntry} />
      <TimeEntryList entries={entries} onDelete={deleteEntry} onEdit={editEntry} />
      <TotalHours entries={entries} />
    </div>
  );
};

export default App;
