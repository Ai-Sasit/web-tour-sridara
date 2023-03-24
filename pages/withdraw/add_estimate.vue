<template>
  <div style="border-radius: 1rem">
    <v-row style="padding: 1rem">
      <v-col class="shadow-card">
        <h1
          v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          แบบฟอร์มประมาณการเบิกเงินสดย่อย | {{ tour_detail.name }}
        </h1>
        <h1
          v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Loading...
        </h1>
        <h5>เลขที่ใบ: {{ no }}</h5>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อผู้ขอเบิก</label
            >
            <input
              type="text"
              id="base-input"
              v-model="withdrawer_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >แผนก</label
            >
            <input
              type="text"
              id="small-input"
              v-model="withdrawer_positions"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >วันที่ต้องการใช้เงิน</label
            >
            <a-date-picker
              :locale="locale"
              v-model:value="date_want_pay"
              class="date-picker"
              format="DD/MM/YYYY" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >วัตถุประสงค์การยืมเงินทดลองจ่าย</label
            >
            <input
              type="text"
              id="base-input"
              v-model="objective"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row style="padding: 1rem">
      <v-col class="shadow-card">
        <h1
          v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          รายละเอียด
        </h1>
        <h1
          v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Loading... รายละเอียด
        </h1>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ราคา</label
            >
            <input
              type="number"
              id="small-input"
              v-model.number="esitmate_detail.price_per_unit"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ประเภทค่าใช้จ่าย</label
            >
            <select
              style="height: 55%"
              v-model="esitmate_detail.type"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="เบี้ยเลี้ยง">เบี้ยเลี้ยง</option>
              <option value="ค่าที่พัก">ค่าที่พัก</option>
              <option value="ค่ายานพาหนะ">ค่ายานพาหนะ</option>
              <option value="ค่าน้ำมัน">ค่าน้ำมัน</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวน</label
            >
            <input
              type="number"
              id="base-input"
              v-model.number="esitmate_detail.qty"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รายละเอียดค่าใช้จ่าย</label
            >
            <textarea
              type="text"
              style="height: 33.6px"
              id="base-input"
              v-model="esitmate_detail.desc"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              @click="addEstimate"
              :loading="addLoading"
              style="margin-top: 5px"
              color="light-blue-darken-4"
              >เพิ่มรายการ</v-btn
            >
          </v-col>
        </v-row>
        <br />
        <div
          class="relative overflow-x-auto"
          style="
            border-radius: 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
              rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
          ">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">รายละเอียดค่าใช้จ่าย</th>
                  <th scope="col" class="px-6 py-3">ราคา</th>
                  <th scope="col" class="px-6 py-3">ประเถทค่าใช้จ่าย</th>
                  <th scope="col" class="px-6 py-3">จำนวน</th>
                  <th scope="col" class="px-6 py-3">ยอดสุทธิ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!esitmate_ls.length">
                  <td class="px-6 py-4" colspan="12" style="text-align: center">
                    ไม่มีข้อมูล
                  </td>
                </tr>
                <tr
                  class="table-row-hover"
                  v-for="(item, index) in esitmate_ls"
                  @click="deleteAlert(item.id, item.desc)"
                  :key="index">
                  <td class="px-6 py-4">
                    {{ index + 1 }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.desc }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.price_per_unit }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.type }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.qty }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.total }}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <br />
        <v-row justify="end">
          <v-col style="display: flex; justify-content: end">
            <v-btn
              variant="tonal"
              color="teal-darken-3"
              @click="addEstimateHeader"
              >สร้างใบประมาณการเบิกเงินสดย่อย</v-btn
            ></v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  read_all_data,
  create_data,
  read_one_data,
  delete_data,
  genRanDec,
} from "~~/services/pyapi";
import { defineComponent } from "vue";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  data() {
    return {
      tour_id: "",
      tour_detail: "",
      addLoading: false,
      no: "",
      withdrawer_name: "",
      withdrawer_positions: "",
      date_want_pay: "",
      objective: "",
      esitmate_ls: [],
      esitmate_detail: {
        desc: "",
        type: "",
        qty: 0,
        price_per_unit: 0,
        total: 0,
      },
    };
  },
  setup() {
    return {
      locale,
    };
  },
  mounted() {
    this.tour_id = String(this.$route.query.tour_id);
    read_one_data("tour", this.tour_id).then((result) => {
      this.tour_detail = result;
    });
    this.no = genRanDec(13);
    read_all_data(`estimate_lists?no=${this.no}`).then((result) => {
      this.esitmate_ls = result;
    });
  },
  methods: {
    deleteAlert(id, name) {
      Swal.fire({
        title: "คุณกำลังจะลบลูกทัวร์",
        html: `รายชื่อ <span style="color: red">${name}</span> จะถูกลบอย่างถาวร`,
        icon: "question",
        confirmButtonText: "ยืนยัน",
        showCancelButton: true,
        cancelButtonText: "ยกเลิก",
        focusConfirm: false,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return delete_data("member", id).then(() => {
            read_all_data(
              `members?tour_id=${String(this.$route.params.tourId)}`
            ).then((result) => {
              this.members_ls = result;
            });
          });
        },
      });
    },
    validateEstiamte() {
      if (
        this.esitmate_detail.desc == "" ||
        this.esitmate_detail.type == "" ||
        this.esitmate_detail.qty <= 0 ||
        this.esitmate_detail.price_per_unit <= 0
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    validateEstiamteHeader() {
      if (
        this.no == "" ||
        this.withdrawer_name == "" ||
        this.withdrawer_positions == "" ||
        this.date_want_pay == "" ||
        this.objective == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    sumTotalPrice() {
      let total = 0;
      this.esitmate_ls.forEach((item) => {
        total += item.total;
      });
      return total;
    },
    addEstimateHeader() {
      if (this.validateEstiamteHeader()) {
        let data = {
          tour_id: this.tour_id,
          no: this.no,
          date: dayjs(new Date()).format("YYYY-MM-DD"),
          withdrawer_name: this.withdrawer_name,
          withdrawer_position: this.withdrawer_positions,
          date_want_pay: this.date_want_pay,
          objective: this.objective,
          tour_name: this.tour_detail.name,
          total_price: this.sumTotalPrice(),
          approve_name: "",
        };
        create_data("estimate", data).then(() => {
          this.$message.success("บันทึกข้อมูลสำเร็จ");
        });
      }
    },
    addEstimate() {
      if (this.validateEstiamte()) {
        this.addLoading = true;
        this.esitmate_detail.total =
          this.esitmate_detail.qty * this.esitmate_detail.price_per_unit;
        this.esitmate_detail.estimate_id = this.no;
        create_data("estimate_list", this.esitmate_detail).then(() => {
          read_all_data(`estimate_lists?no=${this.no}`).then((result) => {
            this.esitmate_ls = result;
            this.addLoading = false;
            this.$router.push(`/tourdata/${this.tour_id}`);
          });
          this.esitmate_detail = {
            desc: "",
            type: "",
            qty: 0,
            price_per_unit: 0,
            total: 0,
          };
        });
      }
    },
  },
});
</script>
<style scoped>
.shadow-card {
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin: 1rem;
}

.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}

.table-row-hover {
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  transition: 0.2s;
}

.table-row-hover:hover {
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
}
.date-picker {
  height: 33.6px;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
