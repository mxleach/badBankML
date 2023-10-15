import React, {useState } from 'react';
import BankSelector from './BankSelector';

function LandingPage() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);




return (
    <div>
        <h1>Select a Character:</h1>
        <select onChange={(e) => setSelectedCharacter(e.target.value)}>
        <option value="">Select Character</option>
        <option value="franklin">Franklin Clinton</option>
        <option value="trevor">Trevor Philips</option>
        <option value="michael">Michael DeSanta</option>
        </select>
        {selectedCharacter && <BankSelector character={selectedCharacter} />}
    </div>
);
}

export default LandingPage;