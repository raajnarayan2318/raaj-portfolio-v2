import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Typewriter({
  text,
  speed = 55,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-cyan-300 align-middle" />
    </span>
  );
}