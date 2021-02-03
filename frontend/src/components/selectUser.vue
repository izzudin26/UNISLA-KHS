<template>
  <div>
    <div
    @click="relogin"
      class="border-2 m-5 border-blue-500 rounded-lg flex flex-row transform transition hover:scale-105 hover:text-blue-500 cursor-default"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 m-3 fill-current text-blue-500"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-xl font-bold my-auto">{{ user.nim }}</span>
    </div>
  </div>
</template>

<script>
import { login } from "../webservices/sisfounisla";

export default {
  name: "SelectUser",
  props: ["user"],
  data: () => ({
    isLogin: true,
  }),
  methods: {
    relogin() {
      this.isLogin = true;
          this.$router.push("/khs");

      login(this.user.nim, this.user.password)
        .then((response) => {
          sessionStorage.setItem("sessionLogin", response.cookie)
        })
        .catch((err) => {
          if (err == "wrong username password") {
            this.isLogin = false;
            this.failedMessage = "Username atau Password salah";
          }
        });
    },
  },
};
</script>

<style>
</style>