import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  static instantiated = false;
  #currentPage = 1;
  #name: string = "";
  #noPics: number;
  #picWidth: number;
  #receivedLinks = [];
  #sessionId = -1;
  #alreadySent: { silly: boolean[], adorable: boolean[] };
  // #routes = ["register", "random_dogs", "silly_dogs", "adorable_dogs"];
  // #loggedOnce = false;
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

  // get LoggedOnce() {
  //     return this.#loggedOnce;
  // }


  // set LoggedOnce(val: boolean) {
  //      this.#loggedOnce = val;
  // }

  // getRoutes() {
  //     return this.#routes;
  // }

  // addRoute(newRoute: string) {
  //     this.#routes.push(newRoute);
  // }

  // increasePage() {
  //     if (this.#currentPage === Math.ceil(this.#receivedLinks.length / this.#noPics))
  //         return;
  //     this.#currentPage++;
  //     if (this.#currentPage > Math.floor(this.#receivedLinks.length / this.#noPics))
  //         this.#currentPage = Math.floor(this.#receivedLinks.length / this.#noPics) + 1;
  // }

  // decreasePage() {
  //     this.#currentPage--;
  //     if (this.#currentPage < 1)
  //         this.#currentPage = 1;
  // }

  // getCurrentPage() {
  //     return this.#currentPage;
  // }

  // setCurrentPage(value: number) {
  //     this.#currentPage = value;
  // }



  // setReceivedLinks(links: string[]) {
  //     this.#receivedLinks = links;
  // }

  // getReceivedLinks() {
  //     return this.#receivedLinks;
  // }

  // getAlreadySent() {
  //     return this.#alreadySent;
  // }

  // resetAlreadySent() {
  //     this.#categories.forEach(cat => {
  //         this.#alreadySent[cat] = new Array(this.#noPics).fill(false);
  //     })
  // }

  // setAlreadySent(text: string, idx: number) {
  //     this.#alreadySent[text][idx] = true;
  // }

  // appendCategory(netCat: string) {
  //     this.#alreadySent[netCat] = new Array(this.#noPics).fill(false);
  // }


}
