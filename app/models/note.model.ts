import { isFuture } from 'date-fns';

export default class Note {
  private _title: string;
  private _body: string;
  private _createdAt: Date;
  private _completedAt: Date | null;
  private _deletedAt: Date | null;

  public constructor(
    title: string,
    body: string,
  ) {
    this._title = title;
    this._body = body;
    this._createdAt = new Date();
    this._completedAt = null;
    this._deletedAt = null;
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

  public get createdAt(): Date{
    return this._createdAt;
  }

  public set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }

  public get deletedAt(): Date | null {
    return this._deletedAt;
  }

  public set deletedAt(deletedAt: Date | null) {
    this._deletedAt = deletedAt;
  }

  public get completedAt(): Date | null {
    return this._completedAt;
  }

  public set completedAt(completedAt: Date | null) {
    this._completedAt = completedAt;
  }

  public isActive(): boolean {
    return this.deletedAt === null;
  }

  public isCompleted(): boolean {
    return this.completedAt !== null;
  }

  public isUpcoming(): boolean {
    return isFuture(this.createdAt);
  }
}
