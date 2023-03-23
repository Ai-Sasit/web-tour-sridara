<template>
  <header>
    <nav
      class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <div class="flex flex-wrap justify-between items-center">
        <NuxtLink to="/" class="flex items-center" style="color: back">
          <img
            src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            style="color: black"
            >ระบบจัดการข้อมูลทัวร์</span
          >
        </NuxtLink>

        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2">
          <ul
            style="margin-bottom: 0; align-items: center"
            class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <v-btn variant="flat" @click="$router.push('/')"
                >รายการทัวร์</v-btn
              >
            </li>
            <li>
              <v-btn variant="flat" @click="$router.push('/addtour')"
                >สร้างทัวร์</v-btn
              >
            </li>
            <li>
              <v-btn variant="flat" @click="$router.push('/createreceipt')"
                >สร้างใบเสร็จรับเงิน</v-btn
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div>
    <main><slot></slot></main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { initModals } from "flowbite";
import { signOut } from "@firebase/auth";
import { read_one_data_conditions } from "~~/services/configs";
import jwt_decode from "jwt-decode";
export default defineComponent({
  mounted() {
    initModals();
    // if (localStorage.getItem("token") == null) {
    //   this.$router.push({ path: "/login" });
    // } else {
    //   const jwt: any = jwt_decode(String(localStorage.getItem("token")));
    //   read_one_data_conditions("user", "uid", jwt.user_id).then((result) => {
    //     console.log(jwt);
    //     this.role = Number(result[0].fields.role.integerValue);
    //     if (this.role === 0) {
    //       this.role_name = "ผู้ดูแลระบบ";
    //     }
    //     this.profile_auth = jwt;
    //   });
    // }
  },
  data() {
    return {
      raw: this.$route.name,
      role: 0,
      role_name: "",
      account: false,
      profile_auth: {} as any,
    };
  },
  beforeUpdate() {
    this.raw = this.$route.name;
    // if (localStorage.getItem("token") == null) {
    //   this.$router.push({ path: "/login" });
    // } else {
    //   const jwt: any = jwt_decode(String(localStorage.getItem("token")));
    //   read_one_data_conditions("user", "uid", jwt.user_id).then((result) => {
    //     console.log(jwt);
    //     this.role = Number(result[0].fields.role.integerValue);
    //     if (this.role === 0) {
    //       this.role_name = "ผู้ดูแลระบบ";
    //     }
    //     this.profile_auth = jwt;
    //   });
    // }
  },
  methods: {
    logout() {
      signOut(this.$auth).then(() => {
        localStorage.removeItem("token");
        console.log("logout");
        this.$router.push("/login");
      });
    },
  },
});
</script>
