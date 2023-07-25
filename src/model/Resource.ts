export class Resource {
    title: string | undefined
    date: string | undefined
    image: string | undefined
    document: string | undefined

    constructor({title,date,image,document}: {title?: string,date?:string,image:string, document:string}) {
        this.title = title;
        this.date = date;
        this.image = image;
        this.document = document;
    }
}

