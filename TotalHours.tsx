import React from 'react';
import type { TimeEntry } from '../types/TimeEntry';

interface Props {
  entries: TimeEntry[];
}

const TotalHours: React.FC<Props> = ({ entries }) => {
  const total = entries.reduce((sum, entry) => sum + entry.hours, 0);
  return <p><strong>Total hours worked: {total.toFixed(2)}</strong></p>;
};

export default TotalHours;