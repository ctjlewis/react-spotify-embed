/* eslint-disable max-len */
import Head from "next/head";
import { Spotify } from "../../dist";

export default function Home () {
  return (
    <>
      <Head>
        <title>React Spotify Demo</title>
      </Head>

      <main className="flex flex-col justify-center gap-8 p-8">
        <div className="flex flex-row gap-8 justify-center items-center">
          <Spotify link="https://open.spotify.com/track/1CPSRRXGTQVgc1DIRWmLcg?si=b63f02bac318404d" />
          <Spotify link="https://open.spotify.com/album/527y5zpqdZc446EbgWPd6c?si=J9Ubk3bvT-arFUpp2pMxxw" />
        </div>

        <Spotify wide link="https://open.spotify.com/track/0mpTtYiDqkcOjNZqJLmjsO?si=e116707491c24ffc" />
      </main>
    </>
  );
}
