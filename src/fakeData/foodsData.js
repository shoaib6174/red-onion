
const foodsData = [
    {
        "id":"1",
        "catrgory": "breakfast",
        "name": "English Breakfast ",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/JTZB02n.png",
        "price": 3.99,
    },
    {
        "id":"2",
        "catrgory": "lunch",
        "name": "Fried Chicken Bento",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/PGcnUZ2.png',
        "price": 9.99,
    },
    {
        "id":"3",
        "catrgory": "dinner",
        "name": "Baked Chicken",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/USmcXVR.png',
        "price": 11.99,
    },
    {
        "id":"4",
        "catrgory": "breakfast",
        "name": "Toast Croissant Fried egg",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/WxO4oYb.png",
        "price": 19.99,
    },
    {
        "id":"5",
        "catrgory": "lunch",
        "name": "Roasted Chicken",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/fG9Undy.png',
        "price": 10.99,
    },
    {
        "id":"6",
        "catrgory": "dinner",
        "name": "Garlic Butter Baked Salmon",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/nEnJEs8.png',
        "price": 8.99,
    },{
        "id":"7",
        "catrgory": "breakfast",
        "name": "Baked Chicken",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/LPabYqQ.png",
        "price": 10.99,
    },
    {
        "id":"8",
        "catrgory": "lunch",
        "name": "Beef Steak",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/FSB7QUJ.png',
        "price": 15.99,
    },
    {
        "id":"9",
        "catrgory": "dinner",
        "name": "French fries with cheese",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/xxjFzjQ.png',
        "price": 6.99,
    },{
        "id":"10",
        "catrgory": "breakfast",
        "name": "Eggs Benedict",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/odoS6Sv.png",
        "price": 8.99,
    },
    {
        "id":"11",
        "catrgory": "lunch",
        "name": "Honey-SOy-Glazed Salmon",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/apsC6Ki.png",
        "price": 7.99,
    },
    {
        "id":"12",
        "catrgory": "dinner",
        "name": "Lemony Salmon Piccata",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/Jh6Rjnx.png',
        "price": 10.99,
    },{
        "id":"13",
        "catrgory": "breakfast",
        "name": "Bagel and cream Cheese",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/Ecy2JPY.png",
        "price": 6.99,
    },
    {
        "id":"14",
        "catrgory": "lunch",
        "name": "Tarragon-Rubbed-Salmon",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/qlhnpWS.png',
        "price": 6.99,
    },
    {
        "id":"15",
        "catrgory": "dinner",
        "name": "Pork Tenderloin",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/lkvYfKl.png',
        "price": 12.99,
    },{
        "id":"16",
        "catrgory": "breakfast",
        "name": "breakfast Sandwitch",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": "https://i.imgur.com/WF04qBv.png",
        "price": 9.99,
    },
    {
        "id":"17",
        "catrgory": "lunch",
        "name": "Indian Lunch",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL": 'https://i.imgur.com/P9fnUTa.png',
        "price": 8.99,
    },
    {
        "id":"18",
        "catrgory": "dinner",
        "name": "Salmon with Grapefruit",
        "description": "how we dream about our futute",
        "details": "The secret of good cooking is, first, having a love of it… If you’re convinced that cooking is drudgery, you’re never going to be good at it, and you might as well warm up something frozen.",
        "photoURL":'https://i.imgur.com/dXQxeoB.png' ,
        "price": 9.99,
    }
]

export default foodsData;