import Link from 'next/link';
import Router from 'next/router';
import Header from '../comps/Header';
import {GiPawHeart} from 'react-icons/gi';
import './index.css';

function ClickIndex(){
    // if(confirm("Are you sure?")){
    //     //move to ChatPage
    //     Router.push("/ChatPage");
    // }
    document.querySelector("#mainapp").style.opacity = 0;
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

// function ClickChat(){
//     document.querySelector("#mainapp").style.opacity = 0;
//     document.querySelector("#mainapp").style.left = "-100%";
//     setTimeout(function(){
//         Router.push("/ChatPage");
//     }, 1000)
// }

// function ClickContact(){
//     document.querySelector("#mainapp").style.opacity = 0;
//     document.querySelector("#mainapp").style.left = "-100%";
//     setTimeout(function(){
//         Router.push("/Contact");
//     }, 1000)
// }

const Index = () =><div id="mainapp">
    <div onClick={ClickIndex}><Header text="Index" fontSize={25}/></div>
    <GiPawHeart color="red" size="3em"/><br />
    <Link href="/ChatPage"><a>Chat Page</a></Link>
    <br />
    <Link href="/Contact"><a>Contact Page</a></Link>
    <br />
    <Link href="/FunPage"><a>Fun Page</a></Link>
    <br />
    <Link href="/AboutPage"><a>About Page</a></Link>
    {/* <div onClick={ClickChat}>Chat Page</div>
    <div onClick={ClickContact}>Contact Page</div> */}
</div>

export default Index;