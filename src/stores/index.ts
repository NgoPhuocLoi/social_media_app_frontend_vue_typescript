import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;
export { default as useUserStore } from "./userStore";
