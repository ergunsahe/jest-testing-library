import React from 'react'

const Videos = ({videos=[]}) => {

    if (videos.length <=0){
        return <h1>Sorry, no videos found</h1>
    }
    return (
        <div>
            {
                videos.map((video, index) =>{
                    return <h3 key={index} >{video}</h3>
                })
            }
        </div>
    )
}

export default Videos
