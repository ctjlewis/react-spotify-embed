import { type NextApiHandler } from "next";

const hello: NextApiHandler = (_, res) => {
  res.status(200).json({ text: "Hello" });
};

export default hello;
