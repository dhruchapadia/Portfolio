import React, { useState, useEffect } from 'react';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
  const basic = btoa(`${client_id}:${client_secret}`);
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { access_token } = await getAccessToken();
        const nowPlayingResponse = await getNowPlaying(access_token);
        if (nowPlayingResponse.ok) {
          const nowPlayingData = await nowPlayingResponse.json();
          setNowPlaying(nowPlayingData.item);
        } else {
          setNowPlaying(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    return response.json();
  };

  const getNowPlaying = async (access_token) => {
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  return (
    <div className="now-playing">
      {nowPlaying ? (
        <div>
        <h4>Juzou is currently listening</h4>
          <a href={nowPlaying.external_urls.spotify}><h3>{nowPlaying.name}</h3></a>
          <p>{nowPlaying.artists.map(artist => artist.name).join(', ')}</p>
        </div>
      ) : (
        <p>Juzou is not listening to Spotify right now.</p>
      )}
    </div>
  );
};

export default NowPlaying;
