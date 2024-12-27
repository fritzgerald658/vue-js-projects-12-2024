import { reactive } from "vue";

export const dropdowns = reactive({
  dimensionDropdown: true,
  borderStyleDropdown: true,
  backgroundDropdown: true,
  contentDropdown: true,
  animationDropdown: true,
});

export const toggleSettingsDropdown = (dropdown) => {
  switch (dropdown) {
    case "dimensionDropdown":
      dropdowns.dimensionDropdown = !dropdowns.dimensionDropdown;
      break;
    case "borderStyleDropdown":
      dropdowns.borderStyleDropdown = !dropdowns.borderStyleDropdown;
      break;
    case "backgroundDropdown":
      dropdowns.backgroundDropdown = !dropdowns.backgroundDropdown;
      break;
    case "contentDropdown":
      dropdowns.contentDropdown = !dropdowns.contentDropdown;
      break;
    case "animationDropdown":
      dropdowns.animationDropdown = !dropdowns.animationDropdown;
      break;
  }
};
