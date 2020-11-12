import { Movie } from "@/models/Movie";

export const mockMovies: Movie[] = [
  new Movie(
    "0",
    "True detective",
    "In 2012, former detective partners Rust Cohle and Martin Hart recap one of their very first cases together involving a serial killer, back in 1995.",
    "/assets/heros/true-detective.png",
    "/assets/covers/true-detective.png",
    ["drama", "action & adventure", "suspence"],
    [
      "/assets/screens/true-detective/true-detective-1.png",
      "/assets/screens/true-detective/true-detective-2.png",
      "/assets/screens/true-detective/true-detective-3.jpg",
    ]
  ),
  new Movie(
    "4",
    "Mr Robot",
    "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    "/assets/heros/robot-hero.png",
    "/assets/covers/robot-cover.jpg",
    ["crime", "drama", "thriller"],
    [
      "/assets/screens/robot/robot-1.jpg",
      "/assets/screens/robot/robot-2.jpg",
      "/assets/screens/robot/robot-3.jpg",
    ]
  ),

  new Movie(
    "2",
    "Stranger Things",
    "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    "/assets/heros/stranger-things-hero.jpg",
    "/assets/covers/stranger-things-cover.jpg",
    ["drama", "fantasy", "horror"],
    [
      "/assets/screens/stranger-things/stranger-things-1.jpeg",
      "/assets/screens/stranger-things/stranger-things-2.jpg",
      "/assets/screens/stranger-things/stranger-things-3.jpg",
    ]
  ),
  new Movie(
    "3",
    "Chernobyl",
    " In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    "/assets/heros/chernobyl-hero.jpg",
    "/assets/covers/chernobyl-cover.jpg",
    ["drama", "history", "thriller"],
    [
      "/assets/screens/chernobyl/chernobyl-1.jpg",
      "/assets/screens/chernobyl/chernobyl-2.png",
      "/assets/screens/chernobyl/chernobyl-3.jpg",
    ]
  ),
  new Movie(
    "1",
    "Orange Is New Black",
    "Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law-abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life-changing prison can really be.",
    "/assets/heros/orange-hero.jpg",
    "/assets/covers/orange-cover.png",
    ["comedy", "crime", "drama"],
    [
      "/assets/screens/orange/orange-1.jpg",
      "/assets/screens/orange/orange-2.jpg",
      "/assets/screens/orange/orange-3.jpg",
    ]
  ),
];
