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
                    <td colspan="2"><b>ที่อยู่: </b></td>
                    <td colspan="2">{{ quo.address }}</td>
                  </tr>

                  <tr style="height: 20px">
                    <td colspan="2">
                      <b>เลขประจำตัวผู้เสียภาษี: </b>
                    </td>
                    <td colspan="2">{{ quo.tax_id }}</td>
                  </tr>
                  <tr
                    style="
                      border-top: 1px solid lightgray;
                      border-bottom: 1px solid lightgray;
                      height: 30px;
                    "
                  >
                    <td colspan="2">
                      <input
                        type="checkbox"
                        class="ml-5 mr-2"
                        style="
                          color: #424242;
                          margin-top: -3px;
                          border: 1px solid black;
                          border-radius: 3px;
                        "
                        id="vehicle3"
                        :checked="tax.branch == ''"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> สำนักงานใหญ่</label>
                    </td>
                    <td colspan="2">
                      <input
                        type="checkbox"
                        class="mr-2"
                        :checked="tax.branch != ''"
                        style="
                          color: #424242;
                          margin-top: -3px;
                          border: 1px solid black;
                          border-radius: 3px;
                        "
                        id="vehicle3"
                        name="vehicle3"
                        value="Boat"
                      />
                      <label for="vehicle3"> สาขาที่: {{ tax.branch }}</label>
                    </td>
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
                  <div style="font-size: 14px"><b>ใบกำกับภาษี/ใบส่งของ</b></div>
                  <div>Tax Invoice/Delivery Order</div>
                </td>
              </tr>
              <tr style="text-align: center">
                <td colspan="2" style="border-bottom: 1px solid lightgray">
                  ต้นฉบับ/Original (เอกสารออกเป็นชุด)
                </td>
              </tr>
              <tr>
                <td><b>วันที่:</b></td>
                <td style="text-align: right">{{ tax.date }}</td>
              </tr>
              <tr>
                <td><b>เลขที่:</b></td>
                <td style="text-align: right">{{ tax.no }}</td>
              </tr>
              <tr style="border-top: 1px solid lightgray">
                <td><b>รหัสลูกค้า:</b></td>
                <td style="text-align: right">{{ quo.customer_code }}</td>
              </tr>
              <tr>
                <td><b>ผู้ขาย:</b></td>
                <td style="text-align: right">{{ quo.sales_person }}</td>
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
              <tr style="border-bottom: 1px solid lightgray">
                <td><b>กำหนดชำระ:</b></td>
                <td style="text-align: right">
                  {{ tax.pay_date }}
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
                  - หากสินค้าไม่ครบถ้วนกรุณาแจ้งกลับบริษัทฯ ภายใน 7 วัน
                  หลังจากได้รับสินค้าแล้ว มิฉะนั้นบริษัทฯ
                  จะไม่รับผิดชอบใดๆทั้งสิ้น
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  -
                  กรรมสิทธิ์สินค้าตามใบส่งของนี้ยังถือว่าเป็นของผู้ขายอยู่จนกว่าผู้ซื้อจะได้ชำระเงินหรือเช็คขึ้นเงินเรียบร้อย
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  - หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม
                  “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก
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
          <v-col style="padding-left: 20px" cols="3"
            ><v-table>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>รวมเงิน</td>
                <td style="text-align: right">{{ quo.total_price }} บาท</td>
              </tr>
              <tr>
                <td>หักส่วนลดพิเศษ</td>
                <td style="text-align: right">{{ quo.earnest_money }} บาท</td>
              </tr>
              <tr>
                <td>มูลค่ายกเว้นภาษี</td>
                <td style="text-align: right">{{ avoid_tax }} บาท</td>
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
        >แก้ไขเอกสารใบกำกับภาษี</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal
    v-model:visible="dialog"
    width="65rem"
    title="ฟอร์มแก้ไขใบกำกับภาษี/ใบส่งของ"
  >
    <template #footer>
      <a-button key="back" @click="dialog = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loadGenBill"
        @click="updateTaxInvoice"
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
          v-model="taxUpdate.tax_no"
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
          v-model:value="taxUpdate.tax_date"
          class="date-picker"
          format="DD/MM/YYYY"
        />
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
          v-model:value="taxUpdate.tax_pay_date"
          class="date-picker"
          format="DD/MM/YYYY"
        />
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
          v-model="taxUpdate.tax_branch"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </v-col>
    </v-row>
  </a-modal>
</template>
<script lang="ts">
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import dayjs from "dayjs";
import { defineComponent } from "vue";
import {
  read_all_data,
  update_data,
  ArabicNumberToText,
} from "~~/services/pyapi";
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
  methods: {
    print() {
      window.print();
    },
    valideteTaxInvoice() {
      if (this.taxUpdate.tax_no == "") {
        this.$message.error("กรุณากรอกเลขที่ใบกำกับภาษี");
        return false;
      }
      if (this.taxUpdate.tax_date == "") {
        this.$message.error("กรุณากรอกวันที่ใบกำกับภาษี");
        return false;
      }
      if (this.taxUpdate.tax_pay_date == "") {
        this.$message.error("กรุณากรอกกำหนดการชำระใบกำกับภาษี");
        return false;
      }
      return true;
    },
    updateTaxInvoice() {
      if (this.valideteTaxInvoice()) {
        this.loadGenBill = true;
        const payload = {
          tour_id: this.tour_id,
          no: this.taxUpdate.tax_no,
          date: this.taxUpdate.tax_date.format("DD/MM/BBBB"),
          pay_date: this.taxUpdate.tax_pay_date.format("DD/MM/BBBB"),
          branch: this.taxUpdate.tax_branch,
        };
        update_data("tax", this.tax.id, payload)
          .then((res) => {
            this.$message.success({
              content: "สร้างเอกสารเรียบร้อยแล้ว",
              key,
              duration: 2,
            });
            this.dialog = false;
            window.location.reload();
            this.loadGenBill = false;
          })
          .catch((err) => {
            this.$message.error({
              content: "เกิดข้อผิดพลาดในการสร้างเอกสาร",
              key,
              duration: 2,
            });
            this.dialog = false;
            this.loadGenBill = false;
          });
      }
    },
  },
  data() {
    return {
      tour_id: "",
      avoid_tax: 0,
      dialog: false,
      onLoad: false,
      loadGenBill: false,
      quo: {} as any,
      prod: [] as any,
      tax: {} as any,
      taxUpdate: {
        tax_no: "",
        tax_date: "" as any,
        tax_pay_date: "" as any,
        tax_branch: "",
      },
    };
  },
  async mounted() {
    this.tour_id = String(this.$route.query.tid);
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบกำกับภาษี และสร้างเป็นเอกสาร",
      key,
    });
    const t = await read_all_data(`taxes?tour_id=${this.tour_id}`);
    this.tax = t[0];
    const q = await read_all_data(`quotations?tour_id=${this.tour_id}`);
    this.quo = q[0];
    const p = await read_all_data(`products?tid=${this.tour_id}`);
    this.prod = p;
    p.reduce((a: any, b: any) => {
      if (b.tax == "0%") {
        this.avoid_tax += b.amount;
      }
    }, 0);
    this.onLoad = true;
    this.taxUpdate.tax_no = t[0].no;
    this.taxUpdate.tax_date = dayjs();
    this.taxUpdate.tax_pay_date = dayjs(t[0].pay_date, "DD/MM/BBBB");
    this.taxUpdate.tax_branch = t[0].branch;

    this.$message.success({
      content: "โหลดข้อมูลใบกำกับภาษี และสร้างเป็นเอกสารเรียบร้อยแล้ว",
      key,
      duration: 2,
    });
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
