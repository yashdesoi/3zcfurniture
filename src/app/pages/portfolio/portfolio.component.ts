import {AfterContentChecked, Component, OnInit, SimpleChanges} from '@angular/core';
import {Gallery} from "angular-gallery";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterContentChecked {

  imageArray: any = [
    {path: 'assets/images/portfolio/bedroom-furniture/bedroomFurniture.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-a9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-b9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-c9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-d9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-e9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-f9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g4.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g5.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g6.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g7.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g8.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-g9.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-h1.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-h2.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bedroom-furniture/bedroom-furniture-h3.jpg', category: 'bedroomFurniture'},
    {path: 'assets/images/portfolio/bespoke-tables/bespoke-tables.jpg', category: 'bespokeTables'},
    {path: 'assets/images/portfolio/bespoke-tables/bespoke-tables-1.jpg', category: 'bespokeTables'},
    {path: 'assets/images/portfolio/bespoke-tables/bespoke-tables-2.jpg', category: 'bespokeTables'},
    {path: 'assets/images/portfolio/bespoke-tables/bespoke-tables-3.jpg', category: 'bespokeTables'},
    {path: 'assets/images/portfolio/kitchen/kitchen-0.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/kitchen/kitchen-1.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/kitchen/kitchen-2.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/kitchen/kitchen-3.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/kitchen/kitchen-4.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/kitchen/kitchen-5.jpg', category: 'kitchen'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-furniture.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-1.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-2.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-3.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-4.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-5.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-6.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-7.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-8.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-9.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/living-room-furniture/living-room-10.jpg', category: 'livingRoomFurniture'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage1.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage2.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage3.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage4.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage5.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/under-stairs-storage/under-stairs-storage6.jpg', category: 'underStairsStorage'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe.jpg', category: 'walkInWardrobe'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe1.jpg', category: 'walkInWardrobe'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe2.jpg', category: 'walkInWardrobe'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe3.jpg', category: 'walkInWardrobe'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe4.jpg', category: 'walkInWardrobe'},
    {path: 'assets/images/portfolio/walk-in-wardrobe/walk-in-wardrobe5.jpg', category: 'walkInWardrobe'},
  ];

  categoryArr: any = ['bedroomFurniture', 'bespokeTables', 'kitchen', 'livingRoomFurniture', 'underStairsStorage', 'walkInWardrobe'];

  kitchenArray: any = [];

  filterArray: any = [];
  filterCategory: any = [];

  bedroomFurniture: boolean = false;
  bespokeTables: boolean = false;
  kitchen: boolean = false;
  livingRoomFurniture: boolean = false;

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
    this.filterArray = this.imageArray;
    console.log('filterArray ',this.filterArray);
    // this.kitchenA();
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(123, changes);
  }

  ngAfterContentChecked() {
  }

  onCheckChange(event:any) {

    if(event.target.checked) {
      this.imageArray.forEach((image: any) => {
        if(image.category == event.target.value) {
          // Remove the unselected element from the arrayForm
          this.filterArray.push(image);
        }
      });

      this.filterArray = this.filterArray.filter(function (elem: any, index: number, self: any) {
        return index === self.indexOf(elem);
      });

    }

    else {
      let i: number = 0;
      this.filterArray = this.removeD(this.filterArray, event);
    }
  }

  private removeD(filterArray: any, event: any) : any {
    let result = [];

    for (let i = 0; i < filterArray.length; i++) {
      if (filterArray[i].category !== event.target.value) {
        result.push(filterArray[i])
      }
    }
    return result;
  }

  newPushFilter() {
    if (this.filterArray.length == 0) {
      this.filterArray = this.imageArray;
    } else if(this.kitchen || this.bedroomFurniture) {
      console.log(1);
      if(!this.filterCategory.includes("kitchen")) {
        this.filterCategory.push('kitchen');
        this.filterArray = [];
        this.imageArray.map((item:any) => {
          if (this.filterCategory.includes(item.category)) {
            this.filterArray.push(item);
          }
        });
      }
      console.log(1, this.filterCategory);
    } else {
      console.log(2);
      const index = this.filterArray.indexOf("kitchen");
      if (index > -1) {
        this.filterArray.splice(index, 1);
      }
      console.log(2, this.filterCategory);
    }
  }

  /*pushFilterArray() {
    if((this.kitchen &&
      this.bedroomFurniture &&
      this.livingRoomFurniture &&
      this.bespokeTables) ||
      (!this.kitchen &&
        !this.bedroomFurniture &&
        !this.livingRoomFurniture &&
        !this.bespokeTables)) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' ||
          item.category === 'bedroomFurniture'||
          item.category === 'livingRoomFurniture'||
          item.category === 'bespokeTables') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      this.bedroomFurniture &&
      this.livingRoomFurniture &&
      !this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' ||
          item.category === 'bedroomFurniture' ||
          item.category === 'livingRoomFurniture') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      this.bedroomFurniture &&
      !this.livingRoomFurniture &&
      this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' ||
          item.category === 'bedroomFurniture' ||
          item.category === 'bespokeTables') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      !this.bedroomFurniture &&
      this.livingRoomFurniture &&
      this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' ||
          item.category === 'livingRoomFurniture' ||
          item.category === 'bespokeTables') {
          this.filterArray.push(item);
        }
      });
    } else if(!this.kitchen &&
      this.bedroomFurniture &&
      this.bespokeTables &&
      this.livingRoomFurniture) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'bedroomFurniture' ||
          item.category === 'bespokeTables' ||
          item.category === 'livingRoomFurniture') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      this.bedroomFurniture &&
      !this.livingRoomFurniture &&
      !this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' || item.category === 'bedroomFurniture') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      !this.bedroomFurniture &&
      this.livingRoomFurniture &&
      !this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' || item.category === 'livingRoomFurniture') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      !this.bedroomFurniture &&
      !this.livingRoomFurniture &&
      this.bespokeTables) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen' || item.category === 'bespokeTables') {
          this.filterArray.push(item);
        }
      });
    } else if(this.kitchen &&
      !this.bedroomFurniture &&
      !this.bespokeTables &&
      !this.livingRoomFurniture) {
      this.filterArray = [];
      this.imageArray.map((item:any) => {
        if (item.category === 'kitchen') {
          this.filterArray.push(item);
        }
      });
    }

    // if (this.bespokeTables) {
    //   this.filterArray = [];
    //   console.log(123, this.bespokeTables);
    //   this.imageArray.map((item:any) => {
    //     if (item.category === 'bespokeTables') {
    //       this.filterArray.push(item);
    //     }
    //   });
    // }
    //
    // if (this.bedroomFurniture) {
    //   this.filterArray = [];
    //   console.log(123, this.bedroomFurniture);
    //   this.imageArray.map((item:any) => {
    //     if (item.category === 'bedroomFurniture') {
    //       this.filterArray.push(item);
    //     }
    //   });
    // }
  }*/

  kitchenA() {
    this.imageArray.map((item:any) => {
      if (item.category === 'kitchen') {
        this.kitchenArray.push(item);
      }
    });
  }

  toggleLivingRoomFurniture() {
    this.livingRoomFurniture = !this.livingRoomFurniture;
  }
  bedroomFurnitureCat() {
    this.bedroomFurniture = !this.bedroomFurniture;
  }
  toggleBespokeTablesCat() {
    this.bespokeTables = !this.bespokeTables;
  }
  toggleKitchenCat() {
    this.kitchen = !this.kitchen;
  }

  pushRemoveInArray(cat:any) {
    this.filterArray.push(cat);
  }

  showGallery(index: number) {

    /*this.imageArray.map((item:any) => {

      if (item.category === 'kitchen') {
        this.kitchenArray.push(item);
      }
    });*/

    let prop = {
      images: this.filterArray.length > 0 ? this.filterArray : this.imageArray,
      index
    };
    this.gallery.load(prop);
  }
}
