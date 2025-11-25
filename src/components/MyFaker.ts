import { faker } from '@faker-js/faker';

const categoriesList = [
    {
        id: "763e3abec14e3fbdedce238a",
        name: "Living Room",
        slug: "living-room"
    },
    {
        id: "b1f93d80c3f8038acb9ddc65",
        name: "Bedroom",
        slug: "bedroom"
    },
    {
        id: "6891d376e2d6ea543afaed04",
        name: "Dining Room",
        slug: "dining-room"
    },
    {
        id: "dcafee1d7a4d2b45cf1d31bb",
        name: "Home Office",
        slug: "home-office"
    },
    {
        id: "acacfaeccdaadba30efd5b8f",
        name: "Outdoor",
        slug: "outdoor"
    },
    {
        id: "ddefcd5ab3f6afdc92a21a45",
        name: "Storage & Organization",
        slug: "storage-&-organization"
    },
    {
        id: "fc9a0b6d9afbca6f4b5f917a",
        name: "Decor & Accents",
        slug: "decor-&-accents"
    },
    {
        id: "9c7deb2ec8dbead0b9f03ad1",
        name: "Lighting",
        slug: "lighting"
    },
    {
        id: "9ab1f2eb5b412bcb6e73bd7c",
        name: "Sale / Clearance",
        slug: "sale-/-clearance"
    }
]

const categoryList = ['Living Room','Bedroom','Dining Room','Home Office','Outdoor','Storage & Organization','Decor & Accents','Lighting','Sale / Clearance']

export const categories = Array.from(categoryList, (item)=>{
    return {
        id:faker.database.mongodbObjectId(),
        name:item,
        slug:item.toLowerCase().replaceAll(' ', '-')
    }
})

export const ProductList = Array.from({length:20}, () => {
    const productTitle = faker.word.words(5)
    const slug = productTitle.replaceAll(' ', '-')
    const randomNumber = Math.floor(Math.random()*categoriesList.length)
    return{
        id:faker.database.mongodbObjectId(),
        title:productTitle,
        price:faker.number.float({max:3000, fractionDigits:2}),
        image:faker.image.urlPicsumPhotos({height:220, grayscale:false}),
        link:`/single-product/${slug}`,
        categoryId:categoriesList[randomNumber].id
    }
})

export const createIds = Array.from({length:6},()=>{
    return {
        id:faker.database.mongodbObjectId()
    }
})

