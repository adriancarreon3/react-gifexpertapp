

export const getGifs =  async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=aCmkDcY7LJT0LoUzRm3Ny4vDoOk5rmpK`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
}