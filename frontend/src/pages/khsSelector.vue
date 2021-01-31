<template>
  <div
    id="khs"
    class="flex mx-auto justify-self-center container w-screen h-screen justify-center align-middle"
  >
    <div class="rounded-xl sm:w-full xs:w-full md:w-2/4 lg:w-2/5 transform transition hover:scale-105  h-auto py-10 px-3 flex flex-col bg-white outline-none mx-auto shadow-lg align self-center">
    <span class="font-semibold p-4 flex text-2xl">Pilih Semester</span>
    <div v-for="i in 8" :key="i" class="rounded-md hover:text-white hover:bg-blue-500 border-2 hover:border-white border-blue-500 p-2 mt-2 mr-5 ml-5 transition transform hover:scale-105">
        <button class="block focus:outline-none font-semibold">Semester {{ i }}</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "KhsSelector"
}
</script>

<style>

</style>