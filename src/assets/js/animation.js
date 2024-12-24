import { gsap } from "gsap";
const applyAnimations = (square, selectedAnimation) => {
  if (!square.value) {
    console.warn("No square element found.");
    return;
  }
  gsap.killTweensOf(square.value);
  switch (selectedAnimation.value) {
    case "rotate":
      gsap.to(square.value, {
        rotation: 360,
        duration: 2,
        onComplete: () => gsap.set(square.value, { rotation: 0 }),
      });
  }
};

export default applyAnimations;
