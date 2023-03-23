<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page">
      <v-container>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <img
                  src="https://www.adt.or.th/image/ADT1%20-%201108%20-%200263.jpg"
                  class="w-141px h-47px"
                  alt="sridara Logo"
                />
                <v-sheet style="text-align: center; font-size: 12px">
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
          <br>
            <center>ใบเคลียร์ประมาณการเงินสดย่อย</center>
      <table
        
        class="w-full text-sm text-left">
        <tr>
          <td colspan="5" class="pb-1 pt-2 px-3">
            <h3>
           
            </h3>
          </td>
          <td colspan="7" class="pb-1 pt-2 px-3">
             
          </td>
          <td colspan="3" class="pb-1 pt-2 px-3">
            เลขที่ : 
          </td>
        </tr>
        <tr>
          <td colspan="7" class="py-1 px-3">
            ผู้ขอเคียร์
          </td>
          <td colspan="5" class="pb-1 pt-2 px-3">
            <h3>
           
            </h3>
          </td>
          <td colspan="3" class="py-1 px-3">
            วันที่ : 
          </td>
          
        </tr>

        <tr>
          <td colspan="5" class="py-1 px-3">
           อ้างอิงถึงเลขที่ใบเคียร์เงินทดลองจ่าย
          </td>
          <td colspan="5" class="py-1 px-3">
            <h3>
              ฝ่าย/แผนก :
              
            </h3>
          </td>
        </tr>

         <tr>
          <td colspan="5" class="py-1 px-3">
            <h3>
              
              
            </h3>
          </td>
          <td colspan="5" class="py-1 px-3">
            <h3>
              โครงการ :
              
            </h3>
          </td>
        </tr>
      </table>
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
                  <td class="text-center" style="font-size: xx-small">รายละเอียดค่าใช้จ่าย</td>
                  <td class="text-center" style="font-size: xx-small">เลขที่และวันที่ใบเสร็จ</td>
                  <td class="text-center" style="font-size: xx-small">เลขประจำตัวผู้เสียภาษี</td>
                  <td class="text-center" style="font-size: xx-small">รายการค่าใช้จ่าย</td>
                  <td class="text-center" style="font-size: xx-small">ยอดสุทธิ</td>
                </tr>
              </thead>
              <tbody style="font-weight: normal; font-size: 14px">
                <tr style="border-bottom: 1px solid black">
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                  <td class="text-center" style="font-size: xx-small">xxxxx</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="font-size: 12px; padding-left: 4px; margin: auto">
          <v-col style="padding: 0">
            <v-table>
              <tr style="height: 20px">
                <td colspan="5" style="font-weight: bold">&nbsp;</td>
              </tr>
              <tr style="height: 30px">
                <td align="right" colspan="2" style="font-weight: bold">รวมสุทธิ :</td>
                <td align="center" colspan="2">xxx</td>
              </tr>
              <tr style="height: 30px">
                <td align="right" colspan="2" style="font-weight: bold">ยอกเงินประมาณการ :</td>
                <td align="center" colspan="2">xxx</td>
              </tr>
              <tr style="height: 30px">
                <td align="right" colspan="2" style="font-weight: bold">ยอดเงินส่งคืน :</td>
                <td align="center" colspan="2">xxx</td>
              </tr>
              <tr style="height: 30px">
                <td align="right" colspan="2" style="font-weight: bold">ยอดเงินเบิกเพิ่ม :</td>
                <td align="center" colspan="2">xxx</td>
              </tr>
            </v-table>
          </v-col>
        </v-row>

        <v-row style="font-size: 12px; padding-left: 4px; margin: auto">
          <v-col style="padding: 0">
            <v-table>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">รายละเอียดโครงการ/กิจกรรม :</td>
              </tr>
              <tr style="height: 30px">
                <td colspan="2" style="font-weight: bold">ผู้อนุมัติ (แบบอิเล็กทอรนิกส์)&nbsp;&nbsp;&nbsp;&nbsp;:</td>
              </tr>
              <tr style="height: 20px">
                <td colspan="3" style="font-weight: bold; border-bottom: 1px solid black">&nbsp;</td>
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
                <td>ผู้ขอเคียร์</td>
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
                <td>(………………………………………………)</td>
              </tr>
              <tr>
                <td>ผู้อนุมัติ / ตรวจสอบ</td>
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
                <td>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  )</td>
              </tr>
              <tr>
                <td>ผู้รับเคียร์เงิน</td>
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
                <td>(………………………………………………)</td>
              </tr>
              <tr>
                <td>ผู้อำนวยการฝ่ายการเงิน</td>
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
<!-- <script lang="ts">
  import dayjs from "dayjs";
  import { defineComponent } from "vue";
  import buddhistEra from "dayjs/plugin/buddhistEra";
  import {
    read_one_data_conditions,
    ArabicNumberToText,
  } from "~~/services/configs";
  export default defineComponent({
    setup() {
      dayjs.extend(buddhistEra);
      return {
        dayjs,
        ArabicNumberToText,
      };
    },
    mounted() {
      const obj = JSON.parse(String(this.$route.query.data));
      this.ob = obj;
  
      this.last_total = obj.tax_invoice.reduce(
        (a: any, b: any) => Number(a) + Number(b.total),
        0
      );
      console.log(this.last_total);
      read_one_data_conditions(
        "quotation_detail",
        "tour_id",
        obj.tax_invoice[0].tour_id
      ).then((res) => {
        this.onLoad = true;
        this.quo = res[0].fields;
      });
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
  </script> -->

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
