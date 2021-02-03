<template>
  <button @click="back" class="w-8 h-8 absolute text-white top-5 left-5 focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <button @click="logout" class="w-8 h-8 absolute text-white top-5 right-5 focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "HeaderButton",
  methods: {
    back() {
      this.$router.replace("/khs");
    },
    logout(){
      sessionStorage.removeItem("sessionLogin")
      this.$router.replace("/")
    }
  },
};
</script>

<style>
</style>