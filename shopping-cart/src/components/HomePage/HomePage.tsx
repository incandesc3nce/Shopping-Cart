import home_kaws from '../../assets/home_kaws.jpg';

const HomePage = () => (
  <div id="main-content">
    <main>
      <div className="flex justify-center">
        <img src={home_kaws} alt="Kaws logo" />
      </div>
      <div className="flex flex-col items-center text-center text-3xl">
        <p>Welcome to</p>
        <b>KUWS Exclusive</b>
        <p>The best online store for Kaws.</p>
        <br />
        <p className="ml-4 mr-4 max-w-2xl text-lg">
          This is not a real store btw. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi corporis consequuntur ipsum aperiam. Iusto,
          voluptatem veritatis. Accusantium, cum quo nisi accusamus repellendus
          modi nobis veniam distinctio ducimus impedit voluptatum vitae!
          Perspiciatis fugit ut consectetur, sunt dolor quos! Obcaecati autem
          doloribus quo quibusdam voluptates beatae at placeat officia molestiae
          cumque debitis atque consequatur soluta ratione omnis reiciendis a,
          nisi minus tenetur! Eligendi quidem inventore ratione, harum rerum
          perferendis commodi error. Culpa, velit! Sapiente similique vero autem
          asperiores earum perspiciatis, officia vitae odio ducimus minus cumque
          eaque architecto illo expedita et nostrum.
        </p>
      </div>
    </main>
  </div>
);

export default HomePage;
