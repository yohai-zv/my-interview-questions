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
      user,
      comment,
      date,
    }
  ) => {

    return (
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
      </div>
    );
  }
;

export default CommentCard;
