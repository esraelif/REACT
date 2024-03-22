import data from "../data.js"
import IMG from "./styles/ImageSSS.jsx";
import KartSSS from "./styles/KartSSS.jsx";
const Card = () => {
  return (
    <div>
      {data.map((item) => (

        <KartSSS key={item.id} nida={item.id % 2 === 1 && "row-reverse"}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          <IMG src={`./images/${item.image}`} alt="" />
        </KartSSS>


      ))}
    </div>
  );
}

export default Card