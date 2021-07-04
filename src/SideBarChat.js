import React from 'react'
import './SideBarChat.css'
import {Avatar} from '@material-ui/core'
function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h3>Channel Name</h3>
                <p>Lets roll...</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}

export default SideBarChat
