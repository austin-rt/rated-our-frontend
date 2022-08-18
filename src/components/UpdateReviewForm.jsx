export default function UpdateReviewForm(props) {
  return (
    <div className="review-form-container">
      <h1 className='review-form-title'>Edit review</h1>
      <form className='review-form form' onSubmit={props.onSubmit}>
        <textarea
          className="review-body"
          id='body'
          cols='50'
          rows='10'
          value={props.reviewFromState.body}
          onChange={props.onChange}
          name='body'
        />
        <div className="review-form-row2">
          <select
            className="review-rating"

            id='rating'
            value={props.reviewFromState.rating}
            onChange={props.onChange}
            name='rating'
          >
            <option value="" disabled hidden>Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="submit-button button">Submit</button>
        </div>
      </form>
    </div>
  );
}
