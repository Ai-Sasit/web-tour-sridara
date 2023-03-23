<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page" v-if="onLoad">
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col>
                <img
                  src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
                  class="w-141px h-47px"
                  alt="sridara Logo"
                />
                <v-sheet style="text-align: left; font-size: 12px">
                  <div>บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)</div>
                  <div>
                    123 ถนนชยางกูร หมู่ 19 ตำบลบุ่ง อำเภอเมืองอำนาจเจริญ
                    จังหวัดอำนาจเจริญ 37000
                  </div>
                  <div>เลขประจำตัวผู้เสียภาษี: 0375552000037</div>
                  โทร.082-3656514
                  <div><a>www.facebook.com/sridaratourfanpage</a></div>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row style="font-size: 12px; padding-left: 4px; margin: auto">
              <v-col style="padding: 0" cols="10">
                <v-table>
                  <tr style="height: 10px">
                    <td colspan="2" style="font-weight: bold">&nbsp;</td>
                  </tr>
                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>ชื่อลูกค้า: </b>
                    </td>
                    <td colspan="2">{{ quo.customer_name }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>ชื่อผู้ติดต่อ: </b>
                    </td>
                    <td colspan="2">{{ quo.contact_name }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td colspan="2"><b>ที่อยู่: </b></td>
                    <td colspan="2">{{ quo.address }}</td>
                  </tr>

                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>ID TAX: </b>
                    </td>
                    <td colspan="2">{{ quo.tax_id }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>FAX: </b>
                    </td>
                    <td colspan="2">{{ bill.fax }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>โทร: </b>
                    </td>
                    <td colspan="2">{{ quo.customer_tel }}</td>
                  </tr>
                  <tr style="height: 10px">
                    <td colspan="2" style="font-weight: bold">&nbsp;</td>
                  </tr>
                </v-table>
              </v-col>
            </v-row>
          </v-col>

          <v-col>
            <v-table style="font-size: 12px">
              <tr style="text-align: center">
                <td colspan="2">
                  <div style="font-size: 14px"><b>ใบวางบิล/ใบแจ้งหนี้</b></div>
                  <div>Billing Note/Invoice</div>
                </td>
              </tr>
              <tr style="text-align: center">
                <td colspan="2" style="border-bottom: 1px solid lightgray">
                  ต้นฉบับ/Original (เอกสารออกเป็นชุด)
                </td>
              </tr>
              <tr>
                <td><b>วันที่:</b></td>
                <td style="text-align: right">
                  {{ bill.date }}
                </td>
              </tr>
              <tr>
                <td><b>เลขที่:</b></td>
                <td style="text-align: right">{{ bill.no }}</td>
              </tr>
              <tr style="border-top: 1px solid lightgray">
                <td><b>รหัสลูกค้า:</b></td>
                <td style="text-align: right">{{ quo.customer_code }}</td>
              </tr>
              <tr>
                <td><b>ผู้เสนอขาย:</b></td>
                <td style="text-align: right">{{ quo.sales_person }}</td>
              </tr>
              <tr style="border-bottom: 1px solid lightgray">
                <td><b>ฝ่าย:</b></td>
                <td style="text-align: right">{{ quo.sale_department }}</td>
              </tr>
              <tr style="border-top: 1px solid lightgray">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr style="border-bottom: 1px solid lightgray">
                <td><b>ยืนยันราคาวันที่:</b></td>
                <td style="text-align: right">
                  {{ quo.confirm_price_within }}
                </td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-row
          style="padding: 1px; margin: auto; border-bottom: 1px solid black"
        >
          <v-col style="padding: 1px; height: 400px">
            <v-table density="compact" height="auto">
              <thead style="font-weight: bold; font-size: 14px">
                <tr
                  style="
                    border-top: 1px solid black;
                    border-bottom: 1px solid black;
                  "
                >
                  <td class="text-center" style="font-size: xx-small">ลำดับ</td>
                  <td class="text-center" style="font-size: xx-small">
                    รหัสสินค้า
                  </td>
                  <td class="text-left" style="font-size: xx-small">
                    รายการสินค้า
                  </td>
                  <td class="text-center" style="font-size: xx-small">จำนวน</td>
                  <td class="text-center" style="font-size: xx-small">
                    ราคาต่อหน่วย
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    ส่วนลด
                  </td>
                  <td class="text-center" style="font-size: xx-small">ภาษี</td>
                  <td class="text-center" style="font-size: xx-small">
                    จำนวนเงิน
                  </td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr v-for="(item, index) in prod" :key="index">
                  <td class="text-center" style="font-size: xx-small">
                    {{ index + 1 }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.code }}
                  </td>
                  <td class="text-left" style="font-size: xx-small">
                    {{ item.name }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.qty }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.price_per_unit }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.discount }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.tax }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.amount }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row
          style="
            font-size: 12px;
            padding-left: 4px;
            padding-right: 4px;
            margin: auto;
            border-bottom: 1px solid black;
          "
        >
          <v-col style="padding: 0" cols="9"
            ><v-table>
              <tr>
                <td colspan="6">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="6"><b>หมายเหตุ:</b></td>
              </tr>
              <tr>
                <td colspan="6">
                  1.สินค้าตามรายการข้างต้นแม้จะได้รับมอบแก่ผู้ซื้อแล้วก็ยังคงเป็นสินทรัพย์ของผู้ขายจนกว่าผู้ซื้อจะชำระเงินเรียบร้อย
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  2.หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม
                  “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  3.การชำระเงินด้วยเช็คจะสมบูรณ์เมื่อ
                  บริษัทฯได้รับเงินตามเช็คเรียบร้อย
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <b>ตัวอักษร: </b>
                </td>
                <td colspan="4">
                  <b> {{ ArabicNumberToText(Number(quo.total_net_price)) }}</b>
                </td>
              </tr>
              <tr>
                <td colspan="6">&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
          <v-col style="padding: 0" cols="3"
            ><v-table style="padding-left: 20px; padding-right: 10px">
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>รวมเงิน</td>
                <td style="text-align: right">{{ quo.total_price }} บาท</td>
              </tr>
              <tr>
                <td>มัดจำ 100%</td>
                <td style="text-align: right">{{ quo.earnest_money }} บาท</td>
              </tr>
              <tr>
                <td>มูลค่าคิดภาษี</td>
                <td style="text-align: right">{{ quo.net_price }} บาท</td>
              </tr>
              <tr>
                <td>ภาษีมูลค่าเพิ่ม</td>
                <td style="text-align: right">{{ quo.vat }} บาท</td>
              </tr>
              <tr>
                <td><b>ยอดสุทธิ</b></td>
                <td style="text-align: right">{{ quo.total_net_price }} บาท</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="margin: auto; font-size: 12px">
          <v-col>
            <v-table style="text-align: center">
              <tr style="height: 110px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้รับสินค้า</td>
              </tr>
              <tr>
                <td>วันที่</td>
              </tr>
              <tr style="border-bottom: 1px solid black">
                <td>&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
          <v-col>
            <v-table style="text-align: center">
              <tr style="height: 110px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้ส่งสินค้า</td>
              </tr>
              <tr>
                <td>วันที่</td>
              </tr>
              <tr style="border-bottom: 1px solid black">
                <td>&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
          <v-col>
            <v-table style="text-align: center">
              <tr style="height: 110px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้ประสานงาน</td>
              </tr>
              <tr>
                <td>วันที่</td>
              </tr>
              <tr style="border-bottom: 1px solid black">
                <td>&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
          <v-col>
            <v-table style="text-align: center">
              <tr style="height: 110px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้อนุมัติ</td>
              </tr>
              <tr>
                <td>วันที่</td>
              </tr>
              <tr style="border-bottom: 1px solid black">
                <td>&nbsp;</td>
              </tr>
            </v-table>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <v-row
    v-if="onLoad"
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: right">
      <v-btn color="yellow-darken-4" @click="dialog = true"
        >แก้ไขเอกสารใบแจ้งหนี้</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal v-model:visible="dialog" title="ฟอร์มสร้างแก้ไขแจ้งหนี้/ใบวางบิล">
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="updateBilling"
        >แก้ไข</a-button
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
          format="DD/MM/YYYY"
        />
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </v-col>
    </v-row>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  read_all_data,
  ArabicNumberToText,
  update_data,
} from "~~/services/pyapi";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
const key = "updated";
export default defineComponent({
  setup() {
    return {
      ArabicNumberToText,
      locale,
    };
  },
  data() {
    return {
      tour_id: "",
      quo: {} as any,
      bill: {} as any,
      prod: [] as any,
      onLoad: false,
      dialog: false,
      billing: {
        billing_note_no: "",
        billing_note_date: "" as any,
        billing_note_date: "" as any,
        billing_note_fax: "",
      },
      loadGenBill: false,
    };
  },
  async mounted() {
    this.tour_id = String(this.$route.query.tid);
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบแจ้งหนี้ และสร้างเป็นเอกสาร",
      key,
    });
    let q = await read_all_data(`quotations?tour_id=${this.tour_id}`);
    this.quo = q[0];
    let b = await read_all_data(`billings?tour_id=${this.tour_id}`);
    this.bill = b[0];
    this.billing.billing_note_no = this.bill.no;
    this.billing.billing_note_date = dayjs();
    this.billing.billing_note_fax = this.bill.fax;
    this.prod = await read_all_data(`products?tid=${this.tour_id}`);
    this.onLoad = true;
    this.$message.success({
      content: "โหลดข้อมูลเรียบร้อยแล้ว",
      key,
      duration: 2,
    });
  },
  methods: {
    print() {
      window.print();
    },
    validateBillingForm() {
      if (this.billing.billing_note_no == "") {
        this.$message.error("กรุณากรอกเลขที่ใบแจ้งหนี้");
        return false;
      }
      if (this.billing.billing_note_date == "") {
        this.$message.error("กรุณากรอกวันที่ใบแจ้งหนี้");
        return false;
      }
      if (this.billing.billing_note_fax == "") {
        this.$message.error("กรุณากรอกหมายเลขแฟกซ์");
        return false;
      }
      return true;
    },
    updateBilling() {
      if (this.validateBillingForm()) {
        this.loadGenBill = true;
        const payload = {
          tour_id: this.tour_id,
          no: this.billing.billing_note_no,
          date: dayjs(this.billing.billing_note_date).format("DD/MM/BBBB"),
          fax: this.billing.billing_note_fax,
        };
        update_data("billing", this.bill.id, payload).then((res) => {
          this.$message.success({
            content: "บันทึกข้อมูลเรียบร้อยแล้ว",
            key,
            duration: 2,
          });
          this.dialog = false;
          window.location.reload();
        });
      }
    },
  },
});
</script>

<style scope>
@page {
  size: A4;
  margin: 0;
}

* {
  box-sizing: border-box;
}
.page {
  width: 210mm;
  min-height: 297mm;
  padding: 2mm;
  margin: 10mm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media print {
  header {
    display: none;
  }
  .hide-btn {
    display: none;
  }
  html,
  body {
    width: 210mm;
    height: 297mm;
  }
  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
