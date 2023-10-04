const WhiteSection = ({ className, baslik1, baslik2, myList }) => {
  return (
    <section className={`whiteSection ${className}`}>
      <h2>{myList[0]}</h2>
      <article>
        <h3>{myList[1]}</h3>
        <p>{myList[2]}</p>
      </article>
      <article>
        <h3>{myList[3]}</h3>
        <p>{myList[4]}</p>
      </article>
    </section>
  );
};

export default WhiteSection;
