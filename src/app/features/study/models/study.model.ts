export class Study {
  id: number;
  index_image: number;
  author: string;
  created_year: string;
  title: string;
  original_title: string
  description: string;
  url: string;

  constructor(
    id: number,
    index_image: number,
    author: string,
    created_year: string,
    title: string,
    original_title: string,
    description: string,
    url:string
  ) {
    this.id = id;
    this.index_image = index_image;
    this.author = author;
    this.created_year = created_year;
    this.title = title;
    this.original_title = original_title;
    this.description = description;
    this.url = url;
  }
}

