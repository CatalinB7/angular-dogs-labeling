import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  static instantiated = false;
  #name: string = "";
  #noPics: number;
  #picWidth: number;
  #sessionId = -1;
  #alreadySent: { silly: boolean[], adorable: boolean[] };
  #categories: string[] = [];
  localStorage: Storage;

  deletedCard$ = new Subject<void>();

  constructor(
    @Inject('noPics') public noPics: number,
    @Inject('picWidth') public picWidth: number) {
    
    if (StateService.instantiated) {
      throw new Error("Already instantiated");
    }
    this.localStorage = window.localStorage;
    if(this.localStorage.getItem("name")) {
      this.Name = this.localStorage.getItem("name") as string;
      this.SessionId = parseInt(this.localStorage.getItem("sessionId") as string);
    }
    this.#noPics = noPics;
    this.#picWidth = picWidth;
    this.#alreadySent = {
      "silly": new Array(this.#noPics).fill(false),
      "adorable": new Array(this.#noPics).fill(false)
    };

  }
  
  get Categories() {
    return this.#categories;
  }

  set Categories(val: string[]) {
    this.#categories = val;
  }

  get Name() {
    return this.#name;
  }

  set Name(val) {
    this.#name = val;
    this.localStorage.setItem("name", val);
  }

  logout() {
    // this.localStorage.clear() //should i erase everything?
    this.localStorage.removeItem("name");
    this.localStorage.removeItem("sessionId");
  }

  get NoPics() {
    return this.#noPics;
  }

  get PicWidth() {
    return this.#picWidth;
  }

  get SessionId() {
    return this.#sessionId;
  };

  set SessionId(id: number) {
    this.localStorage.setItem("sessionId", id.toString());
    this.#sessionId = id;
  };

}
