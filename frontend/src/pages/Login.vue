<template>
  <div
    id="login"
    class="flex mx-auto justify-self-center container w-screen h-screen justify-center align-middle"
  >
    <div class="rounded-xl sm:w-full xs:w-full md:w-2/4 lg:w-2/5 transform transition hover:scale-105  h-auto py-10 px-3 flex flex-col bg-white outline-none mx-auto shadow-lg align self-center">
    <span class="font-semibold p-4 flex text-2xl">Login</span>
    <form class="p-4" @submit.prevent="">
      <div class="my-auto relative flex flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="NIM"
          v-model="nim"
          class="px-3 py-3 focus:outline-none focus:border-blue-600 focus:border-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:shadow-outline w-full"
        />
      </div>
      <div class="relative mx-auto mt-5 my-auto flex flex-wrap items-stretch mb-3">
        <input
          type="text"
          v-model="password"
          placeholder="Password"
          class="px-3 py-3 block rounded-md placeholder-gray-400 focus:ring-blue-500 focus:ring-2 relative bg-white text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
      </div>
      <div class="relative mx-auto cursor-default p-1" @click="isSave = !isSave">
          <input type="checkbox" v-model="isSave" name="saveAccount">
          <label for="saveAccount" class="p-1">Ingat saya</label>
      </div>
      <button type="submit" class="block mt-6 w-full font-medium bg-blue-500 rounded-md p-1 text-white focus:outline-none">Login</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    nim: "",
    password: "",
    isSave: false,
  }),
};
</script>

<style>
</style>