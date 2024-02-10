import React, { useState, useEffect } from 'react';
import './Card.css'

const YouTubeAPIExample = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const show="Upnews"
        const pageItem=50
        const apiKey = 'AIzaSyCghK9tRUQckaxDj0FLZbQr-U5jUdHqr-w'; // Replace with your API key
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${show}&maxResults=${pageItem}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

        // Extract the videos from the response
        const fetchedVideos = data.items.map(item => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        }));
 
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className='card'>
       {videos.map(video => (
        <div key={video.videoId}>
          <iframe
            title={video.title}
            width="400"
            height="215"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YouTubeAPIExample;
