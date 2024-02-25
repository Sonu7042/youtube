import React from 'react'

const Card = (props) => {
  const {video}=props


  return (
    <div className='col-md-4  my-2'>
      <div className="card" style={{width:"400px"}} >
      <iframe
            title={video.title} 
            width="400"
            height="215"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="card-body">
            <p className="card-title">{video.title}</p>
           
          </div>
      </div>
    </div>
  )
}

export default Card