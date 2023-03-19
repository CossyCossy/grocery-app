import Images from "./images"

const categories = [
    {
        id: 1,
        name: "Fruits"
    },
    {
        id: 2,
        name: "Vegetable"
    },
    {
        id: 3,
        name: "Eggs & Meat"
    },
    {
        id: 4,
        name: "Rice & Oils"
    },
    {
        id: 5,
        name: "Dairy Products"
    },

]

const products = [
    {
        id: 1,
        name: "Mango",
        calories: 80,
        price: 15.55,
        description: "An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions. An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions",
        images : [
            {
                id: 1,
                avatar: Images.mango_1
            },
            {
                id: 2,
                avatar: Images.mango_2
            },
            {
                id: 3,
                avatar: Images.mango_3
            },
            {
                id: 4,
                avatar: Images.mango_3
            }
        ]
    },
    {
        id: 2,
        name: "Orange",
        calories: 32,
        price: 4,
        description: "An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions. An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions",
        images : [
            {
                id: 1,
                avatar: Images.orange_1
            },
            {
                id: 2,
                avatar: Images.orange_2
            },
            {
                id: 3,
                avatar: Images.orange_3
            },
            {
                id: 4,
                avatar: Images.orange_4
            }
        ]
    },
    {
        id: 3,
        name: "Strawberry",
        calories: 41,
        price: 14.20,
        description: "An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions. An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions",
        images : [
            {
                id: 1,
                avatar: Images.berry_1
            },
            {
                id: 2,
                avatar: Images.berry_2
            },
            {
                id: 3,
                avatar: Images.berry_3
            },
            {
                id: 4,
                avatar: Images.berry_4
            }
        ]
    },
    {
        id: 4,
        name: "Apple",
        calories: 94,
        price: 10.99,
        description: "An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions. An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions",
        images : [
            {
                id: 1,
                avatar: Images.apple_1
            },
            {
                id: 2,
                avatar: Images.apple_2
            },
            {
                id: 3,
                avatar: Images.apple_3
            },
            {
                id: 4,
                avatar: Images.apple_4
            }
        ]
    },
    {
        id: 5,
        name: "Pineaple",
        calories: 56,
        price: 23.89,
        description: "An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions. An edible stone fruit produced by the tropical tree Magnifera indica which is believed to have originated from the region between the amazon anf tropical regions",
        images : [
            {
                id: 1,
                avatar: Images.pineaple_1
            },
            {
                id: 2,
                avatar: Images.pineaple_2
            },
            {
                id: 3,
                avatar: Images.pineaple_3
            },
            {
                id: 4,
                avatar: Images.pineaple_4
            }
        ]
    }
]

const dummyData = {
    categories,
    products
}

export default dummyData