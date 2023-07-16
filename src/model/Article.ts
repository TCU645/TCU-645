export class Article {
    autor: string | undefined
    paragraphs: string[] | undefined
    image: string | undefined
    title: string | undefined

    constructor({autor, paragraphs, image, title}: {autor?: string, paragraphs?: string[], image?: string, title?: string}) {
        this.autor = autor;
        this.paragraphs = paragraphs;
        this.image = image;
        this.title = title;
    }
}