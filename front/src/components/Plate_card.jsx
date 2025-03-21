export default function PlateCard(){
    return (
        <div className="plate-card">
            <div>"exemple d'image</div>
            <div>"exemple de plat"</div>
            <div>"exemple description"</div>
            <button onClick={()=>window.location.reload()}>Reload</button>
        </div>
    )
}