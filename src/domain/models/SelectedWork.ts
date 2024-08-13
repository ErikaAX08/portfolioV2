export interface SelectedWork {
  name: string;
  article_link?: string;
  description: string[];
  link: {
    name: string;
    url: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
}
