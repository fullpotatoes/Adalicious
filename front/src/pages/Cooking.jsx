import Header from "../components/Header.jsx";

export default function Cooking() {
    return (
        <div className="cooking">
            <Header />
            <div>
                <p>"Merci pour ta commande {name}"</p>
            </div>
            <h3>Suivi:</h3>
            <p>
                En préparation
                "image du plat"
                "nom du plat"
            </p>
        </div>
    )
}