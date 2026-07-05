import "./Card.css"
export default function Card({name, children}){
    return (
        <section className="card">
        <h2>{name}</h2>
        {children}
        </section>
       
    )
}