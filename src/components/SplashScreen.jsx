import React from "react";
import anime from "animejs";
import Image from "next/image";
export default function SplashScreen({ finishLoading }) {
  const [loaded, setLoaded] = React.useState("false");
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        scale: 1,
        duration: 200,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.5,
        duration: 400,
        easing: "easeOutExpo",
        translateY: 20,
        rotate: "3turn",
        opacity: 0.8,
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.1,
        duration: 400,
        easing: "spring(1, 80, 10, 0)",
        translateY: -10,
        rotate: "2turn",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        scale: 1.3,
        duration: 800,
        easing: "easeOutInElastic(1, .6)",
      });
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => setLoaded("true"), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex h-screen w-screen items-center justify-center "
      loaded={loaded}
    >
      <Image
        priority={true}
        id="logo"
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
}
