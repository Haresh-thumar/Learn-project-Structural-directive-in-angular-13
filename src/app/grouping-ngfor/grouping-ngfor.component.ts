import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouping-ngfor',
  templateUrl: './grouping-ngfor.component.html',
  styleUrls: ['./grouping-ngfor.component.scss']
})
export class GroupingNgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countryDetails: any[] = [
    {
      "country": "India",
      "people": [
        {
          "name": "Mayur Pathak",
          "gender": "Male",
          "age": 18,
          "address": [{ "street": "Meditation Lane", "city": "Atkinson", "country": "NH" }]
        },
        {
          "name": "Rinkle Ghosal",
          "gender": "Female",
          "age": 22,
          "address": [{ "street": "Silver Canoe Way", "city": "Wytie", "country": "TX" }]
        },
        {
          "name": "Rajesh Shah",
          "gender": "Male",
          "age": 25,
          "address": [{ "street": "Gentle Rain Drive", "city": "Marana", "country": "NH" }]
        },
        {
          "name": "Gunjan Trivedi",
          "gender": "Male",
          "age": 20,
          "address": [{ "street": "Grandiose Drive", "city": "Indianapolis", "country": "IN" }]
        },
        {
          "name": "Kajal Sharma",
          "gender": "Female",
          "age": 26,
          "address": [{ "street": "Loch Ness Road", "city": "Towson", "country": "MD" }]
        },
      ]
    },
    {
      "country": "UK",
      "people": [
        {
          "name": "Kyle Burg",
          "gender": "Female",
          "age": 28,
          "address": [{ "street": "Melody drive", "city": "Metairie", "country": "LA" }]
        },
        {
          "name": "Jason Selthon",
          "gender": "Male",
          "age": 23,
          "address": [{ "street": "Mistletoe Lane", "city": "Redding", "country": "CA" }]
        },
        {
          "name": "Dora miles",
          "gender": "Female",
          "age": 30,
          "address": [{ "street": "Golden Trout Way", "city": "Bozeman", "country": "MT" }]
        },
        {
          "name": "Leo Lucas",
          "gender": "Male",
          "age": 36,
          "address": [{ "street": "Chardonnay Drive", "city": "Macungie", "country": "PA" }]
        },
        {
          "name": "Nancie Potter",
          "gender": "Female",
          "age": 25,
          "address": [{ "street": "Dixie Avenue", "city": "Atlanta", "country": "GA" }]
        },
      ]
    },
    {
      "country": "England",
      "people": [
        {
          "name": "Noble Harris",
          "gender": "Male",
          "age": 39,
          "address": [{ "street": "Stardust Way", "city": "Murrieta", "country": "CA" }]
        },
        {
          "name": "Laura Thomas",
          "gender": "Female",
          "age": 27,
          "address": [{ "street": "Ben Hur Road", "city": "Baton Rouge", "country": "LA" }]
        },
        {
          "name": "Kimmel Roinson",
          "gender": "Male",
          "age": 42,
          "address": [{ "street": "Loganberry Lane", "city": "Holland", "country": "MI" }]
        },
        {
          "name": "Stephens Walker",
          "gender": "Male",
          "age": 25,
          "address": [{ "street": "South Honeysuckle Loop", "city": "Cypress", "country": "TX" }]
        },
        {
          "name": "Donna Cooper",
          "gender": "Female",
          "age": 34,
          "address": [{ "street": "Sunflower", "city": "Lake Forest", "country": "CA" }]
        },
      ]
    },
    {
      "country": "America",
      "people": [
        {
          "name": "Monica Smith",
          "gender": "Female",
          "age": 26,
          "address": [{ "street": "Avenida Barcelona", "city": "San Clemente", "country": "CA" }]
        },
        {
          "name": "Wagner Martin",
          "gender": "Male",
          "age": 29,
          "address": [{ "street": "Field Daisy Lane", "city": "East Northport", "country": "NY" }]
        },
        {
          "name": "Amy Anderson",
          "gender": "Female",
          "age": 19,
          "address": [{ "street": "Lionheart Drive", "city": "Jacksonville", "country": "FL" }]
        },
        {
          "name": "Tracy Perry",
          "gender": "Female",
          "age": 33,
          "address": [{ "street": "Sir Galahad Court", "city": "Wilmington", "country": "NC" }]
        },
        {
          "name": "Hunter Stanley",
          "gender": "Male",
          "age": 41,
          "address": [{ "street": "Peacock Avenue", "city": "Miami", "country": "FL" }]
        },
      ]
    }
  ]

}
