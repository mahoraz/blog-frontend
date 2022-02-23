import React from "react";
import styled from "styled-components";
import Card from "../card/Card";

interface PostCardProps{
    image: string;
    category: string;
    title: string;
    text: string;
}

const PostCardImage = styled.div<PostCardProps>`
    background: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    height: 236px;
    width: 100%;
    border-radius: 10px 10px 0 0;
`;

const PostCardBody = styled.div`
    font-size: 16px;
    line-height: 22px;
    color: #7B8591;
    text-align: left;
    margin: 38px 37px;
`;

const PostCategory = styled.h2`
     color: #33439B;
     font-size: 11px;
     line-height: 15px;
`;
const PostHeader= styled.h4`
     color: #303336;
     font-size: 22px;
     line-height: 37px;
     margin-top: 11px;
     margin-bottom: 19px;
`;

export default function PostCard(props: PostCardProps){

    return(
        <Card>
            <PostCardImage {...props}/>
            <PostCardBody>
                <PostCategory>{props.category.toUpperCase()}</PostCategory>
                <PostHeader>{props.title}</PostHeader>
                {props.text}
            </PostCardBody>
        </Card>
    )
}