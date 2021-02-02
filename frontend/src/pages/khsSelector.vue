<template>
  <div
    id="khs"
    class="flex mx-auto justify-self-center container w-screen h-screen justify-center align-middle"
  >
    <div
      class="rounded-xl sm:w-full xs:w-full md:w-2/4 lg:w-2/5 transform transition hover:scale-105 h-auto py-10 px-3 flex flex-col bg-white outline-none mx-auto shadow-lg align self-center"
    >
      <span class="font-semibold p-4 flex text-2xl">Pilih Semester</span>
      <div
        v-for="i in 8"
        :key="i"
        class="flex flex-row rounded-md hover:text-white hover:bg-blue-500 border-2 hover:border-white border-blue-500 p-2 mt-2 mr-5 ml-5 transition transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-2 mr-2 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <button @click="goTo(i)" class="block focus:outline-none font-semibold">
          Semester {{ i }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KhsSelector",
  methods: {
    goTo(semester){
      this.$router.push(`/khs/${semester}`)
    }
  }
};
</script>

<style>
</style>