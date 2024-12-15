import { Table, Button } from "antd";
import { useDispatch } from "react-redux";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
function TheatresTable(){
    const FakeMovies = [
        {
            key: "1",
            _id: "123241424",
            poster: "Image1",
            title: "Inside Out 2",
            description: "Crazines inside your brain goes to the next level",
            duration: 120,
            genre: "Animation",
            language: "English",
            releaseDate: "2024-06-01",
        },
        {
            key: "2",
            _id: "123241425",
            poster: "Image2",
            title: "Anatomy of a fall",
            description: "thrilling murder suspense",
            duration: 120,
            genre: "Thriller",
            language: "English",
            releaseDate: "2024-06-01",
        },
    ];
    const tableHeading = [
        {
            title: "Poster",
            dataIndex: "poster",
            render: (text, data) => {
                return (
                    <img
                        width="75"
                        height="115"
                        style={{ objectFit: "cover" }}
                        src={data.poster}
                    />
                );
            },
        },
        {
            title: "Movie Name",
            dataIndex: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Duration",
            dataIndex: "duration",
            render: (text) => {
                return `${text} Mins`;
            },
        },
        {
            title: "Genre",
            dataIndex: "genre",
        },
        {
            title: "Language",
            dataIndex: "language",
        },
        {
            title: "Release Date",
            dataIndex: "releaseDate",
           
        },
        {
            title: "Action",
            render: (text, data) => {
                return (
                    <div>
                        <Button
                   
                        >
                            <EditOutlined />
                        </Button>

                        <Button
                   
                        >
                            <DeleteOutlined />
                        </Button>
                    </div>
                );
            },
        },
    ];
    return (
        <>
        <Table/>
        </>
    )
}

export default TheatresTable;