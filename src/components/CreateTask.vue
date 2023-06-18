<template>
  <div class="create-task cursor-pointer  rounded px-2 py-1">
    <div class="create-task__content_editable" v-if="isEditable">
      <div class="form-check d-flex">
        <input
          class="form-control create-task__input mx-2"
          type="text"
          placeholder="Новая задача"
          v-model="newTask"
        />
        <span class="sent-icon" @click="createNewTask">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path
              d="M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="create-task__content" v-else @click="startEdit">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
          ></path>
        </svg>
      </span>
      <span class="ml-2">Создать задачу</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: false,
      newTask: "",
    };
  },
  methods: {
    startEdit() {
      this.isEditable = true;
    },
    createNewTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.isEditable = false;
        this.newTask = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.create-task {
  border: 1px dashed transparent;
  transition: all 0.2s ease;
  &:hover {
    border-color: #0d6efd;
    opacity: 1;
  }
  &__input {
    padding: 0 8px;
    font-size: 0.875rem;
  }
  &__content_editable {
    margin: 6px 0;
  }
  &__content {
    opacity: 0.5;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
}
.sent-icon {
  opacity: 0.5;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
  }
}
</style>
