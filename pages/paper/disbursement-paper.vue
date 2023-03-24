<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111">
    <div class="page">
      <v-container>
        <v-row style="margin: 2px">
          <v-col>
            <v-row
              ><img
                src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
                class="w-141px h-47px"
                alt="sridara Logo"
            /></v-row>
            <v-row style="border-bottom: 1px solid lightgray">
              <v-col cols="8"
                ><v-sheet style="text-align: left; font-size: 12px">
                  <div>บริษัท ศรีดาราทัวร์ จำกัด (สำนักงานใหญ่)</div>
                  <div>
                    123 ถนนชยางกูร หมู่ 19 ตำบลบุ่ง อำเภอเมืองอำนาจเจริญ
                    จังหวัดอำนาจเจริญ 37000
                  </div>
                  <div>
                    เลขประจำตัวผู้เสียภาษี: 0375552000037 | โทร.082-3656514
                  </div>

                  <div><a>www.facebook.com/sridaratourfanpage</a></div>
                </v-sheet></v-col
              >
              <v-col>
                <v-table>
                  <tr style="text-align: center">
                    <td colspan="2">
                      <div style="font-size: 14px">
                        <b>ใบประมาณการเบิกเงินสดย่อย</b>
                      </div>
                      <div>Disbursement Estimate</div>
                    </td>
                  </tr>
                  <tr style="height: 20px; font-size: 12px">
                    <td style="width: 50%"><b>เลขที่:</b></td>
                    <td style="text-align: right">{{ estimate.no }}</td>
                  </tr>
                  <tr style="height: 20px; font-size: 12px">
                    <td><b>วันที่:</b></td>
                    <td style="text-align: right">{{ estimate.date }}</td>
                  </tr>
                </v-table>
              </v-col>
            </v-row>
            <v-row style="font-size: 12px">
              <v-col style="border-right: 1px solid lightgray"
                ><v-table>
                  <tr style="height: 20px">
                    <td style="width: 55%">
                      <b>ชื่อผู้ขอเบิก: </b>
                    </td>
                    <td style="text-align: left">
                      {{ estimate.withdrawer_name }}
                    </td>
                  </tr>
                  <tr style="height: 20px">
                    <td>
                      <b>แผนก: </b>
                    </td>
                    <td>{{ estimate.withdrawer_position }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>วัตถุประสงค์การยืมเงินทดลองจ่าย: </b></td>
                    <td>{{ estimate.objective }}</td>
                  </tr>
                </v-table>
              </v-col>
              <v-col
                ><v-table style="font-size: 12px">
                  <tr style="height: 20px">
                    <td style="width: 50%"><b>วันที่ต้องการใช้เงิน:</b></td>
                    <td style="text-align: right">
                      {{ estimate.date_want_pay }}
                    </td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>โครงการ:</b></td>
                    <td style="text-align: right">
                      {{ estimate.tour_name }}
                    </td>
                  </tr>
                </v-table></v-col
              >
            </v-row>
          </v-col>
        </v-row>

        <v-row
          style="padding: 1px; margin: auto; border-bottom: 1px solid black">
          <v-col style="padding: 1px; height: 400px">
            <v-table density="compact" height="auto">
              <thead style="font-weight: bold; font-size: 14px">
                <tr style="border-top: 1px solid black">
                  <td class="text-center" style="font-size: xx-small">ลำดับ</td>
                  <td class="text-center" style="font-size: xx-small">
                    รายละเอียดค่าใช้จ่าย
                  </td>
                  <td class="text-center" style="font-size: xx-small">ราคา</td>
                  <td
                    colspan="5"
                    class="text-center"
                    style="font-size: xx-small">
                    ค่าใช้จ่าย
                  </td>
                  <td class="text-center" style="font-size: xx-small">จำนวน</td>
                  <td class="text-center" style="font-size: xx-small">
                    ยอดสุทธิ
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid black">
                  <td class="text-center" style="font-size: xx-small">
                    &nbsp;
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    &nbsp;
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    &nbsp;
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    เบี้ยเลี้ยง
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    ค่าที่พัก
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    ค่ายานพาหนะ
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    ค่าน้ำมัน
                  </td>
                  <td class="text-center" style="font-size: xx-small">อื่นๆ</td>
                  <td class="text-center" style="font-size: xx-small">
                    &nbsp;
                  </td>
                  <td class="text-center" style="font-size: xx-small">
                    &nbsp;
                  </td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr>
                  <td class="text-center" style="font-size: xx-small">1</td>
                  <td class="text-center" style="font-size: xx-small">
                    เดินทางไปเชียงใหม่ 3 วัน 2 คืน
                  </td>
                  <td class="text-center" style="font-size: xx-small">29990</td>
                  <td class="text-center" style="font-size: xx-small">3000</td>
                  <td class="text-center" style="font-size: xx-small">200</td>
                  <td class="text-center" style="font-size: xx-small">50</td>
                  <td class="text-center" style="font-size: xx-small">15</td>
                  <td class="text-center" style="font-size: xx-small">78</td>
                  <td class="text-center" style="font-size: xx-small">35000</td>
                  <td class="text-center" style="font-size: xx-small">20000</td>
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
          ">
          <v-col style="padding: 0" cols="9"
            ><v-table>
              <tr>
                <td colspan="6">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="6">
                  ตัวหนังสือ: &nbsp;{{
                    ArabicNumberToText(estimate.total_price)
                  }}&nbsp;
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  ผู้อนุมัติ (แบบอิเล็กทอรนิกส์): &nbsp;
                  {{ estimate.approve_name }} &nbsp;
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  ข้าพเจ้าขอรับรองว่ารายการที่กล่าวมาข้างต้นเป็นความจริง
                  พร้อมหลักฐานการจ่าย / แผนประกอบการที่ส่งมา
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  รวมทั้งจำนวนเงินที่ขอเบิกถูกต้องตามระเบียบบริษัททุกประการ
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
                <td><b>รวมสุทธิ</b></td>
                <td style="text-align: right">
                  {{ estimate.total_price }} บาท
                </td>
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
                <td>(นางสาวสุริพร รัตนชัย)</td>
              </tr>
              <tr>
                <td>ผู้ขอเบิก</td>
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
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้อนุมัติ/ตรวจสอบ</td>
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
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้จ่ายเงิน</td>
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
      ><v-btn color="light-blue-accent-4"
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
  mounted() {
    this.no = String(this.$route.query.cid);
    this.tour_id = String(this.$route.query.tid);
    read_all_data(`estimates?no=${this.no}`).then((res) => {
      this.estimate = res[0];
      this.onLoad = true;
    });
  },
  data() {
    return {
      onLoad: false,
      no: "",
      tour_id: "",
      estimate: {},
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
