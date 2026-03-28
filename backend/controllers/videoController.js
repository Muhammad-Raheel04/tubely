import axios from 'axios';

export const getLatestVideo = async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",
            {
                params: {
                    part: "snippet",
                    playlistId: process.env.UPLOAD_PLAYLIST_ID,
                    maxResults: 1,
                    key: process.env.API_KEY,
                }
            }
        );

        const item = response.data.items[0];
        
        const video={
            videoId:item.snippet.resourceId.videoId,
            title:item.snippet.title,
            thumbnail:item.snippet.thumbnails.high.url,
            publishedAt:item.snippet.publishedAt,
        };

        return res.status(200).json({
            success:true,
            video,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}