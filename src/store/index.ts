import { User } from "@/types/users";
import Vue from "vue";
import Vuex, { Commit } from "vuex";

Vue.use(Vuex);

export interface State {
  users: User[];
}

export default new Vuex.Store<State>({
  state: { users: [] },
  getters: {
    users: (state: State) => state.users,
  },
  mutations: {
    updateUsers: (state: State, users: User[]) => {
      state.users = users;
    },
  },
  actions: {
    getUsers: ({ commit }: { commit: Commit }) => {
      const users = sampleData;
      commit("updateUsers", users);
      return users;
    },
  },
  modules: {},
});

const sampleData = [
  {
    id: 0,
    userId: "Stokes",
    userName: "Edith Kim",
    isAdmin: true,
  },
  {
    id: 1,
    userId: "Jaime",
    userName: "Hawkins Newton",
    isAdmin: false,
  },
  {
    id: 2,
    userId: "Meyer",
    userName: "Key Newman",
    isAdmin: true,
  },
  {
    id: 3,
    userId: "Rosella",
    userName: "Riggs Jacobs",
    isAdmin: true,
  },
  {
    id: 4,
    userId: "Burton",
    userName: "Tania Hansen",
    isAdmin: false,
  },
  {
    id: 5,
    userId: "Clara",
    userName: "Murphy Frye",
    isAdmin: true,
  },
  {
    id: 6,
    userId: "Linda",
    userName: "Rae Rivers",
    isAdmin: true,
  },
  {
    id: 7,
    userId: "Boyer",
    userName: "Robinson Barry",
    isAdmin: false,
  },
  {
    id: 8,
    userId: "Wendy",
    userName: "Adeline Williams",
    isAdmin: false,
  },
  {
    id: 9,
    userId: "Miranda",
    userName: "Adrian Sharpe",
    isAdmin: false,
  },
  {
    id: 10,
    userId: "Fisher",
    userName: "Bates Dunlap",
    isAdmin: true,
  },
];
