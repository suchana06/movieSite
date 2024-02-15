import './Head.css'
import Search from './Search';
import Topick from './Topick';
function Head() {
    return (
        <>
            <div className="background --coly8">
                <h1>Welcome to MovieGeeks</h1>
            </div>
            <h5 className="typewriter">Know Your Favourite Movies </h5>
            <Search></Search>
            <Topick></Topick>
        </>
    )
}
export default Head;
