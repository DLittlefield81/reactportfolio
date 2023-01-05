import React, {Component } from 'react'

class MyResume extends Component {

    render() {
        let iframeSrc = "https://docs.google.com/document/d/e/2PACX-1vQgwHLKVMjkTiePzFmT6bhQfU0Ga3QHlOsezBmJbcqquuZwScIoni-qFcVHZlToV7f_G4v1fIXHkDAT/pub?embedded=true";
       
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