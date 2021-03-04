
const clientId = "9ea0da3d4d874f8296ee36ea43c2e915"
const clientSecret = "a238ca4411494924be636865f81a928e"
var token
getToken = async () => {
try {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
const tokenData = await result.json();
    console.log(tokenData);
     const access_token = tokenData.access_token
    getPlaylist(access_token)
  } catch(error) {
    console.log(error);
  }
}
getPlaylist = async(token)=>{
  var resp1 = await fetch('https://api.spotify.com/v1/users/{wizzler}/playlists',{
    method:'GET',
    headers:{
      'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': "Bearer "+token
    }
  })
  console.log(resp1)
  var data = await resp1.json();
  console.log(data)
}
 getToken();

  
