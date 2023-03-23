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
                      <b>สาขา: </b>
                    </td>
                    <td colspan="2">{{ ob.receipt_branch }}</td>
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
                  <div style="font-size: 14px"><b>ใบเสร็จรับเงิน</b></div>
                  <div>Receipt</div>
                </td>
              </tr>
              <tr style="text-align: center">
                <td colspan="2" style="border-bottom: 1px solid lightgray">
                  ต้นฉบับ/Original (เอกสารออกเป็นชุด)
                </td>
              </tr>
              <tr>
                <td><b>วันที่รับชำระ:</b></td>
                <td style="text-align: center">
                  {{ dayjs(ob.receipt_date).format("DD/MM/BBBB") }}
                </td>
              </tr>
              <tr>
                <td><b>เลขที่ใบเสร็จรับเงิน:</b></td>
                <td style="text-align: center">{{ ob.receipt_no }}</td>
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
                    วันที่
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    เลขที่ใบกำกับภาษี
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    รายละเอียด
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    จำนวนเงิน
                  </td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr v-for="(item, index) in ob.tax_invoice" :key="index">
                  <td class="text-center" style="font-size: xx-small">
                    {{ index + 1 }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.date }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.tax_invoice_no }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ item.desc }}
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    {{ parseFloat(item.total).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="font-size: 12px; padding-left: 4px; margin: auto">
          <v-col style="padding: 0" cols="6">
            <v-table>
              <tr style="height: 20px">
                <td colspan="2" style="font-weight: bold">&nbsp;</td>
              </tr>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">
                  รวมทั้งสิ้น ตัวอักษร:
                </td>
                <td colspan="2">{{ ArabicNumberToText(last_total) }}</td>
              </tr>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">ชำระ:</td>
                <td colspan="2">{{ ob.receipt_pay_type }}</td>
              </tr>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">
                  หักภาษี ณ ที่จ่าย :
                </td>
                <td colspan="2">{{ ob.receipt_tax }}</td>
              </tr>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">
                  เลขที่เช็ค // วันที่เช็ค
                </td>
                <td colspan="2">
                  {{ ob.receipt_check_no }} //
                  {{ dayjs(ob.receipt_check_date).format("DD/MM/BBBB") }}
                </td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="font-size: 12px; padding-left: 4px; margin: auto">
          <v-col style="padding: 0">
            <v-table>
              <tr style="height: 30px">
                <td>
                  <b>หมายเหตุ: </b>
                  ใบเสร็จรับเงินฉบับนี้จะสมบูรณ์ต่อเมื่อได้รับเงินตามเช็คเรียบร้อยและต้องมีลายมือชื่อกรรมการ
                  ผู้มีอำนาจหรือผู้แทนที่ถูกต้องและผู้รับเงิน
                </td>
              </tr>
              <tr style="height: 20px">
                <td
                  colspan="2"
                  style="font-weight: bold; border-bottom: 1px solid black"
                >
                  &nbsp;
                </td>
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
                <td>ผู้จัดทำ</td>
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
                <td>ผู้รับเงิน</td>
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
                <td>กรรมการผู้มีอำนาจหรือตัวแทน</td>
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
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: center"
      ><v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >
</template>
<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { read_all_data, ArabicNumberToText } from "~~/services/pyapi";
export default defineComponent({
  setup() {
    dayjs.extend(buddhistEra);
    return {
      dayjs,
      ArabicNumberToText,
    };
  },
  async mounted() {
    const obj = JSON.parse(String(this.$route.query.data));
    this.ob = obj;

    this.last_total = obj.tax_invoice.reduce(
      (a: any, b: any) => Number(a) + Number(b.total),
      0
    );

    const q = await read_all_data(
      `quotations?tour_id=${obj.tax_invoice[0].tour_id}`
    );
    this.quo = q[0];
    this.onLoad = true;
  },
  data() {
    return {
      onLoad: false,
      quo: {} as any,
      ob: {} as any,
      last_total: 0,
    };
  },
  methods: {
    print() {
      window.print();
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
</style>
