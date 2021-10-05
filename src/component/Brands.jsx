import React,{useContext,useState} from 'react'
import { getContrastYIQ } from '../helper';
import MainContext from '../MainContext';
import ClipboardButton from 'react-clipboard.js';

function Brands({brand}) {
    
    const {setSelectBrands,selectBrands,setCopied}=useContext(MainContext);
    
    
 
    const toggleSelected = () => {
		if (selectBrands.includes(brand.slug)) {
			setSelectBrands(selectBrands.filter(slug => slug !== brand.slug))
		} else {
			setSelectBrands([...selectBrands, brand.slug])
		}
	}

const setColor=(color)=>{
    setCopied(color);
}
    

    return (
    
    
         <div className={`brand ${selectBrands.includes(brand.slug) ? 'selected' : ''}`}>
			<h5 onClick={toggleSelected}>{brand.title}</h5>



 

<div className="brand-colors">
    {brand.colors.map((color)=>(
        <ClipboardButton component="span" onSuccess={()=>{setColor(color)}} data-clipboard-text={color} style={{
            '--bgColor':`#${color}`,
            '--textColor':`${getContrastYIQ(color)}`
        }}>
 {color}
        </ClipboardButton>
       
    ))}
</div>
</div>


        
    )
}

export default Brands;
