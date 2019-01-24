import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: "page-tabs",
  template: `
    <ion-tabs>
      <ion-tab
        [root]="favPage"
        tabTitle="Favorites"
        tabIcon="bookmarks"
      ></ion-tab>
      <ion-tab [root]="libPage" tabIcon="quote"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favPage = FavoritesPage;
  libPage = LibraryPage;
}
