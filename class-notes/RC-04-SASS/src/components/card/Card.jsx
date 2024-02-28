import './Card.scss';

const Card = ({ veri }) => {
    console.log(veri)
    return (
        <div className='konteynir'>
            {veri.map(({ name, job, comment, img, id }) => {




                return (

                    <div key={id} className='kart'>
                        <h1>{name}</h1>
                        <h2>{job}</h2>
                        <p>{comment}</p>
                        <img src={img}></img>

                        <div className='btn-div'>
                            <button className='btn-div--small'>Small</button>
                            <button className='btn-div--large'>Large</button>
                        </div>


                    </div>
                )


            })}
        </div>
    );
}

export default Card;
