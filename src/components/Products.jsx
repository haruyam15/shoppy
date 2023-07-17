import { ref, child, get } from "firebase/database";
import { db } from "../firebase";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'

export default function Products(){
    const [data, setData] = useState([])

    useEffect(()=>{
        const dbRef = ref(db);
        get(child(dbRef, "/productList"))
          .then(snapshot => {
            if (snapshot.exists()) {
                setData(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
          .catch(error => {
          console.error(error);
        });
    },[])

    if(data.length !== 0){
        return(
            <ul className='grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-3 md:gap-x-7 md:gap-y-12 lg:grid-cols-5 my-7'>
                {
                    data.map((item) => {
                        return(
                            <li key={uuid()}>
                                <Link to='/detail'>
                                    <div className='rounded-lg overflow-hidden mb-3'>
                                        <img src={item.img[0].pc.detail} alt={item.name} />
                                    </div>
                                    <dl className="flex flex-col justify-between">
                                        <dt className='line-clamp-2'>{item.name}</dt>
                                        <dd>{item.price}원</dd>
                                    </dl>
                                </Link>
                            </li>
                        )
                        
                    })
                }
            </ul>
        )
    }

    
}