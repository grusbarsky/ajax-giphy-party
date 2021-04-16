$(function(){
    $("form").on("click", "#searchButton", function(e){
        e.preventDefault();
        let searchInput = $("input").val();
        getGiphy(searchInput);
        $("input").val("");
    })
    
    async function getGiphy(searchInput){
        let gifObject = await axios.get('https://api.giphy.com/v1/gifs/search', 
        {params: {api_key:"KMPrtQyZQUofnxrtyTjOXy9n7PrfxsbV", q:{searchInput}}});
        console.log(gifObject);
        let randomNum = Math.floor((Math.random()*100)/2);
        let newGif = $("<img>", {src: gifObject.data.data[randomNum].images.original.url});
        $("#memes").append(newGif);
    }
    
    $("removeButton").click(function(e){
        e.preventDefault();
        $("img").remove();
    });
});