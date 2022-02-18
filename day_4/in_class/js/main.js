// declare song variables
let song;
let playSong;

// spotify client credentials
import {clientId, clientSecret} from '.gitignore'
//put it in .env, dont push to github or host it

const getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId+":"+clientSecret)
        },
        body: 'grant_type=client_credentials'
    })

    // access data that 'result' returns
    const data = await result.json()
    // console.log(result)
    // console.log(data)
    return data.access_token
}

// create function to get the song infor when image is clicked
/**
 * @param img_index
 * @@param item_idex
 * 
 * Function gets song from spotify using the image index of our gallery
 * Then it finds the correct item_index of the JSON response object from spotify
 * this will produce a preview url that will be used to play a song from the soundtrack
 */
async function clickedEvent(img_index,item_index){
    //get the track name (alt text)
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;
    console.log(track)

    let token = await getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=10`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json()
    // console.log(response)

    song = response.tracks.items[item_index].preview_url
    console.log(song)

    //todo: add songSnippet function to play the song from the preview_url
    if(playSong){
        stopSnippet();
    }
    songSnippet(song)
}

/**
 * 
 * @param id
 * @param event
 * 
 * id = image id for gallery image
 * event = mouse event by the action from our user
 * 
 * function produces songs from the clikcedEvent based on the image index
*/

function getSong(id, event){
    event.stopPropagation();
    switch(id){
        case 'fig1':{
            clickedEvent(0,0)
            break;
        }
        case 'fig2':{
            clickedEvent(1,1)
            break;
        }
        case 'fig3':{
            clickedEvent(2,1)
            break;
        }
        case 'fig4':{
            clickedEvent(3,1)
            break;
        }
        case 'fig5':{
            clickedEvent(4,1)
            break;
        }
        case 'fig6':{
            clickedEvent(5,1)
            break;
        }
    }
}

/**
 * @param url
 * 
 * url = song preview_url
 * function will return an audio clip given by the preview url
 */

function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

/**
 * function returns the vent to stop song snippet
 * 
 */

function stopSnippet(){
    return playSong.pause();
}