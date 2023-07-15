export class Article {
    autor: string | undefined
    text: string | undefined
    image: string | undefined
    title: string | undefined

    constructor({autor, text, image, title}: {autor?: string, text?: string, image?: string, title?: string}) {
        this.autor = autor;
        this.text = text;
        this.image = image;
        this.title = title;
    }
}