export default function UpdateReviewForm(props) {
  return (
    <div className="Review-From form">
      <h1 className='review-form-title'>Review form</h1>
      <form className='review-form' onSubmit={props.onSubmit}>
        <select
          className="review-rating"
          defaultValue={props.reviewFromState.rating}
          id='rating'
          value={props.reviewFromState.rating}
          onChange={props.handleReviewChange}
          name='rating'
        >
          <option value="" disabled hidden>Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <textarea
          id='body'
          col='50'
          row='25'
          value={props.reviewFromState.body}
          onChange={props.onChange}
          name={'body'}
          placeholder={'Leave a review!'}
        />
        <button className="submit-button button">Submit</button>
      </form>
    </div>
  );
}
