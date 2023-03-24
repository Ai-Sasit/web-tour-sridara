<template>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบเสนอราคา/ยืนยันการสั่งซื้อ
        </h1>
        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อลูกค้า</label
            >
            <input
              type="text"
              id="base-input"
              v-model="customer_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เลขประจำตัวผู้เสียภาษี</label
            >
            <input
              type="text"
              id="base-input"
              v-model="tax_id"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ชื่อผู้ติดต่อ</label
            >
            <input
              type="text"
              id="base-input"
              v-model="contact_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ที่อยู่</label
            >
            <input
              type="text"
              id="small-input"
              v-model="customer_address"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รหัสลูกค้า</label
            >
            <input
              type="text"
              id="small-input"
              v-model="customer_code"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ยืนยันราคาภายใน</label
            >
            <a-date-picker
              :locale="locale"
              v-model:value="confirm_price_within"
              class="date-picker"
              format="DD/MM/YYYY" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >วันที่ส่งของ</label
            >
            <a-date-picker
              :locale="locale"
              v-model:value="delivery_date"
              class="date-picker"
              format="DD/MM/YYYY" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ผู้เสนอขาย</label
            >
            <input
              type="text"
              id="small-input"
              v-model="sales_person"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ฝ่าย</label
            >
            <input
              type="text"
              id="base-input"
              v-model="sale_department"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >เบอร์โทรศัพท์</label
            >
            <input
              type="text"
              id="small-input"
              v-model="contact_tel"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >อีเมล</label
            >
            <input
              type="text"
              id="small-input"
              v-model="contact_email"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div style="border-radius: 1rem; margin: 1rem">
    <v-row style="margin: 1rem">
      <v-col class="shadow-card">
        <h1
          class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          ใบเสนอราคา/ยืนยันการสั่งซื้อ
        </h1>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รหัสสินค้า</label
            >
            <input
              type="text"
              id="small-input"
              v-model="product_code"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >จำนวน</label
            >
            <input
              type="number"
              id="small-input"
              v-model.number="product_qty"
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
              id="base-input"
              v-model.number="product_price_per_unit"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ส่วนลด</label
            >
            <input
              type="number"
              id="base-input"
              v-model.number="product_discount"
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
              v-model="product_tax"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="0%">0%</option>
              <option value="7%">7%</option>
              <option value="9%">9%</option>
            </select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >รายการสินค้า</label
            >
            <textarea
              type="text"
              style="height: 33.6px"
              id="base-input"
              v-model="product_name"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col cols="2">
            <br />
            <v-btn
              block
              variant="tonal"
              @click="onAddProduct"
              style="margin-top: 5px"
              color="blue-accent-4"
              >เพิ่มข้อมูล</v-btn
            >
          </v-col>
        </v-row>

        <br /><br />
        <div class="relative overflow-x-auto shadow">
          <section class="bg-gray-50 dark:bg-gray-900">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
                style="background-color: #81c784">
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
                  <th scope="col" class="px-6 py-3">รายการสินค้า</th>
                  <th scope="col" class="px-6 py-3">จำนวน</th>
                  <th scope="col" class="px-6 py-3">ราคาต่อหน่วย</th>
                  <th scope="col" class="px-6 py-3">ส่วนลด</th>
                  <th scope="col" class="px-6 py-3">ภาษี</th>
                  <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
                  <th scope="col" class="px-6 py-3 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!product_ls.length">
                  <td class="px-6 py-4" colspan="9" style="text-align: center">
                    ไม่มีรายการ
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(item, index) in product_ls"
                  :key="index">
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td class="px-6 py-4">
                    {{ item.code }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.qty }}
                  </td>
                  <td class="px-6 py-4">
                    {{ formatter.format(item.price_per_unit) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.discount }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.tax }}
                  </td>
                  <td class="px-6 py-4">{{ formatter.format(item.amount) }}</td>
                  <td class="px-6 py-4">
                    <v-btn
                      v-if="item.unit == 'ทัวร์'"
                      block
                      variant="tonal"
                      @click="productEdit(item)"
                      style="margin-top: 5px"
                      color="cyan-darken-3"
                      >แกไข</v-btn
                    >
                    <v-btn
                      v-else
                      block
                      variant="tonal"
                      @click="onDeleteProduct(item.id, index)"
                      style="margin-top: 5px"
                      color="red-accent-4"
                      >ลบ</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <br />
        <v-row
          style="
            margin: 0.1rem;
            border-radius: 0.5rem;
            background-color: #e0f7fa;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          "
          ><v-col style="background-color: #f0f4c3">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >กำหนดยืนราคา (กี่วัน)</label
            >
            <input
              type="number"
              id="small-input"
              v-model="price_validate_period"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
          <v-col style="background-color: #f0f4c3"
            ><label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ค่ามัดจำ</label
            ><input
              type="number"
              id="small-input"
              v-model.number="deposit"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /></v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-right text-gray-900 dark:text-white"
              >รวมเงิน</label
            ><input
              type="text"
              id="small-input"
              disabled
              :value="formatter.format(sumAllProduct())"
              class="block w-full p-2 text-gray-900 text-right border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /></v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm text-right font-medium text-gray-900 dark:text-white"
              >ส่วนลดสินค้า</label
            ><input
              type="text"
              id="small-input"
              :value="formatter.format(sumAllProductDiscount())"
              disabled
              class="block w-full p-2 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /></v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm text-right font-medium text-gray-900 dark:text-white"
              >มูลค่าสินค้าก่อนคำนวนภาษี</label
            ><input
              type="text"
              disabled
              :value="formatter.format(beforeCalculateVat())"
              id="small-input"
              class="block w-full p-2 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /></v-col>
          <v-col>
            <label
              for="base-input"
              class="block mb-2 text-sm text-right font-medium text-gray-900 dark:text-white"
              >ภาษีมูลค่าเพิ่ม</label
            ><input
              type="text"
              id="small-input"
              disabled
              :value="formatter.format(calculateVat())"
              class="block w-full p-2 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /></v-col>
          <v-col
            style="
              background-color: #c5cae9;

              border-top-right-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
            "
            ><label
              for="base-input"
              class="block mb-2 text-sm text-right font-medium text-gray-900 dark:text-white"
              >จำนวนเงินทั้งสิ้น</label
            ><input
              type="text"
              disabled
              :value="formatter.format(Math.floor(sumAllProduct() * 100) / 100)"
              id="small-input"
              class="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </v-col>
        </v-row>
        <v-row justify="end" style="margin-top: -1rem">
          <v-col cols="2" style="text-align: end"
            ><br /><v-btn
              variant="tonal"
              color="yellow-darken-3"
              @click="onAddQuotation"
              >สร้างใบเสนอราคา</v-btn
            ></v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </div>

  <a-modal
    v-model:visible="prodEditDialog"
    width="50rem"
    title="ฟอร์มแก้ไขข้อมูลสินค้า">
    <template #footer>
      <a-button key="back" @click="prodEditDialog = false">ยกเลิก</a-button>
      <a-button key="submit" type="primary" @click="prodEditConfirm"
        >แก้ไข</a-button
      >
    </template>
    <v-row>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ข้อมูลสินค้า</label
        >
        <textarea
          style="height: 33.6px"
          type="text"
          v-model="prod_edit_form.name"
          id="base-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >จำนวน</label
        >
        <input
          type="number"
          v-model.number="prod_edit_form.qty"
          id="base-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ส่วนลด</label
        >
        <input
          type="number"
          v-model.number="prod_edit_form.discount"
          id="base-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </v-col>
    </v-row>
  </a-modal>
</template>

<script lang="ts">
import {
  read_all_data,
  create_data,
  delete_data,
  update_data,
} from "~~/services/pyapi";
import { genRanDec } from "~~/services/pyapi";
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { notification } from "ant-design-vue";
dayjs.extend(buddhistEra);
export default defineComponent({
  data() {
    return {
      tour_id: "",
      customer_name: "",
      tax_id: "",
      contact_name: "",
      quo_no: "",
      customer_address: "",
      customer_code: "",
      confirm_price_within: "",
      sales_person: "",
      sale_department: "",
      contact_tel: "",
      contact_email: "",
      delivery_date: "",
      product_code: "",
      product_name: "",
      product_qty: 0,
      product_price_per_unit: 0,
      product_discount: 0,
      product_tax: "",
      product_amount: 0,
      product_ls: [] as any,
      price_validate_period: "",
      deposit: "",
      tour_member: 0,
      prodEditDialog: false,
      prod_edit_form: {} as any,
    };
  },
  async mounted() {
    this.tour_id = String(this.$route.params.tid);
    this.quo_no = String(this.$route.query.cid);

    this.product_ls = await read_all_data(`products?qid=${this.quo_no}`);
    this.product_code = `Q-${genRanDec(10)}`;
    this.customer_code = `C-${genRanDec(8)}`;
  },
  setup() {
    const formatter = new Intl.NumberFormat("th-TH", {
      minimumFractionDigits: 2,
    });
    return {
      formatter,
      locale,
    };
  },
  methods: {
    productEdit(item: any) {
      this.prod_edit_form = item;
      this.prodEditDialog = true;
    },
    prodEditConfirm() {
      let x = this.prod_edit_form.qty * this.prod_edit_form.price_per_unit;
      if (this.prod_edit_form.tax === "7%") {
        this.prod_edit_form.amount =
          x + x * 0.07 - this.prod_edit_form.discount;
      } else if (this.prod_edit_form.tax === "9%") {
        this.prod_edit_form.amount =
          x + x * 0.09 - this.prod_edit_form.discount;
      } else {
        this.prod_edit_form.amount = x - this.prod_edit_form.discount;
      }
      const id = this.prod_edit_form.id;
      delete this.prod_edit_form.id;
      update_data("product", id, this.prod_edit_form).then((result) => {
        this.prod_edit_form.id = result.id;
        notification.success({
          message: "แก้ไขสินค้าสำเร็จ",
          description: `แก้ไขสินค้า ${this.prod_edit_form.code} สำเร็จ`,
          duration: 2,
        });
      });
      this.prodEditDialog = false;
    },
    sumAllProduct() {
      let sum = 0;
      for (let i = 0; i < this.product_ls.length; i++) {
        sum += this.product_ls[i].amount;
      }
      return sum;
    },
    sumAllProductDiscount() {
      let sum = 0;
      for (let i = 0; i < this.product_ls.length; i++) {
        sum += this.product_ls[i].discount;
      }
      return sum;
    },
    beforeCalculateVat() {
      let sum = 0;
      for (let i = 0; i < this.product_ls.length; i++) {
        if (this.product_ls[i].tax === "7%") {
          sum += this.product_ls[i].amount * (100 / 107);
        } else if (this.product_ls[i].tax === "0%") {
          sum += 0;
        } else if (this.product_ls[i].tax === "9%") {
          sum += this.product_ls[i].amount * (100 / 109);
        }
      }
      return Math.floor(sum * 100) / 100;
    },
    calculateVat() {
      let sum = 0;
      for (let i = 0; i < this.product_ls.length; i++) {
        if (this.product_ls[i].tax === "7%") {
          sum += this.product_ls[i].amount;
        } else if (this.product_ls[i].tax === "9%") {
          sum += this.product_ls[i].amount;
        }
      }
      const x = sum - this.beforeCalculateVat();

      return Math.floor(x * 100) / 100;
    },
    onAddProduct() {
      if (this.validateProductDetail()) {
        let x = this.product_qty * this.product_price_per_unit;
        if (this.product_tax === "7%") {
          this.product_amount = x + x * 0.07 - this.product_discount;
        } else if (this.product_tax === "9%") {
          this.product_amount = x + x * 0.09 - this.product_discount;
        } else {
          this.product_amount = x - this.product_discount;
        }
        const payload: any = {
          tour_id: this.tour_id,
          customer_id: this.customer_code,
          code: this.product_code,
          name: this.product_name,
          desc: "-",
          unit: "จำนวน",
          qty: this.product_qty,
          price_per_unit: this.product_price_per_unit,
          discount: this.product_discount,
          tax: this.product_tax,
          amount: this.product_amount,
        };
        create_data("product", payload).then((result) => {
          payload.id = result.id;
          this.product_ls.push(payload);
        });
        this.product_code = `Q-${genRanDec(10)}`;
        this.product_name = "";
        this.product_qty = 0;
        this.product_price_per_unit = 0;
        this.product_discount = 0;
        this.product_tax = "";
        this.product_amount = 0;
      }
    },
    onDeleteProduct(id: string, index: number) {
      delete_data("product", id).then(() => {
        this.product_ls.splice(index, 1);
      });
    },
    onAddQuotation() {
      const payload = {
        tour_id: this.tour_id,
        date: dayjs(new Date()).format("DD/MM/BBBB"),
        no: this.quo_no,
        customer_name: this.customer_name,
        tax_id: this.tax_id,
        contact_name: this.contact_name,
        address: this.customer_address,
        customer_code: this.customer_code,
        confirm_price_within: dayjs(this.confirm_price_within).format(
          "DD/MM/BBBB"
        ),
        delivery_date: dayjs(this.delivery_date).format("DD/MM/BBBB"),
        sales_person: this.sales_person,
        sale_department: this.sale_department,
        customer_tel: this.contact_tel,
        email: this.contact_email,
        earnest_money: this.deposit,
        price_validate_period: this.price_validate_period,
        total_price: this.sumAllProduct(),
        less_cash_discount: this.sumAllProductDiscount(),
        net_price: this.beforeCalculateVat(),
        vat: this.calculateVat(),
        total_net_price: this.sumAllProduct() - this.sumAllProductDiscount(),
      };
      if (this.validateQuotationDetail()) {
        create_data("quotation", payload).then((result) => {
          this.$message.success("เพิ่มใบเสนอราคาสำเร็จ", 3);
          this.$router.push(
            `/paper/quotation-paper?tid=${this.tour_id}&cid=${this.quo_no}`
          );
        });
      }
    },
    validateProductDetail() {
      if (this.product_code == "") {
        this.$message.error("กรุณากรอกรหัสสินค้า", 3);
        return false;
      }
      if (this.product_name == "") {
        this.$message.error("กรุณากรอกชื่อสินค้า", 3);
        return false;
      }
      if (this.product_qty <= 0) {
        this.$message.error("กรุณากรอกจำนวนสินค้า", 3);
        return false;
      }
      if (this.product_price_per_unit == 0) {
        this.$message.error("กรุณากรอกราคาต่อหน่วย", 3);
        return false;
      }
      if (this.product_discount < 0) {
        this.$message.error("กรุณากรอกส่วนลดสินค้า", 3);
        return false;
      } else if (String(this.product_discount) == "") {
        this.product_discount = 0;
        return true;
      }
      if (this.product_tax == "") {
        this.$message.error("กรุณากรอกภาษีมูลค่าเพิ่ม", 3);
        return false;
      }
      return true;
    },
    validateQuotationDetail() {
      if (this.customer_name == "") {
        this.$message.error("กรุณากรอกชื่อลูกค้า", 3);
        return false;
      }
      if (this.tax_id == "") {
        this.$message.error("กรุณากรอกเลขประจำตัวผู้เสียภาษี", 3);
        return false;
      }
      if (this.contact_name == "") {
        this.$message.error("กรุณากรอกชื่อผู้ติดต่อ", 3);
        return false;
      }
      if (this.customer_address == "") {
        this.$message.error("กรุณากรอกที่อยู่ลูกค้า", 3);
        return false;
      }
      if (this.customer_code == "") {
        this.$message.error("กรุณากรอกรหัสลูกค้า", 3);
        return false;
      }
      if (this.confirm_price_within == "") {
        this.$message.error("กรุณาเลือกกำหนดวันยืนยันราคา", 3);
        return false;
      }
      if (this.delivery_date == "") {
        this.$message.error("กรุณาเลือกวันที่ส่งสินค้า", 3);
        return false;
      }
      if (this.sales_person == "") {
        this.$message.error("กรุณากรอกชื่อพนักงานขาย", 3);
        return false;
      }
      if (this.sale_department == "") {
        this.$message.error("กรุณากรอกแผนกขาย", 3);
        return false;
      }
      if (this.contact_tel == "") {
        this.$message.error("กรุณากรอกเบอร์โทรติดต่อ", 3);
        return false;
      }
      if (this.contact_email == "") {
        this.$message.error("กรุณากรอกอีเมลล์ติดต่อ", 3);
        return false;
      }
      if (this.delivery_date == "") {
        this.$message.error("กรุณากรอกวันที่ส่งสินค้า", 3);
        return false;
      }
      if (this.price_validate_period == "") {
        this.$message.error("กรุณากรอกระยะเวลาในการยืนยันราคา", 3);
        return false;
      }
      if (Number(this.deposit) < 0) {
        this.$message.error("กรุณากรอกมูลค่ามัดจำ", 3);
        return false;
      }
      if (this.product_ls.length == 0) {
        this.$message.error("กรุณาเพิ่มรายการสินค้า", 3);
        return false;
      }
      return true;
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

.shadow {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
