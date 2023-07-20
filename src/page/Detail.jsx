import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import { useFirebaseAPI } from '../context/FirebaseAPIContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { currencyNumberFormat } from '../CommonFunction';
import OptionBox from '../components/OptionBox';
import { useState } from 'react';

export default function Detail(){
    const { productId } = useParams();
    const {firebase} = useFirebaseAPI();
    const {isLoading, data} = useQuery(['readProduct', {productId}], ()=> firebase.readProduct(productId) ,{
        staleTime: 1000 * 60 * 60 * 24,
    })
    const [selected, setSelected] = useState("사이즈")
    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    if(isLoading){
        return <div></div>
    }

    const imgsURL = data.img.map((item)=> item.mobile.detail)
    const {brand, name, price} = data;

    return(
        <div className='flex align-top justify-between'>
            <section className="w-1/2">
                <Swiper>
                    {imgsURL.map((imgURL) => 
                        <SwiperSlide key={imgURL}><img src={imgURL} alt={name} /></SwiperSlide>
                    )}
                </Swiper>
            </section>

            <section className="w-1/2 py-7 px-10">
                <div>
                    <p className='text-sky-500 font-medium mb-2'>{brand}</p>
                    <p className='text-2xl font-semibold mb-1'>{name}</p>
                    <p className='text-xl font-semibold'>{currencyNumberFormat.format(price)}<span className='text-lg'>원</span> </p>
                </div>

                <div className='my-7 py-5 border-y'>
                    <select id="" className="w-full p-3 text-lg rounded-lg border border-neutral-200" onChange={handleSelect} value={selected}>
                        <option value="사이즈">사이즈</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>

                    <OptionBox price={price} size={selected}/>
                </div>
                

                <button className='w-full rounded-md p-3 bg-sky-500 text-white font-semibold'>장바구니</button>
            </section>
            

            
        </div>
    )
}