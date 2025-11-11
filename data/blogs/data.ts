export interface BlogCardProps {
    desc: string;
    imgSrc: string;
    title: string;
    slug?: string
}

const blogData: BlogCardProps[] = [
    {
        imgSrc: "/assets/slider-imgs/1.jpg",
        title: "Clever ways to get your podcast heard",
        desc: "Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
    },
    {
        imgSrc: "/assets/slider-imgs/2.jpg",
        title: "From its medieval origins to century",
        desc: "Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air. Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air. Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air. Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
    },
    {
        imgSrc: "/assets/slider-imgs/4.jpg",
        title: "Lorem ipsum, or lipsum as it is known",
        desc: "Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
    },
    {
        imgSrc: "/assets/slider-imgs/5.jpg",
        title: "ways to get your podcast heard",
        desc: "Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
    },
    {
        imgSrc: "/assets/slider-imgs/3.jpg",
        title: "How to get your podcast heard",
        desc: "Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience. new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
    },
]

blogData.forEach((blog) => {
    blog.slug = blog.title.toLowerCase().replace(/\s/g, '-'); // Generate slug
});

export {
    blogData
}