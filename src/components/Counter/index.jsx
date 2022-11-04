import { useRef, useState } from "react";
import { useEffect } from "react";

const Counter = ({ maxNumber = 1000 }) => {
  console.log("maxNumber", maxNumber);
  const TIME = 1000;
  const STEP =
    maxNumber < 10
      ? 1
      : maxNumber < 100
      ? 8
      : maxNumber < 1000
      ? 24
      : maxNumber < 100000
      ? 87
      : maxNumber < 1000000
      ? 254
      : maxNumber < 10000000
      ? 54578
      : 754578;
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const counter = () => {
      let intervalTime = Math.round(TIME / (maxNumber / STEP));

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev + STEP > maxNumber) {
            clearInterval(interval);
            return maxNumber;
          }

          return prev + STEP;
        });
      }, intervalTime);
    };

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          counter();
        }
      },
      { threshold: 0.5 }
    );

    const elem = ref.current;

    observer.observe(elem);

    return () => {
      observer.unobserve(elem);
    };
  }, [maxNumber]);

  return (
    <div ref={ref} id="counter">
      {count}
    </div>
  );
};

export default Counter;
