import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  jsonUrl = "./assets/faq.json"

  panelOpenState = false;
  faq: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJSON().subscribe(data => {
      console.log('data ', data);
      /*data.map((x:any) => {
        this.faq.push(x);
      })*/
      this.faq = data.FAQS;
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

}
