import Search from './Search';
import Brands from './Brands';
import MainContext from '../MainContext';
import {useContext} from 'react';
import Download from './Download';
import {List,AutoSizer} from 'react-virtualized';
import Loader from './Loader';



const Content = () => {
    
const {brands,selectBrands}= useContext(MainContext)
const rowRenderer = ({ key, index, style, isScrolling, isVisible }) => {
     const content = isScrolling ? <Loader /> : <Brands brand={brands[index]}  />;
    return (
        <div style={style} key={key}>
            <Brands brand={brands[index]}  />
        </div>
    )
}

return (
    <main className="content">
        <header className="header">
            <Search/>
            {selectBrands.length !== 0 && <Download/>}
        </header>
        <section className="brands">
            <AutoSizer>
                {({height, width}) => (
                    <List
                        width={width}
                        height={height}
                        rowCount={brands.length}
                        rowHeight={113}
                        rowRenderer={rowRenderer}
                    />
                )}
            </AutoSizer>
        </section>
    </main>
)
}

export default Content