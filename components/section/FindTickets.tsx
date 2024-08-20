import { Road_Rage } from 'next/font/google';
import React from 'react';

const roadRage = Road_Rage({ subsets: ['latin'], weight: ['400'] });

function FindTickets() {
  return (
    <div>
      <h1 className={roadRage.className}>Road Rage</h1>
      FindTickets
    </div>
  );
}

export default FindTickets;
