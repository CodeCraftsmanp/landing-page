import React, { useState } from 'react';
import './App.css'; // Make sure to import App.css

const EmbedVideo = () => {
   const [videoUrl, setVideoUrl] = useState('');
   const [embedUrl, setEmbedUrl] = useState('');

   const handleEmbed = () => {
       const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/);
       const videoId = videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : '';
       setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
   };

   return (
       <div className="embed-container">
           <h1 className="embed-heading">Watch YouTube Videos Without Ads</h1>
           <p className="embed-description">
               Tired of interruptions? Use this tool to watch your long YouTube videos ad-free!
               Simply paste the video URL in the field below, click <strong>Embed Video</strong>, and enjoy seamless viewing without distractions.
           </p>

           <input
               type="text"
               placeholder="Enter YouTube video URL"
               value={videoUrl}
               onChange={(e) => setVideoUrl(e.target.value)}
               className="embed-input"
           />
           <button onClick={handleEmbed} className="embed-button">
               Embed Video
           </button>

           {embedUrl && (
               <div className="embed-video-container">
                   <iframe
                       src={embedUrl}
                       title="YouTube video player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       referrerPolicy="strict-origin-when-cross-origin"
                       allowFullScreen
                   ></iframe>
               </div>
           )}
       </div>
   );
};

export default EmbedVideo;
