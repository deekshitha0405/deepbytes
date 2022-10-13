import "./styles.css";
import camera from "./assets/camera.png";
import plane from "./assets/plane.png";
import box from "./assets/safe-box.png";
export default function App() {
  const list = [
    {
      image: camera,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
    {
      image: box,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
    {
      image: plane,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
    {
      image: box,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
    {
      image: plane,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
    {
      image: camera,
      header: "Error inventore nulla.",
      description: `Ad reiciendis quo et beatae quas nobis
    cupiditate magnam.`,
    },
  ];
  return (
    <main>
      <section className="main-section">
        <div className="main-innerContainer">
          <h1>
            Quia quam nam
            <br />
            dignissimos culpa
          </h1>
          <h4>
            Pariatur consequuntur deserunt mollitia eligendi
            <br />
            harum consequuntur perferendis sed voluptatem.
          </h4>

          <div className="d-flex fl-d-r">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3UPVxMufEQc5NUTiMc4eUWPe7SVRCICtCg&usqp=CAU"
              alt="mainsection-image"
            />
            <div className="main-innerDiv">
              <h3>Et repudiandae iusto.</h3>
              <p>
                Aut et voluptatibus mollitia et recusandae quibusdam laboriosam
                reiciendis.
              </p>
            </div>
          </div>
          <div className="d-flex fl-d-r">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3UPVxMufEQc5NUTiMc4eUWPe7SVRCICtCg&usqp=CAU"
              alt="mainsection-image-2"
            />
            <div className="main-innerDiv">
              <h3>Quibusdam modi nobis inventore velit.</h3>
              <p>
                Voluptatem ea asperiores enim temporibus quo praesentium
                incidunt.
              </p>
            </div>
          </div>
          <div className="d-flex fl-d-r">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3UPVxMufEQc5NUTiMc4eUWPe7SVRCICtCg&usqp=CAU"
              alt="mainsection-image-3"
            />
            <div className="main-innerDiv">
              <h3>Numquam dolorem ea.</h3>
              <p>
                Laboriosam voluptate odio sint excepturi quia ratione cupiditate
                temporibus eligendi.
              </p>
            </div>
          </div>
        </div>
        <aside>
          <div className="image-container"></div>
        </aside>
      </section>
      <section className=" d-flex middle-section">
        {list.map((el, index) => (
          <div key={index} className="inner-card-container">
            <img src={el.image} alt="image" />
            <h3>{el.header}</h3>
            <p>{el.description}</p>
          </div>
        ))}
      </section>
      <section className="d-flex news-setler">
        <h1>Get our newsletter</h1>
        <h5>To join worldwide community</h5>
        <div className="input-container">
          <input placeholder="Eg. hipolito.Kemmer@yahoo.com"></input>
          <button>Send now</button>
        </div>
      </section>
      <section className="d-flex footer-section">
        <h1>Reiciendis maiores cupiditate</h1>
        <div className="d-flex fl-d-r image-container jusify-center">
          <img src="https://wallpaperaccess.com/full/133855.png" alt="image" />
          <img
            src="https://i.pinimg.com/originals/e5/4d/d4/e54dd452450c88f00c3bf77c74219621.jpg"
            alt="image"
          />
          <img
            src="https://i.pinimg.com/originals/76/e8/99/76e899820c06b35f019e4e830140ecf5.jpg"
            alt="image"
          />
          <img
            src="https://i.pinimg.com/564x/df/e8/b4/dfe8b48a8ad6badb1606b675754d6ad3.jpg"
            alt="image"
          />
        </div>
        <div className="footer-card">
          <div className="footer-card-div">
            <h2>Et eaque id dolores porro magni occaecati aut</h2>
            <p>
              Vel eos iusto tenetur omnis nesciunt quod excepturi. Beatae quasi
              quia. Repellendus autem quos qui aut quas assumenda aut est et. Ut
              earum pariatur voluptatem ipsam atque molestiae. Facere distinctio
              quis ad voluptas. Saepe expedita ut quo odio.
            </p>
            <h6>
              View more <span>&gt;</span>
            </h6>
          </div>
          <div className="footer-card-div">
            {" "}
            <h2>Possimus aliquid laboriosam.</h2>
            <p>
              Error ducimus quia cumque. Ad qui quis. Facere harum numquam
              explicabo. Autem eius voluptatem quo et laboriosam neque in nobis.
              Distinctio cumque voluptatem reprehenderit officiis laboriosam
              culpa quis corporis minima.
            </p>
            <h6>
              View more <span>&gt;</span>
            </h6>
          </div>
          <div className="footer-card-div">
            {" "}
            <h2>Accusantium fugit nemo ab maiores ut aut qui.</h2>
            <p>
              Dolorem mollitia commodi aut enim fugit. Voluptatem quia impedit.
              Dolorem provident eveniet aliquid vitae. Ut ea recusandae.
              Voluptatum eum modi exercitationem impedit est beatae. Rerum
              maxime deserunt sit iste illum voluptas.
            </p>
            <h6>
              View more <span>&gt;</span>
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
}
