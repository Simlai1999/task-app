export default class Note {
    private _title: string;
    private _body: string;

    constructor(
        title: string,
        body: string,
    ) {
        this._title = title;
        this._body = body;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }
    
    public get body() {
        return this._body;
    }

    public set body(body: string) {
        this._body = body;
    }
}