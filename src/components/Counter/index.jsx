import { useRef, useState } from "react";
import { useEffect } from "react";

const Counter = ({ maxNumber = 1000 }) => {
  const TIME = 3000;
  const STEP =
    maxNumber < 10 ? 1 : maxNumber < 1000 ? 8 : maxNumber < 10000 ? 77 : 192;
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
