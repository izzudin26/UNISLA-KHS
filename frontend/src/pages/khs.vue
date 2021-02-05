<template>
  <div
    id="khs"
    class="flex mx-auto justify-self-center container w-screen h-screen justify-center align-middle"
  >
    <HeaderButton />
    <div
      class="rounded-xl sm:w-full xs:w-full md:w-2/4 lg:w-2/5 transform transition hover:scale-105 h-auto py-10 px-3 flex flex-col bg-white outline-none mx-auto shadow-lg align self-center"
    >
      <span class="p-3 text-2xl font-semibold mb-5"
        >Semester {{ $route.params.semester }}</span
      >
      <table class="table-auto px-4">
        <thead>
          <tr>
            <th class="w-1/3">Mata Kuliah</th>
            <th class="w-1/6">Nilai</th>
            <th class="w-1/6">SKS</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b-2 h-10 border-blue-500"
            v-for="(khs, i) in khs"
            :key="i"
          >
            <td class="text-sm font-semibold">{{ khs.mataKuliah }}</td>
            <td class="text-center">{{ khs.nilai }}</td>
            <td class="text-center">{{ khs.sks }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getKhs } from "../webservices/sisfounisla";

export default {
  name: "Khs",
  data: () => ({
    khs: [],
  }),
  created() {
    this.fetchKhs();
  },
  methods: {
    fetchKhs() {
      const cookie =
        sessionStorage.getItem("sessionLogin") ?? this.$router.replace("/");
      const semester = this.$route.params.semester;
      getKhs(semester, cookie)
        .then((result) => {
          this.khs = result.data;
        })
        .catch((err) => {
          err == "Unauthorized" ? this.$router.replace("/") : console.log(err);
        });
    },
  },
};
</script>

<style>
</style>