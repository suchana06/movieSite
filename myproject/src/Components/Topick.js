import './Topick.css';
import './Division';
import Division from './Division';
import img1 from './oppen.jpg'
import img2 from './barbie.jpg'
import img3 from './nun.jpg'
import img4 from './jawan.jpg'
import img5 from './south.jpg'
function Topick() {
    return (
        <>
            <div className="contain">
                <h2 className='st'>
                    <b>Most awaited releases of 2023</b>
                </h2>
                <hr></hr>
                <div id='div1' className='wrapper'>
                    <Division img1={img1} ></Division>
                    <Division img1={img2}></Division>
                    <Division img1={img3}></Division>
                    <Division img1={img4}></Division>
                    <Division img1={img5}></Division>

                </div>

            </div>

        </>

    );
}

export default Topick;
