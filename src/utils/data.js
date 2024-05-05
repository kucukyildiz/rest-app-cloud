import I1 from "../img/Karadeniz.webp";
import F1 from "../img/mini.webp";
import C3 from "../img/kapalı.webp";
import Fi1 from "../img/tatli.jpeg";

export const heroData = [
  {
    id: 1,
    name: "Karadeniz Pide",
    decp: "Kıymalı / Kuşbaşılı / Kavurmalı / Kaşarlı",
    price: "190",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Mini Karadeniz Pide",
    decp: "Kıymalı / Kuşbaşılı / Kavurmalı / Kaşarlı / Tavuklu",
    price: "45",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Kapalı Pide",
    decp: "Kıymalı / Patetesli / Peynirli / Ispanaklı",
    price: "35",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Tatlı ve Soft İçecek",
    decp: "Tüm tatlı ve meşrubatlar",
    price: "30",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Kapalı Pide",
    urlParamName: "chicken",
  },
  {
    id: 3,
    name: "Karadeniz Pide",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Tatlı",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Salata",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "İçecek",
    urlParamName: "icecreams",
  },

];
