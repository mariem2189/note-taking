import { MinimumLength } from "../decorators/minimumLength";

export class Note {
    id?: string;
    private _title: string;

    @MinimumLength(4)
    set title(newTitle: string) {
        this._title = newTitle;
    }

    get title(): string {
        return this._title;
    }

    body: string;

    constructor(title: string, body: string, id?: string) {
        this._title = title;
        this.body = body;
        this.id = id;
    }
}
