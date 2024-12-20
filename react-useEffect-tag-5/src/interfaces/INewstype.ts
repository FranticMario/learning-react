export interface INews {
    source:      Source;
    author:      null;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  null;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   null;
    name: string;
}
