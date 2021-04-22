import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import styled from 'styled-components/native';

import {CommentsPill} from '../Articles/Components/CommentsPill'
import {CommentsSection} from './Components/CommentsSection'

export interface Comment {
  author: string
  picture: string
  body: string
}
export class Article {
  userId!: number
  id!: number
  title: string = ''
  body: string = ''
  image: string = ''
  comments: Comment[] = []
}

const ArticleViewStyled = styled.View`
  padding: 20px;
`;

const ArticleTitleStyled = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 26px;
  color: #665BDF;
`;

const ArticleBodyStyled = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 22px;
`;

export const ArticleItemView = ({ ...props }) => {
  const articleId = props.route.params.articleId

  const [article, setArticle] = useState(new Article);

  useEffect(() => {
    (async () => {
      const result = await fetch(`https://my-json-server.typicode.com/HuguesRomain/Task_Runner/posts/?id=${articleId}`)
      const data = await result.json()
      setArticle(data[0]);
    })();
  }, []);

  const handleCommentAdd = (comment: Comment) => {
    setArticle({...article, comments: [...article.comments, comment]});
  }

  return (
    <ScrollView>
      <ArticleViewStyled>
        <CommentsPill commentsLength={article.comments.length}/>
        <ArticleTitleStyled>{article.title}</ArticleTitleStyled>
        <ArticleBodyStyled>{article.body}</ArticleBodyStyled>
        <CommentsSection comments={article.comments} onAddComment={handleCommentAdd}/>
      </ArticleViewStyled>
    </ScrollView>
  );
}

