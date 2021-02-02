<template>
  <div
    id="login"
    class="flex mx-auto justify-self-center container w-screen h-screen justify-center align-middle"
  >
    <div
      class="rounded-xl sm:w-full xs:w-full md:w-2/4 lg:w-2/5 transform transition hover:scale-105 h-auto py-10 px-3 flex flex-col bg-white outline-none mx-auto shadow-lg align self-center"
    >
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
        <div
          class="relative mx-auto mt-5 my-auto flex flex-wrap items-stretch mb-3"
        >
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Password"
            class="px-3 py-3 block rounded-md placeholder-gray-400 focus:ring-blue-500 focus:ring-2 relative bg-white text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <button
              @click="showPassword = !showPassword"
              class="p-2 focus:outline-none"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="relative mx-auto cursor-default p-1"
          @click="isSave = !isSave"
        >
          <input type="checkbox" v-model="isSave" name="saveAccount" />
          <label for="saveAccount" class="p-1">Ingat saya</label>
        </div>
        <span
          v-if="failedMessage"
          class="mt-1 mb-1 text-red-500 font-semibold"
          >{{ failedMessage }}</span
        >
        <button
          :disabled="isLogin"
          @click="formLogin"
          type="submit"
          class="block mt-6 w-full font-medium bg-blue-500 rounded-full p-2 text-white focus:outline-none"
        >
          <template v-if="isLogin" class="text-center">
            <svg
              class="animate-spin my-auto mx-auto h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </template>
          <template v-else> Login </template>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from "../webservices/sisfounisla";

export default {
  name: "Login",
  data: () => ({
    isLogin: false,
    showPassword: false,
    failedMessage: "",
    nim: "",
    password: "",
    isSave: false,
  }),
  methods: {
    formLogin() {
      this.isLogin = true;
      login(this.nim, this.password)
        .then((response) => {
          this.saveSessionLogin(response.cookie);
          this.isSave && this.saveUser(this.nim, this.password);
          this.$router.push("/khs");
        })
        .catch((err) => {
          if (err == "wrong username password") {
            this.isLogin = false;
            this.failedMessage = "Username atau Password salah";
          }
        });
    },
    saveSessionLogin(session) {
      sessionStorage.setItem("sessionLogin", session);
    },
    saveUser(nim, password) {
      console.log("Saved user");
      const data = {
        nim,
        password,
      };
      sessionStorage.setItem("user", JSON.stringify(data));
      console.log(sessionStorage.getItem("user"));
    },
  },
};
</script>

<style>
</style>