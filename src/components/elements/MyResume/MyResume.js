import React, {Component } from 'react'

class MyResume extends Component {

    render() {
        let iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vRD89-io78dIPBockkIdR77lWkIG2xqft4kmXc4oBpc_CuHmx8vr_gC3ACwkY6Ppw/pub?embedded=true";
       
        let style = {
            width: '90%',
            height: '1100px',
            border: 'none'
        };

        return (
            <div>
                <iframe title="Dennis Littlefield Resume" src={iframeSrc}
                    style={style}>
                </iframe>
            </div>
        )
    }
}

    export default MyResume