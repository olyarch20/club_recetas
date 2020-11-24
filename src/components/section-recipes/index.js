import React from "react";
import Pagination from 'react-bootstrap/Pagination'
import "./index.css";


const cardInfo = [
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r1.jpg')

    },
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r2.jpg')
    },
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r3.jpg')

    },
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r4.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r5.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r6.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r7.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r8.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r9.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r10.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r11.jpg')

    }
    ,
    {
        titulo: "Spring greens and pecorino salad",
        descripcion: "Create a blog post subtitle that summaries\n" +
            "                                your post in a few short, punchy sentences and entices your audience\n" +
            "                                to continue reading.",
        img: require('../../assets/img/post-recetas/r12.jpg')

    }
];

function Recipes() {
    return <section>
        <h2 className={"title"}><i className="fas fa-utensils utensils-i"/> TODAS LAS RECETAS</h2>
        <hr className={"line"}/>
        <div className={"row card-container"}>
            {cardInfo.map(card => <div className="card col-md-6 card-c">
                <div className="card-recipe-container no-gutters">
                    <div className={"img-recipe"} style={{
                        backgroundImage: `url(${card.img})`
                    }}>
                    </div>

                    <div>
                        <div className="card-body">
                            <p className={"admin"}>Admin
                                <i className="fas fa-crown tiara"/>
                                <br/>
                                <small className="text-muted date">Last updated 3 mins ago</small>
                            </p>
                            <h3 className="card-title name-recipes">{card.titulo}</h3>
                            <p className="card-text p-recipes">{card.descripcion}</p>
                            <hr className={"line-space"}/>
                            <div className="likes">
                                <small className="text-muted">20 Views</small>
                                <small className="text-muted">Write a comment</small>
                                <i className="far fa-heart heart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        <div className={"page-container"}>
            <Pagination>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis/>

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis/>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </div>

    </section>
}

export {Recipes}