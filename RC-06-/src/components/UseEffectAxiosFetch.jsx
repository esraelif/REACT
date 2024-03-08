import React, { useEffect, useState } from 'react';
import axios from "axios";

const UseEffectAxiosFetch = () => {
    const [people, setPeople] = useState([])

    // //!1.Yol fetch then yapısı(chain):
    // useEffect(() => {

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((data) => setPeople(data))
    // }, [])

    //! 2.yol fetch async await

    // const getData = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data = await res.json()
    //     setPeople(data)

    // }
    // useEffect(() => {
    //     getData()

    //     return () => {

    //     }
    // }, [])

    //! 3.yol axios then(chain)

    // useEffect(() => {

    //     axios.get("https://jsonplaceholder.typicode.com/users").then((veri) => setPeople(veri.data))


    // }, [])


    //! 4.yol axios async await

    const getData = async () => {
        const res = await axios("https://jsonplaceholder.typicode.com/users");

        setPeople(res.data)

    }
    useEffect(() => {
        getData()

        return () => {

        }
    }, [])








    return (

        <div className='container text-center mt-4'>
            <div className="row">
                {people.map(({ name, username, id, phone }) => {
                    return (
                        <div key={id} className='col-12 col-sm-6 '>
                            <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`} alt="" style={{ height: "64px" }} />
                            <h5> {name} </h5>
                            <h6>{username}</h6>
                            <h6>{phone}</h6>
                        </div>


                    );
                })}

            </div>
        </div>
    );
}

export default UseEffectAxiosFetch;
