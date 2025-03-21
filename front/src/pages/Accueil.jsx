import { useState } from 'react';

export default function Accueil() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        console.log(inputValue);
        // Ajoutez ici votre logique de traitement
    };

    return (
        <div className="container">
            <h1>Bienvenue chez Adalicious</h1>
            <div className="instruction">
                <p>Pour commencer, peux-tu me donner ton prénom :</p>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="text-input"
                />
                <button
                    onClick={handleSubmit}
                    className="submit-button"
                    disabled={!inputValue.trim()}
                >
                    valider
                </button>
            </div>
        </div>
    );
}