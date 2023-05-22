export interface MovieData {
  entries: Entries[];
  total: number;
}

export interface Entries {
  description: string;
  images: PosterArt;
  programType: string;
  releaseYear: number;
  title: string;
}

interface PosterArt {
  posterArt: {
    height: number;
    url: string;
    width: number;
  };
}
