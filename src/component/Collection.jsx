import React,{useContext,useEffect} from 'react';
import { useParams,useHistory } from 'react-router';
import MainContext from '../MainContext';
import Brands from './Brands';
import {Link } from "react-router-dom";
import Download from './Download';
import LazyLoad from 'react-lazyload';
import {GrLinkPrevious} from "react-icons/gr";
import Loader from './Loader';


export const Collection = (props) => {
    const {selectBrands,setSearch,setSelectBrands,brands}=useContext(MainContext);
    const {slugs}=useParams();
   
    const history=useHistory();

    const clearSelectedBrands = () => {
		setSelectBrands([])
		setSearch('')
		history.push('/')
	}

	useEffect(() => {
		setSelectBrands(slugs.split(','))
	}, [])

    return (
        <div>
          <main className="content">
            <div className="header">
            <Link to="/" onClick={clearSelectedBrands}>
					<a className="back-btn">
                    <GrLinkPrevious />
						All Brands
					</a>
				</Link>
              
                {selectBrands.length ? <Download/> : ""}

                 
            </div>
            <section className="brands">
                {selectBrands.map((slug)=>{
                    let brand=brands.find(brand=>brand.slug===slugs)
                    return(
                        <LazyLoad once={true} key={brand.slug} overflow={true} placeholder={<Loader/>}>
                            <Brands brand={brand}/>
                        </LazyLoad>
                        
                    )
                }

                )}

            </section>
        </main>
        </div>
    )
}
