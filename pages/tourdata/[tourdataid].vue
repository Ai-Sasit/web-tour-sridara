<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"
    style="margin-top: 1rem">
    <v-card color="teal-darken-4" v-if="loading">
      <v-card-text>
        กำลังโหลดข้อมูล กรุณารอ...
        <v-progress-circular
          style="margin-left: 1rem; margin-bottom: 0.3rem"
          indeterminate
          color="white"></v-progress-circular>
      </v-card-text>
    </v-card>
    <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        v-if="tour_data"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        style="background-color: #e8f5e9">
        <tr>
          <td colspan="5" class="pb-1 pt-2 px-3">
            <h3>ชื่อทริปทัวร์ : {{ tour_data.name }}</h3>
          </td>
          <td colspan="2" class="pb-1 pt-2 px-3">
            ชื่อไกด์ : {{ tour_data.guided_tour.map((v) => v.name).join(", ") }}
          </td>
          <td colspan="4" class="pb-1 pt-2 px-3">
            เบอร์โทร : {{ tour_data.guided_tour.map((v) => v.tel).join(", ") }}
          </td>
        </tr>
        <tr>
          <td colspan="3" class="py-1 pt-2 px-3">
            <h3>โปรแกรมทัวร์ : {{ tour_data.program_name }}</h3>
          </td>
          <td colspan="2" class="py-1 px-3">
            จำนวน : {{ tour_data.amount_of_days }} วัน
            {{ tour_data.amount_of_nights }} คืน
          </td>
          <td colspan="2" class="py-1 px-3">
            วันที่เดือนปี {{ tour_data.date_go }} ถึง
            {{ tour_data.date_go }}
          </td>
          <td colspan="4" class="py-1 px-3">
            จำนวนลูกทัวร์ : {{ members_ls.length }}
          </td>
        </tr>

        <tr
          style="background-color: #e1f5fe"
          v-for="(item, index) in hotels_ls"
          :key="index">
          <td colspan="3" class="py-1 px-3">
            <h3>ชื่อโรงแรม : {{ item.name }}</h3>
          </td>
          <td colspan="2" class="py-1 px-3">
            จำนวนห้องพัก : {{ item.amount_of_rooms }}
          </td>
          <td colspan="2" class="py-1 px-3">
            วันที่เช็คอินน์ : {{ item.check_in }}
          </td>
          <td colspan="4" class="py-1 px-3">
            วันที่เช็คเอ้าท์ : {{ item.check_out }}
          </td>
        </tr>

        <tr>
          <td colspan="5" class="py-1 px-3">
            <h3>
              เที่ยวบินหรือพาหนะอื่น ๆ ขาไป :
              {{ tour_data.vehicle_in }}
            </h3>
          </td>
          <td colspan="5" class="py-1 px-3">
            <h3>
              เที่ยวบินหรือพาหนะอื่น ๆ ขากลับ :
              {{ tour_data.vehicle_out }}
            </h3>
          </td>
        </tr>
      </table>
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        :style="
          members_ls.length >= 10
            ? { 'max-height': '400px', 'margin-bottom': '2.5rem' }
            : { 'max-height': '400px' }
        ">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
          style="background-color: #81c784">
          <tr>
            <th scope="col" class="px-6 py-3">ลำดับ</th>
            <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาไทย</th>
            <th scope="col" class="px-6 py-3">หมายเลขบัตรประชาชน</th>
            <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาอังกฤษ</th>
            <th scope="col" class="px-6 py-3">หมายเลขพาสปอร์ต</th>
            <th scope="col" class="px-6 py-3">วันที่ออก</th>
            <th scope="col" class="px-6 py-3">วันที่หมด</th>
            <th scope="col" class="px-6 py-3">ว/ด/ป เกิด</th>
            <th scope="col" class="px-6 py-3">สัญชาต</th>
            <th scope="col" class="px-6 py-3">เพศ</th>
            <th scope="col" class="px-6 py-3">ประเภทเตียง</th>
            <th scope="col" class="px-6 py-3">ตรวจลงตราเลขที</th>
          </tr>
        </thead>
        <tbody v-if="!members_ls.length">
          <tr>
            <td class="px-6 py-4" colspan="12" style="text-align: center">
              ไม่มีข้อมูล
            </td>
          </tr>
        </tbody>
        <tbody v-if="members_ls.length">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="(item, index) in members_ls"
            :key="index">
            <td class="px-6 py-4" style="font-size: 13px">{{ index + 1 }}</td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.thai_name }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.national_id }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.eng_name }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.passport_no }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.passport_issue }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.passport_exp }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.date_of_birth }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.nationality }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.gender }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.bed_type }}
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
              {{ item.stamp_no }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <v-row
    justify="space-between"
    style="
      background-color: #eceff1;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      width: 100%;
      margin: 0;
      position: fixed;
      bottom: 0;
    ">
    <v-col cols="5">
      <v-row>
        <v-col style="text-align: left"
          ><v-btn
            variant="tonal"
            color="red-accent-4"
            @click="handleDelete(tour_data.name)"
            >ลบทัวร์</v-btn
          ></v-col
        ></v-row
      ></v-col
    >
    <v-col style="display: flex; align-items: center">
      <v-row justify="end">
        <v-btn
          v-if="haveQuotation"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/paper/quotation-paper?tid=${tour_id}`)"
          >ดูใบเสนอราคา</v-btn
        >
        <v-btn
          v-else
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="dialog3 = true"
          >สร้างใบเสนอราคา</v-btn
        >

        <v-btn
          v-if="haveQuotation && !haveBilling"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="dialog = true"
          >สร้างใบแจ้งหนี้</v-btn
        >

        <v-btn
          v-else-if="haveQuotation && haveBilling"
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="$router.push(`/paper/billing-paper?tid=${tour_id}`)"
          >ดูใบแจ้งหนี้</v-btn
        >

        <v-btn
          variant="tonal"
          style="margin-right: 1rem"
          color="light-blue-accent-4"
          v-if="haveBilling && haveQuotation && !haveTax"
          @click="dialog2 = true"
          >สร้างใบกำกับภาษี</v-btn
        ><v-btn
          variant="tonal"
          style="margin-right: 1rem"
          color="light-blue-accent-4"
          v-else-if="haveBilling && haveQuotation && haveTax"
          @click="$router.push(`/paper/tax-paper?tid=${this.tour_id}`)"
          >ดูใบกำกับภาษี</v-btn
        ><v-btn
          style="margin-right: 1rem"
          variant="tonal"
          @click="$router.push(`/addusertour/${tour_id}`)"
          color="yellow-darken-4"
          >แก้ไขข้อมูลลูกทัวร์</v-btn
        >
        <v-btn
          style="margin-right: 1rem"
          @click="$router.push(`/edittour/${tour_id}`)"
          variant="tonal"
          color="cyan-darken-4"
          >แก้ไขข้อมูลทัวร์</v-btn
        ></v-row
      ></v-col
    >
  </v-row>

  <a-modal
    v-model:visible="dialog3"
    title="กรุณากรอกราคาของทัวน์ ก่อนสร้างใบเสนอราคา">
    <template #footer>
      <a-button key="back" @click="dialog3 = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="tour_program.loading"
        @click="onCreateQuotation"
        >สร้าง</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ราคาต่อหน่วย</label
        >
        <input
          type="text"
          id="base-input"
          v-model.number="tour_program.price_per_unit"
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
          v-model="tour_program.tax"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="0%">0%</option>
          <option value="7%">7%</option>
          <option value="9%">9%</option>
        </select>
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ส่วนลด</label
        >
        <input
          type="text"
          id="base-input"
          v-model.number="tour_program.discount"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>

  <a-modal v-model:visible="dialog" title="ฟอร์มสร้างใบแจ้งหนี้/ใบวางบิล">
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="generateBilling"
        >สร้าง</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลขที่</label
        >
        <input
          type="text"
          id="base-input"
          v-model="billing.billing_note_no"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >วันที่</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="billing.billing_note_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >หมายเลขแฟกซ์</label
        >
        <input
          type="text"
          id="base-input"
          v-model="billing.billing_note_fax"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>

  <a-modal
    v-model:visible="dialog2"
    width="65rem"
    title="ฟอร์มสร้างใบกำกับภาษี/ใบส่งของ">
    <template #footer>
      <a-button key="back" @click="dialog2 = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="generateTaxInvoice"
        >สร้าง</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >เลขที่</label
        >
        <input
          type="text"
          id="base-input"
          v-model="tax.tax_no"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >วันที่</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="tax.tax_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >กำหนดการชำระ</label
        >
        <a-date-picker
          :locale="locale"
          style="z-index: 999"
          v-model:value="tax.tax_pay_date"
          class="date-picker"
          format="DD/MM/YYYY" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >สาขา (ถ้าไม่กรอกจะเป็นสำนักงานใหญ่)</label
        >
        <input
          type="text"
          id="base-input"
          v-model="tax.tax_branch"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  read_all_data,
  read_one_data,
  delete_data,
  create_data,
  genRanDec,
} from "~~/services/pyapi";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
export default {
  setup() {
    return {
      locale,
    };
  },
  async mounted() {
    this.tour_id = this.$route.params.tourdataid;
    this.tour_data = await read_one_data("tour", this.tour_id);
    this.hotels_ls = await read_all_data("hotels?tour_id=" + this.tour_id);
    this.members_ls = await read_all_data("members?tour_id=" + this.tour_id);
    const quo_res = await read_all_data(`quotations?tour_id=${this.tour_id}`);
    const bill_res = await read_all_data(`billings?tour_id=${this.tour_id}`);
    const tax_res = await read_all_data(`taxes?tour_id=${this.tour_id}`);
    quo_res.length ? (this.haveQuotation = true) : (this.haveQuotation = false);
    bill_res.length ? (this.haveBilling = true) : (this.haveBilling = false);
    tax_res.length ? (this.haveTax = true) : (this.haveTax = false);
    this.loading = false;

    this.billing.billing_note_no = genRanDec(7);
    this.billing.billing_note_date = dayjs(new Date());

    this.tax.tax_no = genRanDec(7);
    this.tax.tax_date = dayjs(new Date());
  },
  methods: {
    validateQuotation() {
      if (this.tour_program.price_per_unit == 0) {
        this.$message.error("กรุณากรอกราคาต่อหน่วย");
        return false;
      }
      if (this.tour_program.discount < 0) {
        this.$message.error("กรุณากรอกส่วนลด");
        return false;
      }
      if (this.tour_program.tax == "") {
        this.$message.error("กรุณากรอกภาษี");
        return false;
      }
      return true;
    },
    onCreateQuotation() {
      if (!this.validateQuotation()) return;
      let total = this.tour_program.price_per_unit;
      var amount = 0;
      if (this.tour_program.tax == "7%") {
        amount = total + total * 0.07 - this.tour_program.discount;
      } else if (this.tour_program.tax == "9%") {
        amount = total + total * 0.09 - this.tour_program.discount;
      } else {
        amount = total - this.tour_program.discount;
      }
      this.tour_program.loading = true;
      const payload = {
        tour_id: this.tour_id,
        code: `Q-${genRanDec(10)}`,
        name: this.tour_data.name,
        desc: this.tour_data.program_name,
        qty: 1,
        unit: "ทัวร์",
        price_per_unit: this.tour_program.price_per_unit,
        discount: this.tour_program.discount,
        tax: this.tour_program.tax,
        amount: amount,
      };
      create_data("product", payload).then(() => {
        this.tour_program.loading = false;
        this.$message.info("ไปสู่หน้าสร้างรายละเอียดใบเสนอราคา");
        this.$router.push(`/qpform/${this.tour_id}`);
      });
    },
    handleDelete(name) {
      Swal.fire({
        title: "คุณกำลังจะลบทัวร์",
        html: `ทัวร์ <span style="color: red">${name}</span> <br/>ข้อมูลที่เกี่ยวข้องจะถูกลบอย่างถาวร`,
        icon: "question",
        confirmButtonText: "ยืนยัน",
        showCancelButton: true,
        cancelButtonText: "ยกเลิก",
        focusConfirm: false,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return delete_data("tour", this.tour_id)
            .then(() => {
              delete_data(`hotel?tid=${this.tour_id}`).then(() => {
                delete_data(`member?tid=${this.tour_id}`).then(() => {
                  this.$router.push("/");
                });
              });
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
      });
    },
    validateBilling() {
      if (
        this.billing.billing_note_no == "" ||
        this.billing.billing_note_date == "" ||
        this.billing.billing_note_fax == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    generateBilling() {
      if (this.validateBilling()) {
        this.loadGenBill = true;
        const payload = {
          tour_id: this.tour_id,
          no: this.billing.billing_note_no,
          date: dayjs(this.billing.billing_note_date).format("DD/MM/BBBB"),
          fax: this.billing.billing_note_fax,
        };
        create_data("billing", payload).then(() => {
          this.dialog = false;
          this.$router.push(`/paper/billing-paper?tid=${this.tour_id}`);
        });
      }
    },
    validateTax() {
      if (
        this.tax.tax_no == "" ||
        this.tax.tax_date == "" ||
        this.tax.tax_pay_date == ""
      ) {
        this.$message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
      } else {
        return true;
      }
    },
    generateTaxInvoice() {
      if (this.validateTax()) {
        this.loadGenBill = true;
        const payload = {
          tour_id: this.tour_id,
          no: this.tax.tax_no,
          date: dayjs(this.tax.tax_date).format("DD/MM/BBBB"),
          pay_date: dayjs(this.tax.tax_pay_date).format("DD/MM/BBBB"),
          branch: this.tax.tax_branch,
        };
        create_data("tax", payload).then(() => {
          this.dialog2 = false;
          this.$router.push(`/paper/tax-paper?tid=${this.tour_id}`);
        });
      }
    },
  },
  data() {
    return {
      tour_id: "",
      tour_data: "",
      loading: true,
      haveQuotation: false,
      haveBilling: false,
      haveTax: false,
      dialog: false,
      dialog2: false,
      dialog3: false,
      loadGenBill: false,
      members_ls: [],
      hotels_ls: [],
      tour_program: {
        loading: false,
        price_per_unit: 0,
        discount: 0,
        tax: "",
      },
      billing: {
        billing_note_no: "",
        billing_note_date: "",
        billing_note_fax: "",
      },
      tax: {
        tax_no: "",
        tax_date: "",
        tax_pay_date: "",
        tax_branch: "",
      },
    };
  },
};
</script>

<style scoped>
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
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
