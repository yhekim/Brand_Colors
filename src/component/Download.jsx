import React,{useContext,useEffect,useState} from 'react';
import MainContext from '../MainContext';
import {GrLink,GrDownload,GrClose,} from "react-icons/gr";
import {Link } from "react-router-dom";

const Download = () => {
    const {selectBrands,brands,setSelectBrands}=useContext(MainContext);
const [downloadUrl,setDownloadUrl]=useState("");
const [cssMethods,setCssMethods]=useState("css");

  useEffect(() => {
      if(selectBrands.length > 0){
        let output = ' ';
          switch (cssMethods){
              case 'css':
                output += ':root {\n'
                selectBrands.map((slug)=>{
                    let brand=brands.find(brand=>brand.slug===slug)
                    brand.colors.map((color,key)=>{
                        output=` --${slug}--${key}: #${color};\n`
                    })
                })
                output += '}'
                  break;
                  case 'scss':
                    selectBrands.map((slug)=>{
                        let brand=brands.find(brand=>brand.slug===slug)
                        brand.colors.map((color,key)=>{
                            output=` \$${slug}--${key}: #${color};\n`
                        })
                    })
                    break;
                    case 'less':
                        selectBrands.map((slug)=>{
                            let brand=brands.find(brand=>brand.slug===slug)
                            brand.colors.map((color,key)=>{
                                output=` @${slug}--${key}: #${color};\n`
                            })
                        })
                        break;
                        
          }
          
          
          const blob=new Blob([output]);
          const url=URL.createObjectURL(blob);
          setDownloadUrl(url);
          return () =>{
              URL.revokeObjectURL(url);
              setDownloadUrl("")

          }
      }
      
  }, [selectBrands,cssMethods]);

//    const getLink=()=>{
//        prompt("Here's the URL to share",`http://localhost:3000/collection/${selectBrands.join(',')}`);
//    }

    return (
        <div className="download">
           
           <div className="actions">
           <select className="selectName" onChange={(e)=>setCssMethods(e.target.value)}>
                   <option  value="css">CSS</option>
                   <option value="scss">SCSS</option>
                   <option value="less">LESS</option>
                   <option value="ase">ASE</option>
                   <option value="stylus">STYLUS</option>
               </select> 
               <a download={`brands.${cssMethods}`} href={downloadUrl}>
                   <GrDownload/>
               </a>
               
               <Link to={`/collection/${selectBrands.join(',')}`}><GrLink/></Link>
           </div>
           <div className="selected" onClick={()=>{
              
              setSelectBrands([])
           }}>
           <GrClose/>
               {selectBrands.length} brands collected
             
           </div>
        </div>
    );
}

export default Download;
