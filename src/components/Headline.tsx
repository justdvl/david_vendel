import React from 'react';

const Headline = () => {

    const [closed, setClosed] = React.useState(false)

    return (
            <div className="headline-main" onClick={() => {window.location.href="http://davidvendel.com"}} style={closed ? {display:"none"} : {}}>
                <div className="headline-neon">
                    <span className="headline-text" data-text="">davidvendel.com</span>
                    <span className="headline-gradient"></span>
                    <span className="headline-spotlight"></span>
                </div>
                <div style={{color:"#eee", float:"right", position:"absolute", right:4, padding:"0px 10px", cursor : "pointer"}} onClick={(e)=>{e.stopPropagation(); setClosed(true)}}>x</div>
            </div>
        )
}

export default Headline