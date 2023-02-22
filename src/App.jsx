import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      

<nav class="navbar navbar-expand-lg navbar-mainbg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./public/images/logo.png" alt="logo" width="50" height="50"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
        
				<svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80"
                onclick="this.classList.toggle('active')">
                <path class="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path class="line middle" d="m 30,50 h 40" />
                <path class="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
            </svg>
            </button>

            <div class=" collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav  me-auto mb-2 mb-lg-2 ">
                    <li class="nav-item item-1 ">
                        <a class="nav-link active" aria-current="page" href="#" id="btn1">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="btn2">發現音樂</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="btn3">音樂趨勢</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="btn4">關於我們</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" id="btn5">會員服務</a>
                    </li>
                </ul>



            </div>
        </div>
    </nav> 



  <footer className="footer">
  
    
  </footer>

   
    </div>
  )
}



export default App
