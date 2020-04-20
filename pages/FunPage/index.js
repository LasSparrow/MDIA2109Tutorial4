import {useEffect} from 'react';
import './fun.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import {FaCookieBite} from 'react-icons/fa';

const Fun = () => {

useEffect(()=>{
    setTimeout(()=>{
        document.querySelector("#funpage").style.right = 0;
    }, 100);
}, []);

return <div id="funpage">
    <div id="welcomefun">
        <FaCookieBite size="2em"/><Header fontSize={24} text="Fun Page" />
    </div>
    <br />
    <CustomButton text="Click Here for Fun!"/>
</div>
}

export default Fun;