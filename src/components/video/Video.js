import React from 'react';
import './_video.scss';
import {AiFillEye} from 'react-icons/ai';


const Video = () => {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://i.ytimg.com/vi/sqN9HMePojE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARzKxEwxE-UaUnkTbo3AFohEkLiQ" alt="" />
                <span>05:43</span>
            </div>
            <div className="video_title">
                create app in 5 minutes #made by chintu
            </div>
            <div className="video_details">
                <span>
                    <AiFillEye/> 5m Views •
                </span>
                <span> 5 days ago</span>
            </div>
            <div className="video_channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnhXevlgYQpz_DItARfrh98H78oS-TjylMiOBiNE=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
