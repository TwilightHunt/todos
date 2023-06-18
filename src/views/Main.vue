<template>
  <div class="main px-4 py-3">
    <h3>Задачи:</h3>
    <div>
      <Task v-for="task in tasks" :taskInfo="task" :key="task.id" />
    </div>
    <CreateTask />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import CreateTask from "@/components/CreateTask.vue";

export default {
  components: {
    Task,
    CreateTask,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 413px;
}
</style>
