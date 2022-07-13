import React, { useState } from 'react';

const CommentText = ({ comment }) => (<div
  style={{
    padding: '12px 16px',
    color: '#3c3c3c',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
  }}
>
  {comment}
</div>
)

const CommentCard = (
    {
      className,
      user,
      comment,
      date,
    }
  ) => {

    const [text, setText ] = useState('');
    const [subComments, setSubComments] = useState([]);

    const addComment = ()=>{
      setSubComments(prev=>[...prev, {
      comment: text,
      date: new Date(),
      user: 'some user'
    }]);
    setText('');
    }


    return (
      <>
      <div
        style={
          {
            width: 400,
            border: `1px solid #dcdcdc`,
            borderRadius: '4px',
            backgroundColor: 'white',
          }
        }
      >
        <div
          style={
            {
              backgroundColor: '#f6f6f6',
              color: '#3c3c3c',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px',
              borderTopRightRadius: '4px',
              borderTopLeftRadius: '4px',
            }
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                marginLeft: '4px',
              }}
            >
              {user}
            </span>
          </div>
          <div>{date.toISOString().substring(0, 10)}</div>
        </div>
        <CommentText comment={comment} />
        <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button type='button' onClick={addComment}>Reply</button>       
      </div>
      <div style={{marginTop:10, marginLeft: 20}}>
      {
        subComments.map((comment)=><CommentCard {...comment} key={comment.comment + comment.date.toString()} />)
      }
      </div>
      </>
    );
  }
;

export default CommentCard;
