<template>
  <div style="border-radius: 1rem">
    <v-row>
      <v-col class="shadow-card">
        <h1 v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          แบบฟอร์มประมาณการเบิกเงินสดย่อย | {{ tour_detail.name }}
        </h1>
        <h1 v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Loading... แบบฟอร์มประมาณการเบิกเงินสดย่อย
        </h1>
        <v-row>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ขอเบิก</label>
            <input type="text" id="base-input" v-model="surname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">แผนก</label>
            <input type="text" id="small-input" v-model="lastname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ต้องการใช้เงิน</label>
            <a-date-picker :locale="locale" v-model:value="dob" class="date-picker" format="DD/MM/YYYY" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">โครงการ</label>
            <select style="height: 55%" v-model="gender"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="ทัวร์ 1">ทัวร์ 1</option>
              <option value="ทัวร์ 2">ทัวร์ 2</option>
              <option value="ทัวร์ 3">ทัวร์ 3</option>
            </select>
          </v-col>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วัตถุประสงค์การยืมเงินทดลองจ่าย</label>
            <input type="text" id="base-input" v-model="nationality"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn block variant="tonal" @click="addMember" :loading="addLoading" style="margin-top: 5px"
              color="light-blue-darken-4">เพิ่มลูกทัวร์</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="shadow-card">
        <h1 v-if="tour_detail"
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          รายละเอียด
        </h1>
        <h1 v-else
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Loading... รายละเอียด
        </h1>
        <v-row>
          <v-col>
            <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดค่าใช้จ่าย</label>
            <input type="text" id="base-input" v-model="surname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>

          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา</label>
            <input type="text" id="small-input" v-model="lastname_thai"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- <label for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ค่าใช้จ่าย</label> -->
            <v-row>
              <v-col>
                ค่าเบี่ยเลี้ยง
              </v-col>
              <v-col>
                ค่าที่พัก
              </v-col>
              <v-col>
                ค่ายานพาหะนะ
              </v-col>
              <v-col>
                ค่าน้ำมัน
              </v-col>
              <v-col>
                อื่น ๆ
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox :model-value="false"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox :model-value="false"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox :model-value="false"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox :model-value="false"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox :model-value="false"></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
            <input type="text" id="base-input" v-model="nationality"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ยอดสุทธิ</label>
            <input type="text" id="base-input" v-model="nationality"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn block variant="tonal" @click="addMember" :loading="addLoading" style="margin-top: 5px"
              color="light-blue-darken-4">เพิ่มลูกทัวร์</v-btn>
          </v-col>
        </v-row>
        <br />
        <div class="relative overflow-x-auto" style="
                            border-radius: 0.5rem;
                            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                              rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
                          ">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">รายละเอียดค่าใช้จ่าย</th>
                  <th scope="col" class="px-6 py-3">ราคา</th>
                  <th scope="col" class="px-6 py-3">ค่าใช้จ่าย
                <tr>
                  <th scope="col" class="px-2 py-3">เบี่ยเลี้ยง</th>
                  <th scope="col" class="px-2 py-3">ค่าที่พัก</th>
                  <th scope="col" class="px-2 py-3">ค่ำยานพาหะนะ</th>
                  <th scope="col" class="px-2 py-3">ค่าน้ำมัน</th>
                  <th scope="col" class="px-2 py-3">อื่น ๆ</th>
                </tr>
                </th>
                <th scope="col" class="px-6 py-3">จำนวน</th>
                <th scope="col" class="px-6 py-3">ยอดสุทธิ</th>
                <th scope="col" class="px-6 py-3">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!members_ls.length">
                  <td class="px-6 py-4" colspan="12" style="text-align: center">
                    ไม่มีข้อมูล
                  </td>
                </tr>
                <tr class="table-row-hover" v-for="(item, index) in members_ls"
                  @click="deleteAlert(item.id, item.thai_name)" :key="index">
                  <td class="px-6 py-4">
                    {{ index + 1 }}</td>
                  <td class="px-6 py-4">
                    {{ item.thai_name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.national_id }}
                  </td>
                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                        style="background-color: #81c784">
                        <tr>
                          <th scope="col" class="px-2 py-3">เบี่ยเลี้ยง</th>
                          <th scope="col" class="px-2 py-3">ค่าที่พัก</th>
                          <th scope="col" class="px-2 py-3">ค่ำยานพาหะนะ</th>
                          <th scope="col" class="px-2 py-3">ค่าน้ำมัน</th>
                          <th scope="col" class="px-2 py-3">อื่น ๆ</th>
                        </tr>
                      </thead>
                    </table>
                  </td>
                  <td class="px-6 py-4">
                    {{ item.passport_no }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.passport_issue }}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
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
} from "~~/services/pyapi";
import { defineComponent } from "vue";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
export default defineComponent({
  data() {
    return {
      surname_thai: "",
      lastname_thai: "",
      surname_eng: "",
      lastname_eng: "",
      nationality: "",
      gender: "",
      id_card: "",
      bed_type: "",
      telephone_number: "",
      passport: "",
      stamp_number: "",
      address: "",
      dob: "",
      out: "",
      in: "",
      d_range: [],
      members_ls: [],
      tour_detail: "",
      addLoading: false,
    };
  },
  watch: {
    d_range(newValue) {
      this.in = newValue[0];
      this.out = newValue[1];
    },
  },
  setup() {
    return {
      locale,
    };
  },
  mounted() {
    read_one_data("tour", String(this.$route.params.tourId)).then((result) => {
      this.tour_detail = result;
    });
    read_all_data(`members?tour_id=${String(this.$route.params.tourId)}`).then(
      (result) => {
        this.members_ls = result;
      }
    );
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
    validateMember() {
      if (this.surname_thai == "") {
        this.$message.error("กรุณากรอกชื่อ (ไทย)");
        return false;
      } else if (this.lastname_thai == "") {
        this.$message.error("กรุณากรอกนามสกุล (ไทย)");
        return false;
      } else if (this.surname_eng == "") {
        this.$message.error("กรุณากรอกชื่อ (อังกฤษ)");
        return false;
      } else if (this.lastname_eng == "") {
        this.$message.error("กรุณากรอกนามสกุล (อังกฤษ)");
        return false;
      } else if (this.id_card == "") {
        this.$message.error("กรุณากรอกเลขบัตรประชาชน");
        return false;
      } else if (this.bed_type == "") {
        this.$message.error("กรุณาเลือกประเภทเตียง");
        return false;
      } else if (this.passport == "") {
        this.$message.error("กรุณากรอกเลขที่หนังสือเดินทาง");
        return false;
      } else if (this.in == "") {
        this.$message.error("กรุณาเลือกวันเข้าพัก");
        return false;
      } else if (this.out == "") {
        this.$message.error("กรุณาเลือกวันออกพัก");
        return false;
      } else if (this.dob == "") {
        this.$message.error("กรุณาเลือกวันเกิด");
        return false;
      } else if (this.nationality == "") {
        this.$message.error("กรุณากรอกสัญชาติ");
        return false;
      } else if (this.gender == "") {
        this.$message.error("กรุณาเลือกเพศ");
        return false;
      } else if (this.address == "") {
        this.$message.error("กรุณากรอกที่อยู่");
        return false;
      } else if (this.stamp_number == "") {
        this.$message.error("กรุณากรอกเลขที่ใบอนุญาต");
        return false;
      } else if (this.telephone_number == "") {
        this.$message.error("กรุณากรอกเบอร์โทรศัพท์");
        return false;
      } else if (this.address == "") {
        this.$message.error("กรุณากรอกที่อยู่");
        return false;
      } else {
        return true;
      }
    },
    addMember() {
      const paylaod = {
        tour_id: String(this.$route.params.tourId),
        thai_name: `${this.surname_thai} ${this.lastname_thai}`,
        eng_name: `${this.surname_eng} ${this.lastname_eng}`,
        national_id: this.id_card,
        bed_type: this.bed_type,
        passport_no: this.passport,
        passport_issue: dayjs(this.in).format("DD/MM/BBBB"),
        passport_exp: dayjs(this.out).format("DD/MM/BBBB"),
        gender: this.gender,
        nationality: this.nationality,
        date_of_birth: dayjs(this.dob).format("DD/MM/BBBB"),
        address: this.address,
        stamp_no: this.stamp_number,
        telephone: this.telephone_number,
      };
      if (this.validateMember()) {
        this.addLoading = true;
        create_data("member", paylaod)
          .then(() => {
            read_all_data(
              `members?tour_id=${String(this.$route.params.tourId)}`
            ).then((result) => {
              this.addLoading = false;
              this.members_ls = result;
            });
          })
          .catch((err) => {
            this.$message.error(err.message);
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
</style>
