const { Post } = require("../models")

const postData = [
    
    {
        title: "Tech Blog.",
        content:
            "Tech Blog is homework .",
        user_id: 10,
    },
    {
        title: "Morbi non quam nec dui luctus rutrum.",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
        user_id: 8,
    },
    {
        title:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
        user_id: 1,
    },
    {
        title: "Nunc purus.",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
        user_id: 4,
    },
    {
        title: "Pellentesque eget nunc.",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
        user_id: 7,
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
        user_id: 4,
    },
    {
        title: "In hac habitasse platea dictumst.",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
        user_id: 1,
    },
    {
        title: "Morbi non quam nec dui luctus rutrum.",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
        user_id: 1,
    },
    {
        title: "Duis ac nibh.",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
        user_id: 9,
    },
    {
        title: "Curabitur at ipsum ac tellus semper interdum.",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;