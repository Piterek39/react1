const RatingBar = ({ rate }) => {
    const stars = Array.from({ length: 10 }, (_, i) => (
      <span key={i} style={{ color: i < rate ? 'gold' : 'gray' }}>★</span>
    ));
    return <div>{stars}</div>;
  };
  export default RatingBar;
  