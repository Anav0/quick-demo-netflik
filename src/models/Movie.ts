export class Movie {
  id: string;
  title: string;
  categories: string[];
  desc: string;
  imagesUrls: string[];
  cover: string;
  hero: string;

  constructor(
    Id: string,
    title: string,
    desc: string,
    hero: string,
    cover: string,
    categories: string[],
    imagesUrls: string[]
  ) {
    this.id = Id;
    this.title = title;
    this.desc = desc;
    this.hero = hero;
    this.cover = cover;
    this.categories = categories;
    this.imagesUrls = imagesUrls;
  }
}
