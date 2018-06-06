/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

const LYRICAPI = 'https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title, callback) {
    console.log('artist: ', artist);
    console.log('title: ', title);

    let query = `${artist}/${title}`;

    $.get(LYRICAPI+query, callback, function()  {
        return callback;
     }, "json");

    }
    
    
    
    function displaySearchData(data) {
  
    //stringify JSON data returned
      let lyricsData = JSON.stringify(data.lyrics);
       console.log(lyricsData)

    //Replace line breaks with HTML <br> 
       displayLyrics = lyricsData.replace(/\\n|\\r/g, '<br>');

       $('.js-search-results').html(
           `<br>
           ${displayLyrics}`
        );
        
}
  
function watchSubmit() {
   
   
    $('.js-search-form').unbind().submit(function(event)   {
        event.preventDefault();
      
        let artist = $('.js-query-artist').val();
        let title = $('.js-query-title').val();

        getDataFromApi(artist, title, displaySearchData)
      });  
}
  
  $(watchSubmit);