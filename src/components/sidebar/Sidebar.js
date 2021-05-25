import React from 'react';
import './_sidebar.scss';

import { 
    MdSubscriptions, 
    MdExitToApp, 
    MdThumbUp, 
    MdHistory, 
    MdLibraryBooks, 
    MdHome, 
    MdSentimentDissatisfied
} from "react-icons/md";

const Sidebar = ({visible, handleToggleSidebar}) => {
    return (<nav className={visible ? "sidebar open" : "sidebar"}
    onClick={() => handleToggleSidebar(false)}>
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscription</span>
            </li>
            <li>
                <MdThumbUp size={23} />
                <span>Likes</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't know</span>
            </li>
            <hr/>
            <li>
                <MdExitToApp size={23} />
                <span>Logout</span>
            </li>
            <hr/>
        </nav>)
    
}
export default Sidebar;