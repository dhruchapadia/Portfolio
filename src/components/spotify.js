import React, { useState, useEffect } from 'react';

const Spotify = () => {
  const [topTracksShortTerm, setTopTracksShortTerm] = useState([]);
  const [topTracksLongTerm, setTopTracksLongTerm] = useState([]);
  const [topArtist, setTopArtist] = useState([]);

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
 
  const basic = btoa(`${client_id}:${client_secret}`);
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
  const TOP_SHORTTERM_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
  const TOP_LONGTERM_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=long_term`;
  const TOP_ARTIST_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=long_term`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { access_token } = await getAccessToken();
        const shorttrackResponse = await gettopTracksShortTerm(access_token);
        const shorttrackData = await shorttrackResponse.json();
        setTopTracksShortTerm(shorttrackData.items);

        const longtrackResponse = await gettopTracksLongTerm(access_token);
        const longtrackData = await longtrackResponse.json();
        setTopTracksLongTerm(longtrackData.items);

        const topartistResponse = await getTopArtist(access_token);
        const topartistData = await topartistResponse.json();
        setTopArtist(topartistData.items);
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

  const gettopTracksShortTerm = async (access_token) => {
    return fetch(TOP_SHORTTERM_TRACK_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const gettopTracksLongTerm = async (access_token) => {
    return fetch(TOP_LONGTERM_TRACK_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const getTopArtist = async (access_token) => {
    return fetch(TOP_ARTIST_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  return (
    <div>
      <h1 className ='title'>Top Tracks</h1>
      <h6 className ='title'>Explore my real-time top tracks and artists, updated dynamically using <a href="https://developer.spotify.com/documentation/web-api">this API </a> , perfect for music enthusiasts.This api</h6>
      <div className='spotifyTable'>
      <table className="track-table">
        <thead>
          <tr>
            <th><h3>Top Song Recently</h3></th>
            <th><h3>Top Song Overall</h3></th>
            <th><h3>Top Artist</h3></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5).keys()].map(index => (
            <tr key={index}>
              <td>
                {topTracksShortTerm.length > 0 && index < topTracksShortTerm.length ? (
                  <a href={topTracksShortTerm[index].external_urls.spotify}>
                    {topTracksShortTerm[index].name}
                  </a>
                ) : null}
              </td>
              <td>
                {topTracksLongTerm.length > 0 && index < topTracksLongTerm.length ? (
                  <a href={topTracksLongTerm[index].external_urls.spotify}>
                    {topTracksLongTerm[index].name}
                  </a>
                ) : null}
              </td>
              <td>
                {topArtist.length > 0 && index < topArtist.length ? (
                  <a href={topArtist[index].external_urls.spotify}>
                    {topArtist[index].name}
                  </a>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
  
};

export default Spotify;
