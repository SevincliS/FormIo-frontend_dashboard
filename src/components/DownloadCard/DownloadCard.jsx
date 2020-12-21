import React from 'react';
import {SupportIcon} from '../../assets/icon/icon'

const Forms = [
    {
        "name": "Hoops",
        "version" : "1.6.4",
        "date" : "26 Jan 2020",
        "new": "New"
    },
    {
        "name": "Possible",
        "version" : "1.3.1",
        "date" : "15 Dec 2019"
    },
    {
        "name": "Menatek",
        "version" : "1.7.2",
        "date" : "05 Feb 2020"
    },
]

const FormDownloadRow = Forms.map((Form) => {
    return (
        <li class="sp-pdl-item">
            <div class="sp-pdl-desc">
                <div class="sp-pdl-info">
                     <h6 class="sp-pdl-title"><span class="sp-pdl-name">{Form.name}</span> <span class="badge badge-dim badge-primary badge-pill">{Form.new}</span></h6>
                    <div class="sp-pdl-meta">
                        <span class="version">
                            <span class="text-soft">Version: </span> <span>{Form.version}</span>
                        </span>
                        <span class="release">
                            <span class="text-soft">Release Date: </span> <span>{Form.date}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="sp-pdl-btn">
                <a href="#" class="btn btn-primary">Download</a>
            </div>
        </li>
    )
})


class DownloadCard extends React.Component {

    render(){
        return (
            <ul class="sp-pdl-list">
                {FormDownloadRow}
            </ul>
        )
    }
}
    

export default DownloadCard



