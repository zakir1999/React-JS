import reactpic from './assets/react.png'

function Card(){
    return (
       
        <div className="card">
            <img className="card-img" src={reactpic}></img>
            <h1 className="title">React-JS</h1>
            <p className="detials">This is really help  for web Application. Without it you can't survive.</p>

        </div>
    
    );
}
export default Card