export class Credit {
    id: number;
    actorID: number;
    movieID: number;
    Roll: string;

    constructor(id: number = 0, actorID: number = 0, movieID: number = 0, Roll: string = '') {
        this.id = id;
        this.actorID = actorID;
        this.movieID = movieID;
        this.Roll = Roll;
    }

}