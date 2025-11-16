export type TitleAndSubTitle = {mainTitle:string; subTitle?:string}

export type ProductDetailsProps = {
    products:{
        image:string;
        title:string;
        price:number;
        link:string
    }[]
}