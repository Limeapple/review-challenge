import reviewImage from "../img/chat.svg";

const FrontPage = () => {
  return (
    <div id='home' className='header-display'>
      <div className='header-background'>
        <div>
          <h1
            style={{
              fontSize: "10vw",
              lineHeight: 0.85,
            }}>
            Review Challenge
          </h1>
          <p style={{ fontSize: "2vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div style={{ width: "50vw", display: "flex", alignItems: "center" }}>
        <a
          href='https://www.freepik.com/vectors/customer-rating'
          target={"_blank"}
          rel='noreferrer'>
          <img src={reviewImage} alt='Designed by vectorjuice / Freepik' className='image' />
        </a>
      </div>
    </div>
  );
};

export default FrontPage;
