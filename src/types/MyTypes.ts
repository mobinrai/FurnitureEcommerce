export type TitleAndSubTitle = {mainTitle:string; subTitle?:string}

export type ProductDetails = {
        id:string;
        image:string;
        title:string;
        price:number;
        link?:string;
        categoryId?:string
    
}[]

export type CategoryDetails={
    id:string;
    name:string;
    image:string;
    slug:string
}[]

export type ReviewDetails={
    id:string;
    userName:string;
    date:string;
    image:string;
    text:string;
    rating:number
}[]