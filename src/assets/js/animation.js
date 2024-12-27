import { gsap } from "gsap";

export const handleChanged = (square, startAnimation) => {
  gsap.killTweensOf(square.value);
  startAnimation.value = true;
  applyAnimations();
};

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
