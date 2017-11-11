/**
 *
 * Created by Lijun on 2017/11/11.
 */
import "bootstrap/dist/css/bootstrap.css"
import "./css/yx.css"
import React from "react"
import ReactDom from "react-dom"
import logo from "./images/banner/ban-text.png"
import News from "./news/news"
const Yx = ()=>(
    <header>
        <img src={logo} alt=""/>
        <News/>
        <News/>
        <News/>
    </header>
)



ReactDom.render(<Yx/>, document.getElementById("root"))