import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import NoteContext from '../context/NoteContext';

const FetchVideo = () => {
    const context=useContext(NoteContext)
    const {share}=context
    
   
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const show = share
                // console.log("set value", show)
                const pageItem = 50
                const apiKey = 'AIzaSyCghK9tRUQckaxDj0FLZbQr-U5jUdHqr-w'; // Replace with your API key
                const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${show}&maxResults=${pageItem}`;

                const response = await fetch(apiUrl);
                const data = await response.json();
               

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
    }, [ ]);

    return (
        <div className=' row container my-4'>
            {videos.map(video => (

                <Card key={video.videoId} video={video} />
            ))}
        </div>
    );
};

export default FetchVideo;
