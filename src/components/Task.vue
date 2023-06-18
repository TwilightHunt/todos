<template>
  <div class="task rounded px-2 py-1 cursor-pointer d-flex justify-content-between">
    <div v-if="!isEditabe" class="form-check">
      <input
        class="form-check-input cursor-pointer"
        type="checkbox"
        :checked="taskInfo.checked"
        value=""
        id="checkboxNoLabel"
        @change="setTaskState"
      />
      <label @click="switchEditableState" class="form-check-label cursor-pointer">
        {{ taskInfo.title }}
      </label>
    </div>
    <div class="position-relative" v-else>
      <input
        class="form-control mx-2 task__input"
        type="text"
        placeholder="Новая задача"
        :value="taskInfo.title"
      />
      <div class="task__input__cross" @click="cancelEdit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
          ></path>
        </svg>
      </div>
      <div class="task__input__check" @click="editTask">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="task__cross" @click="deleteTask">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path
          d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskInfo: Object,
  },
  methods: {
    deleteTask() {
      console.log("task");
      this.$store.commit("REMOVE_TASK", this.taskInfo.id);
    },
    switchEditableState() {
      this.isEditabe = true;
    },
    cancelEdit() {
      this.isEditabe = false;
    },
    editTask() {
      const newTitle = document.querySelector(".task__input").value;
      if (newTitle) {
        this.$store.commit("EDIT_TASK", { taskId: this.taskInfo.id, newTitle });
        this.isEditabe = false;
      }
    },
    setTaskState() {
      this.$store.commit("CHANGE_TASK_STATE", this.taskInfo.id);
    },
  },
  data() {
    return {
      isEditabe: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.task {
  border: 1px solid transparent;
  transition: all 0.2s ease;
  &:hover {
    border-color: #0d6efd;
  }
  &__cross {
    transition: all 0.3s ease;
    opacity: 0.7;
    &:hover {
      transform: rotate(-90deg);
      opacity: 1;
    }
  }
  &__input {
    padding: 0 8px;
    font-size: 0.875rem;

    &__cross {
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translate(0, -50%);
      opacity: 1;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.5;
      }
    }
    &__check {
      position: absolute;
      top: 46%;
      right: 20px;
      transform: translate(0, -50%);
      opacity: 1;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
