//{
//    type: 'ADD_MOVIES'
//}
//{/*{
//    type: 'DE CREASE_COUNT'
//}*/}

//action type
export const ADD_MOVIES = 'ADD_MOVIES';

//action creator
export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}