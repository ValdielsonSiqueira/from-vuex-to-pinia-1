import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Valdi Siqueira",
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0];
    }
  }
});
