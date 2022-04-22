export interface IMovieItem {
    id: number,
    title: String;
    image_id: String;
    release_date: String;
    rating: number;
    genreIds: Array<number>;
}