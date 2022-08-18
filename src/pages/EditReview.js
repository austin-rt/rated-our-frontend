import UpdateReviewForm from '../components/UpdateReviewForm';

export default function EditReview(props) {
  return (
    <UpdateReviewForm
      review={props.review}
      reviewFromState={props.reviewFromState}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    />
  );
}
