"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "@/public/styles/page/products/game.module.scss";

// COMPONENTS
import GameSwiper from "@/app/components/page/products/game/GameSwiper";

const SingleGame = ({ params: { id } }) => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //? USE EFFECT
  useEffect(() => {
    const fetchGame = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/games/${id}`
        );
        const data = await res.json();
        setGame(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGame();
  }, []);

  //? STATES
  const [qty, setQty] = useState(1);
  const [edition, setEdition] = useState("standard");
  const [condition, setCondition] = useState("new");
  const [message, setMessage] = useState("");

  //? REFS
  const gameBgdImg = useRef();

  const platforms = game && game.platforms.join(", ");
  const metascore = game && game.metacriticScore;
  const genres = game && game.genres.join(", ");
  const releaseDate = game && game.released;
  const category = game && game.category;
  const bgdImg = game && game.background_image;

  if (game !== null) {
    return (
      <section id={styles.game_content}>
        <Image
          src={bgdImg}
          className={styles.bgd_image}
          ref={gameBgdImg}
          alt="Game Background Image"
          width={1920}
          height={1080}
        />
        <div className={styles.game_grid}>
          {/* GAME DETAILS */}
          <div className={styles.game_details}>
            <div className={styles.game_brief}>
              <h2 className={styles.game_title}>{game.name}</h2>
              {/* <h5 className="game-publisher">Publisher: Sony</h5> */}
              <h4 className={styles.game_price}>
                {game.price ? `AED ${game.price.toFixed(2)}` : "TBA"}
              </h4>
              <hr />

              {/* CART OPTIONS */}
              <form className={styles.cart_form}>
                <div className={styles.game_quantity}>
                  <h5>Quantity</h5>
                  <select name="quantity" id={styles.quantity}>
                    <option
                      value="1"
                      selected
                      onClick={(e) => setQty(e.target.value)}
                    >
                      1
                    </option>
                    <option value="2" onClick={(e) => setQty(e.target.value)}>
                      2
                    </option>
                    <option value="3" onClick={(e) => setQty(e.target.value)}>
                      3
                    </option>
                    <option value="4" onClick={(e) => setQty(e.target.value)}>
                      4
                    </option>
                    <option value="5" onClick={(e) => setQty(e.target.value)}>
                      5
                    </option>
                  </select>
                  <hr />
                </div>
                <h5>Edition</h5>
                <div className={styles.form_group}>
                  <input
                    type="radio"
                    name="edition"
                    id="standard"
                    value="standard"
                    onChange={(e) => setEdition(e.target.value)}
                    checked
                  />
                  <label htmlFor="standard">Standard</label>

                  <input
                    type="radio"
                    name="edition"
                    id="collectors"
                    value="collectors"
                    onChange={(e) => setEdition(e.target.value)}
                  />
                  <label htmlFor="collectors">Collectors</label>
                </div>

                <hr />

                <h5>Condition</h5>
                <div className={styles.form_group}>
                  <input
                    type="radio"
                    name="condition"
                    id="new"
                    value="new"
                    onChange={(e) => setCondition(e.target.value)}
                    checked
                  />
                  <label htmlFor="new">New</label>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: `${
                      game.countInStock > 0 ? "#20b830" : "#dc143c"
                    }`,
                  }}
                  disabled={game.countInStock < 1}
                  // onClick={addToCartHandler}
                >
                  {/* {game.countInStock < 1 ? "Out of Stock" : "Add to Cart"} */}
                  {game.countInStock < 1 && game.price === 0
                    ? "TBA"
                    : "Add to Cart"}
                </button>
                <small>{message}</small>
              </form>
            </div>

            <div className={styles.about_game}>
              <h2 className={styles.about_title}>About {game.name}</h2>
              <p className={styles.about_description}>{game.description}</p>

              <div className={styles.about_grid_details}>
                <div className={styles.about_grid_detail}>
                  <p>Platforms</p>
                  <p>{platforms}</p>
                </div>

                <div className={styles.about_grid_detail}>
                  <p>Metascore</p>
                  <p>{metascore === 0 ? "N/A" : metascore}</p>
                </div>

                <div className={styles.about_grid_detail}>
                  <p>Genre</p>
                  <p>{genres && genres.length >= 1 ? genres : "N/A"}</p>
                </div>

                <div className={styles.about_grid_detail}>
                  <p>Release Date</p>
                  <p>{releaseDate}</p>
                </div>

                <div className={styles.about_grid_detail}>
                  <p>Developer</p>
                  <p>{game.developer}</p>
                </div>

                <div className={styles.about_grid_detail}>
                  <p>Publisher</p>
                  <p>{game.publisher}</p>
                </div>
              </div>
            </div>
          </div>

          {/* GAME GALLERY */}
          <div className={styles.game_gallery}>
            <h1>Image Gallery</h1>
            <GameSwiper images={game.screenshots} />
          </div>
        </div>
      </section>
    );
  }
};

export default SingleGame;
