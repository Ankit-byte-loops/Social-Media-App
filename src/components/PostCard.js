import React,{ useContext } from 'react';
import { from } from '@apollo/react-hooks';
import{Card,Button, Icon, Label,Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ApolloProvider from '@apollo/react-hooks';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

function PostCard({
    post: { body, createdAt, id, username, likeCount, commentCount, likes }
}){
const { user } = useContext(AuthContext);

   return( 
<Card fluid>
<Card.Content>
<Image floated="right" size="small"
src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />

<Card.Header>{username}</Card.Header>

<Card.Meta as={Link} to={`/posts/${id}`}> 
    {moment(createdAt).fromNow(true)} </Card.Meta>
<Card.Description>{body}</Card.Description>
</Card.Content>

<Card.Content extra>
<LikeButton user={user} post={{ id, likes, likeCount}}/>
    <Button labelPosition='right'as={Link} to={`/posts/${id}`}>
    <Button color='blue' basic>
        <Icon name="comments"/>
        </Button>
        <Label as='a' basic color='blue' pointing='left'>
            {commentCount}
        </Label>
    </Button>
{user && user.username === username && <DeleteButton postId = {id} />}

</Card.Content>

</Card>
  )
}

export default PostCard;

