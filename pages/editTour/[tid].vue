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
          แก้ไขข้อมูลทัวร์
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
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
          ><v-col cols="2">
            <br />
            <v-btn
              variant="tonal"
              @click="addGuide"
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
                  <th class="text-center">เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(j, l) in guided_ls" :key="l">
                  <td>{{ j.name }}</td>
                  <td>{{ j.tel }}</td>
                  <td style="text-align: center; width: 10%">
                    <v-btn
                      variant="text"
                      color="red-darken-4"
                      @click="removeGuide(l)"
                      >ลบ</v-btn
                    >
                  </td>
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
              >พาหนะ ขาไป</label
            >
            <input
              type="text"
              id="large-input"
              v-model="vehicle_out"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >พาหนะ ขากลับ</label
            >
            <input
              type="text"
              v-model="vehicle_in"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ราคาต่อหน่วย</label
            >
            <input
              type="number"
              v-model.number="tour_price"
              id="large-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ภาษี (0% 7% 9%)</label
            >
            <select
              style="height: 55%"
              v-model="tour_tax"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="0%">0%</option>
              <option value="7%">7%</option>
              <option value="9%">9%</option>
            </select>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-btn
              variant="tonal"
              block
              color="green-accent-4"
              @click="editTourPackage"
              >ยืนยันการแก้ไขทัวร์</v-btn
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
          แก้ไขข้อมูลโรงแรมที่พัก
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
              <th class="text-left">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formHotel.hotel_ls" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.amount_of_rooms }}</td>
              <td>{{ item.check_in }}</td>
              <td>{{ item.check_out }}</td>
              <td style="text-align: center; width: 10%">
                <v-btn
                  variant="text"
                  color="red-darken-4"
                  @click="removeHotel(item.id)"
                  >ลบ</v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="end"
      ><v-col cols="2" style="margin-right: -10vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="deep-purple-darken-4"
          @click="$router.push('/')"
          >ไปหน้ารายการทัวร์</v-btn
        ></v-col
      ><v-col cols="2" style="margin-right: -6vmin; margin-top: -2vmin"
        ><v-btn
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/addusertour/${$route.params.tid}`)"
          >ไปหน้าเพิ่มลูกทัวร์</v-btn
        ></v-col
      ></v-row
    >
  </div>
</template>
<script lang="ts">
import {
  read_all_data,
  read_one_data,
  create_data,
  delete_data,
  update_data,
} from "~~/services/pyapi";
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
  async mounted() {
    this.tour_id = String(this.$route.params.tid);

    const tour_data = await read_one_data("tour", this.tour_id);
    this.tour_name = tour_data.name;
    this.tour_program = tour_data.program_name;
    this.guided_ls = tour_data.guided_tour;
    this.day = tour_data.amount_of_days;
    this.night = tour_data.amount_of_nights;
    this.go_date = tour_data.date_go;
    this.back_date = tour_data.date_back;
    this.vehicle_in = tour_data.vehicle_in;
    this.vehicle_out = tour_data.vehicle_out;
    this.tour_price = tour_data.price;
    this.tour_tax = tour_data.tax;
    const hotel_ls = await read_all_data(`hotels?tour_id=${this.tour_id}`);
    this.formHotel.hotel_ls = hotel_ls;

    this.d_range = [
      dayjs(this.go_date, "DD/MM/BBBB"),
      dayjs(this.back_date, "DD/MM/BBBB"),
    ];
  },
  data() {
    return {
      tour_id: "",
      tour_name: "",
      tour_program: "",
      guided_ls: [] as any,
      day: 0,
      night: 0,
      go_date: "",
      back_date: "",
      vehicle_in: "",
      vehicle_out: "",
      tour_price: 0,
      tour_tax: "",
      g_name: "",
      g_tel: "",
      d_range: [] as any,
      d_range2: [],
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
    removeGuide(index: number) {
      this.guided_ls.splice(index, 1);
    },
    removeHotel(id: string) {
      delete_data("hotel", id).then(() => {
        read_all_data(`hotels?tour_id=${this.tour_id}`).then((data) => {
          this.formHotel.hotel_ls = data;
        });
      });
    },
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
        this.guided_ls.length == 0
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    editTourPackage() {
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
          guided_tour: this.guided_ls,
          price: this.tour_price,
          tax: this.tour_tax,
        };
        update_data("tour", this.tour_id, payload).then((result) => {
          this.tour_id = result.id;
          this.$message.success("แก้ไขข้อมูลสำเร็จ");
        });
      }
    },
    validateHotelData() {
      if (
        this.formHotel.name == "" ||
        this.formHotel.amount_room <= 0 ||
        this.formHotel.check_in == "" ||
        this.formHotel.check_out == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
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
    validateGuideData() {
      if (this.g_name == "" || this.g_tel == "") {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    addGuide() {
      if (this.validateGuideData()) {
        this.guided_ls.push({ name: this.g_name, tel: this.g_tel });
      }
      this.g_name = "";
      this.g_tel = "";
    },
  },
});
</script>
