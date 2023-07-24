import { useState } from "react";
import { IoClose, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { currencyNumberFormat } from "../CommonFunction";

export default function OptionBox({price, option, changeOption}){
    // const [qty, setQty] = useState(opt.qty);

    const handleQty = (e) => {
        e.preventDefault();
        const btnName = e.currentTarget.name;
        const btnValue = e.currentTarget.value;
        let changed = [];
        if(btnName === "plus"){
            changed = option.map((opt)=>{
                if(opt.size === btnValue){
                    return ({...opt, qty : opt.qty+1})
                }
                return({...opt})
            })
        }else if(btnName === "minus"){
            changed = option.map((opt)=>{
                if(opt.size === btnValue && opt.qty !== 1){
                    return ({...opt, qty : opt.qty-1})
                }
                return({...opt})
            })
        }
        changeOption(changed)
    }

    const handleDel = (e) => {
        e.preventDefault();
        const btnValue = e.currentTarget.value;
        changeOption(option.map((opt)=>{
            if(opt.size === btnValue){
                return ({...opt, qty : 0})
            }
            return({...opt})
        }))
    }

    
    return option.map((opt)=>{
        if(opt.qty>0){
            return(
                <div key={opt.size} className='optionBox relative mt-3 p-5 rounded-lg bg-[#f4f4f5]'>
                    <p className='text-lg mb-3'>{opt.size}</p>
        
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center justify-between'>
                            <button className={`bg-white rounded-full p-2 mr-3 ${opt.qty === 1 && `cursor-default text-[#ccc]`}`} onClick={handleQty} name="minus" value={opt.size}><IoRemoveOutline /></button>
                            <span className='mr-3'>{opt.qty}</span>
                            <button className="bg-white rounded-full p-2" onClick={handleQty} name="plus" value={opt.size}><IoAddOutline /></button>
                        </p>
                        <p className='text-lg'>{currencyNumberFormat.format(price * opt.qty)}원</p>
                    </div>
        
                    <button className='absolute top-2 right-2' onClick={handleDel} value={opt.size}><IoClose className="text-xl font-bold" /></button>
                    
                </div>
            )
        }
    })
    
    
}