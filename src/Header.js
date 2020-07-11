import React, { Component } from 'react';

const listname=[
    {
        id:0,
        name:'Introduction'
    },
    {
        id:1,
        name:'Archive'
    },
    {
        id:2,
        name:'Paper'
    },
    {
        id:3,
        name:'Portfolio'
    },
    {
        id:4,
        name:'Contact'
    }

]
function HeaderList({name}){
    return <span>{name}</span>
}
class Header extends Component{
    render(){
        return(
            <div class="header">
                <span class="header__title">
                    <strong>Tech Blog</strong>
                </span>

             <div class="header__list">
                {listname.map(list=>(
                    <HeaderList key={list.id} name={list.name}/>
                ))}
             </div>
                
                <input class="search"></input>
             
                <span>facebook</span>
                <span>github</span>
                <span>instagram</span>

            </div>
        );
    }
}
export default Header;