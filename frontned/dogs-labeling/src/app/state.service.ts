import { Inject, Injectable, Optional } from '@angular/core';

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
  #routes = ["register", "random_dogs", "silly_dogs", "adorable_dogs"];
  #loggedOnce = false;
  #categories: string[] = [];

  constructor(
    @Inject('noPics') public noPics: number,
    @Inject('picWidth') public picWidth: number
  ) {
    if (StateService.instantiated) {
      throw new Error("Already instantiated");
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
  }

  // get LoggedOnce() {
  //     return this.#loggedOnce;
  // }


  // set LoggedOnce(val: boolean) {
  //      this.#loggedOnce = val;
  // }

  get NoPics() {
    return this.#noPics;
  }

  get PicWidth() {
    return this.#picWidth;
  }

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

  get SessionId() {
    return this.#sessionId;
  };

  set SessionId(id: number) {
    this.#sessionId = id;
  };

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