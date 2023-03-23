<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col
        style="
          border-radius: 1rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
          margin: 1rem;
        ">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ข้อมูลทัวร์
        </h1>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อทริปทัวร์</label
            >
            <input
              type="text"
              v-model="tour_name"
              :disabled="lock_form"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อโปรแกรมทัวร์</label
            >
            <input
              type="text"
              v-model="tour_program"
              :disabled="lock_form"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
        ></v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อไกด์</label
            >
            <input
              type="text"
              id="base-input"
              v-model="g_name"
              :disabled="lock_form"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เบอร์โทร</label
            >
            <input
              type="text"
              v-model="g_tel"
              :disabled="lock_form"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col cols="2">
            <br />
            <v-btn
              variant="tonal"
              @click="addGuide"
              :disabled="lock_form"
              color="orange-lighten-1"
              style="margin-top: 5px"
              >เพิ่มไกด์</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-table
              density="compact"
              style="border: 1px solid #cfd8dc; border-radius: 0.5rem">
              <thead>
                <tr>
                  <th class="text-left">ชื่อไกด์</th>
                  <th class="text-left">เบอร์โทรไกด์</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!guide_ls.length">
                  <td colspan="2" style="text-align: center">ไม่มีข้อมูล</td>
                </tr>
                <tr v-for="(j, l) in guide_ls" :key="l">
                  <td>{{ j.name }}</td>
                  <td>{{ j.tel }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนวัน</label
            >
            <input
              type="number"
              v-model.number="day"
              id="base-input"
              :disabled="lock_form"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col cols="3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนคืน</label
            >
            <input
              type="number"
              id="small-input"
              :disabled="lock_form"
              v-model.number="night"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col
            ><label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ระยะเวลา</label
            ><a-range-picker
              :locale="locale"
              :disabled="lock_form"
              v-model:value="d_range"
              format="DD/MM/YYYY"
              style="
                height: 55%;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              "
          /></v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เที่ยวบินหรือพาหนะอื่นๆขาไป</label
            >
            <input
              type="text"
              id="large-input"
              :disabled="lock_form"
              v-model="vehicle_out"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เที่ยวบินหรือพาหนะอื่นๆขากลับ</label
            >
            <input
              type="text"
              v-model="vehicle_in"
              :disabled="lock_form"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              :disabled="lock_form"
              color="green-accent-4"
              @click="addTourPackage"
              >เพิ่มทัวร์</v-btn
            ></v-col
          >
        </v-row>
      </v-col>

      <v-col
        style="
          border-radius: 1rem;
          margin: 1rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        ">
        <h3
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ข้อมูลโรงแรมที่พัก
        </h3>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >ชื่อโรงแรม</label
          >
          <input
            type="text"
            id="large-input"
            :disabled="!lock_form"
            v-model="formHotel.name"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวนห้องพัก</label
            >
            <input
              type="number"
              v-model.number="formHotel.amount_room"
              id="base-input"
              :disabled="!lock_form"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col
            ><label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ระยะเวลา</label
            ><a-range-picker
              v-model:value="d_range2"
              :locale="locale"
              :disabled="!lock_form"
              format="DD/MM/YYYY"
              style="
                height: 55%;
                background-color: #f9fafb;
                border-radius: 0.4rem;
                width: 100%;
              "
          /></v-col>
        </v-row>

        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              @click="addHotel"
              color="teal-accent-4"
              :disabled="!lock_form"
              >เพิ่มโรงแรม</v-btn
            ></v-col
          >
        </v-row>
        <br />
        <v-table
          density="compact"
          fixed-header
          height="220px"
          style="border: 1px solid #cfd8dc">
          <thead class="text-head-table">
            <tr>
              <th class="text-left">ชื่อโรงแรม</th>
              <th class="text-left">จำนวนห้องพัก</th>
              <th class="text-left">วันเช็คอินน์</th>
              <th class="text-left">วันเช็คเอ้าท์</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formHotel.hotel_ls" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.amount_of_rooms }}</td>
              <td>{{ item.check_in }}</td>
              <td>{{ item.check_out }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="end"
      ><v-col cols="2" style="margin-right: -6vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/addusertour/${tour_id}`)"
          :disabled="!lock_form"
          >ไปหน้าเพิ่มลูกทัวร์</v-btn
        ></v-col
      ></v-row
    >
  </div>
</template>
<script lang="ts">
import { create_data, read_all_data } from "~~/services/pyapi";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
export default defineComponent({
  setup() {
    return {
      locale,
    };
  },
  data() {
    return {
      tour_name: "",
      tour_program: "",
      guide_ls: [] as any,
      day: 0,
      night: 0,
      go_date: "",
      back_date: "",
      members: 0,
      vehicle_in: "",
      vehicle_out: "",
      g_name: "",
      g_tel: "",
      d_range: [],
      d_range2: [],
      lock_form: false,
      tour_id: "",
      formHotel: {
        name: "",
        amount_room: 0,
        check_in: "",
        check_out: "",
        hotel_ls: [] as any,
      },
    };
  },
  watch: {
    d_range(newValue) {
      this.go_date = newValue[0];
      this.back_date = newValue[1];
    },
    d_range2(newValue) {
      this.formHotel.check_in = newValue[0];
      this.formHotel.check_out = newValue[1];
    },
  },
  methods: {
    validateTourData() {
      if (
        this.tour_name == "" ||
        this.tour_program == "" ||
        this.go_date == "" ||
        this.back_date == "" ||
        this.day <= 0 ||
        this.night <= 0 ||
        this.vehicle_in == "" ||
        this.vehicle_out == "" ||
        this.guide_ls.length == 0
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    validateGuideData() {
      if (this.g_name == "" || this.g_tel == "") {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    validateHotelData() {
      if (
        this.formHotel.name == "" ||
        this.formHotel.amount_room == 0 ||
        this.formHotel.check_in == "" ||
        this.formHotel.check_out == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    addTourPackage() {
      if (this.validateTourData()) {
        const payload = {
          name: this.tour_name,
          program_name: this.tour_program,
          date_go: dayjs(this.go_date).format("DD/MM/BBBB"),
          date_back: dayjs(this.back_date).format("DD/MM/BBBB"),
          amount_of_days: this.day,
          amount_of_nights: this.night,
          vehicle_in: this.vehicle_in,
          vehicle_out: this.vehicle_out,
          guided_tour: this.guide_ls,
        };
        create_data("tour", payload).then((result) => {
          this.lock_form = true;
          this.tour_id = result.id;
          this.$message.success("เพิ่มข้อมูลสำเร็จ");
        });
      }
    },
    addHotel() {
      const payload = {
        tour_id: this.tour_id,
        name: this.formHotel.name,
        amount_of_rooms: this.formHotel.amount_room,
        check_in: dayjs(this.formHotel.check_in).format("DD/MM/BBBB"),
        check_out: dayjs(this.formHotel.check_out).format("DD/MM/BBBB"),
      };
      if (this.validateHotelData()) {
        create_data("hotel", payload).then(() => {
          read_all_data(`hotels?tour_id=${this.tour_id}`).then((result) => {
            this.formHotel.hotel_ls = result;
          });
        });
      }
    },
    addGuide() {
      if (this.validateGuideData()) {
        this.guide_ls.push({ name: this.g_name, tel: this.g_tel });
      }
      this.g_name = "";
      this.g_tel = "";
    },
  },
});
</script>
