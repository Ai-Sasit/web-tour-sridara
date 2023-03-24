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
    <div v-else>
      <v-tooltip location="left">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            @click="$router.push(`/edittour/${tour_data.id}`)"
            style="position: absolute; right: 0.2rem; top: 4.5rem; z-index: 999"
            color="blue-accent-3"
            v-bind="props">
            <v-icon> mdi-text-box-edit </v-icon>
          </v-btn>
        </template>
        <span>แก้ไขข้อมูลทัวร์ หรือ เพิ่มโรงแรม</span>
      </v-tooltip>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          v-if="tour_data"
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style="background-color: #e8f5e9">
          <tr>
            <td colspan="5" class="pb-1 pt-2 px-3">
              <h3>ชื่อทริปทัวร์ : {{ tour_data.name }}</h3>
            </td>
            <td colspan="2" class="pb-1 pt-2 px-3">
              ชื่อไกด์ :
              {{ tour_data.guided_tour.map((v) => v.name).join(", ") }}
            </td>
            <td colspan="4" class="pb-1 pt-2 px-3">
              เบอร์โทร :
              {{ tour_data.guided_tour.map((v) => v.tel).join(", ") }}
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
          style="margin-right: 1rem"
          @click="list_cash = true"
          variant="tonal"
          color="light-blue-accent-4"
          >จัดการใบเบิกค่าใช้จ่าย</v-btn
        >
        <v-btn
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          >จัดการใบเคียร์ประมาณการเงินสดย่อย</v-btn
        >
        <v-btn
          style="margin-right: 1rem"
          variant="tonal"
          color="light-blue-accent-4"
          @click="list_quo = true"
          >จัดการใบเสนอราคา</v-btn
        >
        <v-btn
          style="margin-right: 1rem"
          variant="tonal"
          @click="$router.push(`/addusertour/${tour_id}`)"
          color="yellow-darken-4"
          >จัดการข้อมูลลูกทัวร์</v-btn
        >
      </v-row></v-col
    >
  </v-row>

  <a-modal v-model:visible="list_quo" width="65rem" title="รายการใบเสนอราคา">
    <template #footer>
      <a-button type="primary" @click="onCreateQuotation"
        >สร้างใบเสนอราคา</a-button
      >
      <a-button type="danger" @click="list_quo = false">ปิด</a-button>
    </template>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs uppercase bg-green-800 dark:bg-gray-700"
          style="color: white">
          <tr>
            <th scope="col" class="px-6 py-3">ชื่อลูกค้า</th>
            <th scope="col" class="px-6 py-3">จำนวนคน</th>
            <th scope="col" class="px-6 py-3">วันที่สร้างล่าสุด</th>
            <th scope="col" class="px-6 py-3">ราคาเสนอ</th>
            <th scope="col" class="px-6 py-3 text-right">ฟังก์ชั่น</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, index) in quo_ls"
            :key="index">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.customer_name }}
            </th>
            <td class="px-6 py-4">{{ item.sales_person }}</td>
            <td class="px-6 py-4">{{ item.date }}</td>
            <td class="px-6 py-4">
              {{ formatter.format(item.total_net_price) }}
            </td>
            <td class="px-6 py-4 text-right">
              <a
                :href="`/paper/quotation-paper?tid=${tour_id}&cid=${item.no}`"
                class="font-medium text-yellow-400 dark:text-yellow-400 hover:underline mr-5"
                >ดูใบเสนอราคา</a
              >
              <a-dropdown>
                <a class="ant-dropdown-link text-blue-600 mr-5" @click.prevent>
                  ใบอื่นๆ
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item v-if="!item.haveBilling">
                      <a @click.stop.prevent="onOpenBillDialog(item)"
                        >สร้างใบแจ้งหนี้</a
                      >
                    </a-menu-item>
                    <a-menu-item v-else>
                      <a :href="`/paper/billing-paper?qid=${item.id}`"
                        >ดูใบแจ้งหนี้</a
                      >
                    </a-menu-item>
                    <a-menu-item v-if="!item.haveTax">
                      <a @click.stop.prevent="onOpenTaxDialog(item)"
                        >สร้างใบกำกับภาษี</a
                      >
                    </a-menu-item>
                    <a-menu-item v-else>
                      <a
                        :href="`/paper/tax-paper?qid=${item.id}&cid=${item.customer_code}`"
                        >ดูใบกำกับภาษี</a
                      >
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
              <a-popconfirm
                title="คุณแน่ใจ?"
                ok-text="ยืนยัน"
                cancel-text="ยกเลิก"
                @confirm="onDeleteQuotation(item.id)"
                @cancel="cancel">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >ลบ</a
                ></a-popconfirm
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </a-modal>

  <a-modal
    v-model:visible="list_cash"
    width="65rem"
    title="รายการใบเบิกค่าใช้จ่าย">
    <template #footer>
      <a-button
        type="primary"
        @click="$router.push(`/withdraw/add_estimate?tour_id=${tour_id}`)"
        >สร้างใบเบิกค่าใช้จ่าย</a-button
      >
      <a-button type="danger" @click="list_cash = false">ปิด</a-button>
    </template>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs uppercase bg-green-800 dark:bg-gray-700"
          style="color: white">
          <tr>
            <th scope="col" class="px-6 py-3">ชื่อผู้เบิก</th>
            <th scope="col" class="px-6 py-3">วันที่เบิก</th>
            <th scope="col" class="px-6 py-3">วัตถุประสงค์</th>
            <th scope="col" class="px-6 py-3">ยอดสุทธิ</th>
            <th scope="col" class="px-6 py-3 text-right">ฟังก์ชั่น</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, index) in estimate_ls"
            :key="index">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.withdrawer_name }}
            </th>
            <td class="px-6 py-4">{{ item.date }}</td>
            <td class="px-6 py-4">{{ item.objective }}</td>
            <td class="px-6 py-4">
              {{ formatter.format(item.total_price) }}
            </td>
            <td class="px-6 py-4 text-right">
              <a
                :href="`/paper/disbursement-paper?tid=${tour_id}&cid=${item.no}`"
                class="font-medium text-yellow-400 dark:text-yellow-400 hover:underline mr-5"
                >ดูใบประมาณการเบิกเงินสดย่อย</a
              >
              <a-popconfirm
                title="คุณแน่ใจ?"
                ok-text="ยืนยัน"
                cancel-text="ยกเลิก"
                @confirm="onDeleteQuotation(item.id)"
                @cancel="cancel">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >ลบ</a
                ></a-popconfirm
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
import { DownOutlined } from "@ant-design/icons-vue";
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
import axios from "axios";
dayjs.extend(buddhistEra);
export default {
  setup() {
    const formatter = new Intl.NumberFormat("th-TH", {
      minimumFractionDigits: 2,
    });
    return {
      formatter,
      locale,
      DownOutlined,
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
    this.estimate_ls = await read_all_data(`estimates?tour_id=${this.tour_id}`);
    this.quo_ls = quo_res;
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
    onOpenBillDialog(item) {
      this.quo_id = item.id;
      this.customer_id = item.customer_code;
      this.dialog = true;
    },
    onOpenTaxDialog(item) {
      this.quo_id = item.id;
      this.customer_id = item.customer_code;
      this.dialog2 = true;
    },
    onDeleteQuotation(id) {
      delete_data("quotation", id).then((res) => {
        this.quo_ls = this.quo_ls.filter((item) => item.id != id);
        this.$message.success("ลบข้อมูลเรียบร้อยแล้ว");
      });
    },
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
      let total = this.tour_data.price;
      var amount = 0;
      if (this.tour_data.tax == "7%") {
        amount = total + total * 0.07;
      } else if (this.tour_data.tax == "9%") {
        amount = total + total * 0.09;
      }
      this.tour_program.loading = true;
      const qid = genRanDec(13);
      const payload = {
        tour_id: this.tour_id,
        quo_id: qid,
        code: `Q-${genRanDec(10)}`,
        name: this.tour_data.name,
        desc: this.tour_data.program_name,
        qty: 1,
        unit: "ทัวร์",
        price_per_unit: this.tour_data.price,
        discount: 0,
        tax: this.tour_data.tax,
        amount: amount,
      };
      create_data("product", payload).then(() => {
        this.tour_program.loading = false;
        this.$message.info("ไปสู่หน้าสร้างรายละเอียดใบเสนอราคา");
        this.$router.push(`/qpform/${this.tour_id}?cid=${qid}`);
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
          quo_id: this.quo_id,
          no: this.billing.billing_note_no,
          date: dayjs(this.billing.billing_note_date).format("DD/MM/BBBB"),
          fax: this.billing.billing_note_fax,
        };
        create_data("billing", payload).then(() => {
          axios
            .patch(
              `https://back-end-tour.vercel.app/api/quotation-have-bill/${this.quo_id}`
            )
            .then(() => {
              this.loadGenBill = false;
              this.dialog = false;
              this.$message.success("สร้างใบเสนอราคาเรียบร้อย");
              this.$router.push(`/paper/billing-paper?qid=${this.quo_id}`);
            });
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
          quo_id: this.quo_id,
          no: this.tax.tax_no,
          date: dayjs(this.tax.tax_date).format("DD/MM/BBBB"),
          pay_date: dayjs(this.tax.tax_pay_date).format("DD/MM/BBBB"),
          branch: this.tax.tax_branch,
        };
        create_data("tax", payload).then(() => {
          axios
            .patch(
              `https://back-end-tour.vercel.app/api/quotation-have-tax/${this.quo_id}`
            )
            .then(() => {
              this.loadGenBill = false;
              this.dialog2 = false;
              this.$message.success("สร้างใบเสนอราคาเรียบร้อย");
              this.$router.push(`/paper/tax-paper?qid=${this.quo_id}`);
            });
        });
      }
    },
  },
  data() {
    return {
      tour_id: "",
      quo_id: "",
      tour_data: "",
      customer_id: "",
      loading: true,
      haveQuotation: false,
      haveBilling: false,
      haveTax: false,
      dialog: false,
      dialog2: false,
      list_quo: false,
      list_cash: false,
      loadGenBill: false,
      members_ls: [],
      hotels_ls: [],
      quo_ls: [],
      estimate_ls: [],
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
