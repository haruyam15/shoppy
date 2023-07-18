
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'
import { useFirebaseAPI } from '../context/FirebaseAPIContext';
import { useQuery } from 'react-query'

export default function Products(){
    const {firebase} = useFirebaseAPI();

    const {isLoading, data} = useQuery(['readProduct'], ()=> firebase.readProduct() ,{
        staleTime: 1000 * 60 * 60 * 24,
    })

    if(isLoading){
        return <div></div>
    }

    return (
        <ul className='grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-3 md:gap-x-7 md:gap-y-12 lg:grid-cols-5 my-7'>
            {
                data.map((item) => {
                    return(
                        <li key={uuid()}>
                            <Link to={`/detail/${item.id}`}>
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