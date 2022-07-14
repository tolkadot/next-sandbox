import React, { useEffect, useState, useReducer } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Confetti from "react-dom-confetti";
import { useReward } from "react-rewards";

const Guessed: NextPage = () => {
  const catchphrase = [
    {
      name: "rainbow",
      code: "🌈",
    },
    {
      name: "baloon",
      code: "🎈",
    },
    {
      name: "unicorn",
      code: "🦄",
    },
    {
      name: "heart",
      code: "💗",
    },
  ];

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const [guessed, setGuessed] = useState("");
  const [interaction, setInteraction] = useState(catchphrase[0].code);
  const [win, setWin] = useState(false);
  const [confetti, setConfetti] = useState(false); //This contains the current time on the counter in seconds

  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "emoji", { emoji: [interaction] });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const guess = e.target.value;
    setGuessed(guess);
    const result = catchphrase.find((el) => el.name === guess);
    if (result) {
      setConfetti(true);
      setInteraction(result.code);
      setWin(true);
    }
  };

  useEffect(() => {
    confettiReward();
    setWin(false);
    setConfetti(false);
  }, [win]);

  return (
    <div className={styles.containerBlack}>
      <Head>
        <title>Pomorodro</title>
        <meta name="Guess the secret word" content="Guess the secret word" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ padding: "2rem" }}>
        <Link href="/">
          <a className={styles.rainbow}> &larr; home</a>
        </Link>
      </header>
      <main className={styles.main}>
        <div>
          <header>
            <h1 className={styles.rainbow}>Guess the secret code</h1>
          </header>
        </div>
        <span id="confettiReward" />
        <input
          className={styles.rainbowInput}
          id="guessed"
          value={guessed}
          onChange={onChange}
          onFocus={(e) => (e.target.placeholder = "")}
        />
        <p id="result"></p>
        <Confetti active={confetti} config={config} />
      </main>
    </div>
  );
};

export default Guessed;
