import React from 'react';
import '../../assets/css/style.css';

const Card = ({ data, cardIndex }) => {
    return (
        <div>

            {data[cardIndex].map(item => {


                return (
                    <div className="card text-center mt-5">
                        <div>
                            <h3 className="text-Header">{item.title}</h3>
                            <h2 className="text-Header">{item.name}</h2>
                            <h2 className="text-Header">{item.diploma}</h2>
                        </div>
                    </div>
                )


            })}

        </div>
    );
}

export default Card;