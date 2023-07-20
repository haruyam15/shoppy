import { useState } from "react";
import { IoClose, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { currencyNumberFormat } from "../CommonFunction";

export default function OptionBox({price, size}){

    const [qty, setQty] = useState(1);

    const handleQty = (e) => {
        e.preventDefault();
        const btnName = e.currentTarget.name
        if(btnName === "plus"){
            setQty(prev=>prev+1)
        }else if(btnName === "minus" && qty !== 1){
            setQty(prev=>prev-1)
        }
     
    }
    
    return(
        <div className='relative mt-3 p-5 rounded-lg bg-[#f4f4f5]'>
            <p className='text-lg mb-3'>{size}</p>

            <div className='flex items-center justify-between'>
                <p className='flex items-center justify-between'>
                    <button className={`bg-white rounded-full p-2 mr-3 ${qty === 1 && `cursor-default text-[#ccc]`}`} onClick={handleQty} name="minus"><IoRemoveOutline /></button>
                    <span className='mr-3'>{qty}</span>
                    <button className="bg-white rounded-full p-2" onClick={handleQty} name="plus"><IoAddOutline /></button>
                </p>
                <p className='text-lg'>{currencyNumberFormat.format(price * qty)}원</p>
            </div>

            <button className='absolute top-2 right-2'><IoClose className="text-xl font-bold" /></button>
            
        </div>
    )
}