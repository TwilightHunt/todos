import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    lastId: 0,
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  mutations: {
    REMOVE_TASK: (state, taskId) => {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    ADD_TASK: (state, task) => {
      const newTask = { id: state.lastId, title: task };
      state.tasks.push(newTask);
      state.lastId++;
    },
    EDIT_TASK: (state, { taskId, newTitle }) => {
      state.tasks.forEach((task) => {
        if (task.id === taskId) task.title = newTitle;
      });
    },
    CHANGE_TASK_STATE: (state, taskId) => {
      state.tasks.forEach((task) => {
        if (task.id === taskId) task.checked = !task.checked;
      });
    },
  },
  plugins: [createPersistedState()],
});
