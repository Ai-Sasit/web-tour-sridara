<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page">
      <v-container>
        <div>
          <v-sheet
            ><b
              >รายงานรายรับ-รายจ่าย (รายวัน) ***อย่าลืมเอา div ออกนะจ๊ะ***</b
            ></v-sheet
          >
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
                          <b>รายงานรายรับ-รายจ่าย</b>
                        </div>
                        <div style="font-size: 10px">รายวัน</div>
                      </td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td style="width: 50%"><b>เลขที่:</b></td>
                      <td style="text-align: right">1558/3</td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td><b>วันที่:</b></td>
                      <td style="text-align: right">15/01/66</td>
                    </tr>
                  </v-table>
                </v-col>
              </v-row>
              <v-row style="font-size: 12px">
                <v-col
                  ><v-table>
                    <tr style="height: 20px">
                      <td style="width: 20%">
                        <b>บริษัท: </b>
                      </td>
                      <td style="text-align: left">
                        บริษัท ฟิน ซอฟต์ 2023 จำกัด
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>ที่อยู่: </b>
                      </td>
                      <td>
                        45/22 ถนนศรีวิเศษ ตำบลเมืองเหนือ อำเภอเมืองศรีสะเกษ
                        จ.ศรีสะเกษ 33000
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td><b>เลขประจำตัวผู้เสียภาษี: </b></td>
                      <td>0335566000123</td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>เบอร์โทร: </b>
                      </td>
                      <td>080296664</td>
                    </tr>
                  </v-table></v-col
                >
              </v-row>
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
                    <td class="text-center" style="font-size: xx-small">
                      ลำดับ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายการ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายรับ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายจ่าย
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      หมายเหตุ
                    </td>
                  </tr>
                </thead>
                <tbody style="font-weight: normal; font-size: 14px">
                  <tr>
                    <td class="text-center" style="font-size: xx-small">1</td>
                    <td
                      class="text-left"
                      style="font-size: xx-small; padding-left: 4px"
                    >
                      เบี้ยเลี้ยงต่างๆ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      5,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      2,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      เลขที่เอกสาร
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>

          <v-row
            style="
              font-size: 11px;
              padding-left: 4px;
              padding-right: 4px;
              margin: auto;
              border-bottom: 1px solid black;
            "
          >
            <v-col style="padding: 0" cols="8"
              ><v-table>
                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>

                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
            <v-col style="padding: 0" cols="4"
              ><v-table style="padding-left: 20px; padding-right: 10px">
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>รายรับรวมทั้งสิ้น</td>
                  <td style="text-align: right">200,000 บาท</td>
                </tr>
                <tr>
                  <td>รายจ่ายรวมทั้งสิ้น</td>
                  <td style="text-align: right">135,890 บาท</td>
                </tr>
                <tr>
                  <td><b>กำไร (ขาดทุน)</b></td>
                  <td style="text-align: right">64,110 บาท</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
          </v-row>
        </div>

        <div>
          <v-sheet
            ><b
              >รายงานรายรับ-รายจ่าย (รายเดือน) ***อย่าลืมเอา div ออกนะจ๊ะ***</b
            ></v-sheet
          >
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
                          <b>รายงานรายรับ-รายจ่าย</b>
                        </div>
                        <div style="font-size: 10px">รายเดือน</div>
                      </td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td style="width: 50%"><b>เลขที่:</b></td>
                      <td style="text-align: right">1558/3</td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td><b>เดือนที่:</b></td>
                      <td style="text-align: right">05/2566</td>
                    </tr>
                  </v-table>
                </v-col>
              </v-row>
              <v-row style="font-size: 12px">
                <v-col
                  ><v-table>
                    <tr style="height: 20px">
                      <td style="width: 20%">
                        <b>บริษัท: </b>
                      </td>
                      <td style="text-align: left">
                        บริษัท ฟิน ซอฟต์ 2023 จำกัด
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>ที่อยู่: </b>
                      </td>
                      <td>
                        45/22 ถนนศรีวิเศษ ตำบลเมืองเหนือ อำเภอเมืองศรีสะเกษ
                        จ.ศรีสะเกษ 33000
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td><b>เลขประจำตัวผู้เสียภาษี: </b></td>
                      <td>0335566000123</td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>เบอร์โทร: </b>
                      </td>
                      <td>080296664</td>
                    </tr>
                  </v-table></v-col
                >
              </v-row>
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
                    <td class="text-center" style="font-size: xx-small">วัน</td>
                    <td class="text-center" style="font-size: xx-small">
                      รายรับ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายจ่าย
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      หมายเหตุ
                    </td>
                  </tr>
                </thead>
                <tbody style="font-weight: normal; font-size: 14px">
                  <tr>
                    <td class="text-center" style="font-size: xx-small">12</td>
                    <td class="text-center" style="font-size: xx-small">
                      5,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      2,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      เลขที่เอกสาร
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>

          <v-row
            style="
              font-size: 11px;
              padding-left: 4px;
              padding-right: 4px;
              margin: auto;
              border-bottom: 1px solid black;
            "
          >
            <v-col style="padding: 0" cols="8"
              ><v-table>
                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>

                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
            <v-col style="padding: 0" cols="4"
              ><v-table style="padding-left: 20px; padding-right: 10px">
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>รายรับรวมทั้งสิ้น</td>
                  <td style="text-align: right">200,000 บาท</td>
                </tr>
                <tr>
                  <td>รายจ่ายรวมทั้งสิ้น</td>
                  <td style="text-align: right">135,890 บาท</td>
                </tr>
                <tr>
                  <td><b>กำไร (ขาดทุน)</b></td>
                  <td style="text-align: right">64,110 บาท</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
          </v-row>
        </div>

        <div>
          <v-sheet
            ><b
              >รายงานรายรับ-รายจ่าย (รายปี) ***อย่าลืมเอา div ออกนะจ๊ะ***</b
            ></v-sheet
          >
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
                          <b>รายงานรายรับ-รายจ่าย</b>
                        </div>
                        <div style="font-size: 10px">รายปี</div>
                      </td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td style="width: 50%"><b>เลขที่:</b></td>
                      <td style="text-align: right">1558/3</td>
                    </tr>
                    <tr style="height: 20px; font-size: 12px">
                      <td><b>ปี:</b></td>
                      <td style="text-align: right">2566</td>
                    </tr>
                  </v-table>
                </v-col>
              </v-row>
              <v-row style="font-size: 12px">
                <v-col
                  ><v-table>
                    <tr style="height: 20px">
                      <td style="width: 20%">
                        <b>บริษัท: </b>
                      </td>
                      <td style="text-align: left">
                        บริษัท ฟิน ซอฟต์ 2023 จำกัด
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>ที่อยู่: </b>
                      </td>
                      <td>
                        45/22 ถนนศรีวิเศษ ตำบลเมืองเหนือ อำเภอเมืองศรีสะเกษ
                        จ.ศรีสะเกษ 33000
                      </td>
                    </tr>
                    <tr style="height: 20px">
                      <td><b>เลขประจำตัวผู้เสียภาษี: </b></td>
                      <td>0335566000123</td>
                    </tr>
                    <tr style="height: 20px">
                      <td>
                        <b>เบอร์โทร: </b>
                      </td>
                      <td>080296664</td>
                    </tr>
                  </v-table></v-col
                >
              </v-row>
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
                    <td class="text-center" style="font-size: xx-small">
                      เดือน
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายรับ
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      รายจ่าย
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      หมายเหตุ
                    </td>
                  </tr>
                </thead>
                <tbody style="font-weight: normal; font-size: 14px">
                  <tr>
                    <td class="text-center" style="font-size: xx-small">4</td>
                    <td class="text-center" style="font-size: xx-small">
                      5,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      2,000
                    </td>
                    <td class="text-center" style="font-size: xx-small">
                      เลขที่เอกสาร
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>

          <v-row
            style="
              font-size: 11px;
              padding-left: 4px;
              padding-right: 4px;
              margin: auto;
              border-bottom: 1px solid black;
            "
          >
            <v-col style="padding: 0" cols="8"
              ><v-table>
                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>

                <tr>
                  <td colspan="6">&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
            <v-col style="padding: 0" cols="4"
              ><v-table style="padding-left: 20px; padding-right: 10px">
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>รายรับรวมทั้งสิ้น</td>
                  <td style="text-align: right">200,000 บาท</td>
                </tr>
                <tr>
                  <td>รายจ่ายรวมทั้งสิ้น</td>
                  <td style="text-align: right">135,890 บาท</td>
                </tr>
                <tr>
                  <td><b>กำไร (ขาดทุน)</b></td>
                  <td style="text-align: right">64,110 บาท</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </v-table>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
  <v-row
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: right">
      <v-btn color="yellow-darken-4">แก้ไขเอกสารใบเสนอราคา</v-btn></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal title="กรุณากรอกราคาของทัวน์ใหม่ ก่อนแก้ไขใบเสนอราคา">
    <template #footer>
      <a-button key="back">ยกเลิก</a-button>
      <a-button key="submit" type="primary">ไปหน้าแก้ไข</a-button>
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </v-col>
      <v-col>
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >ภาษี (0% 7% 9%)</label
        >
        <select
          style="height: 55%"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
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
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </v-col>
    </v-row>
  </a-modal>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
// import { read_all_data, update_data } from "~~/services/pyapi";
// const key = "updatable";
// export default defineComponent({
//   data() {
//     return {
//       tour_id: "",
//       customer_id: "",
//       quo: {} as any,
//       product: [] as any,
//       go: false,
//       dialog3: false,
//       tour_program: {
//         price_per_unit: 0,
//         tax: "",
//         discount: 0,
//         loading: false,
//       },
//     };
//   },
//   async mounted() {
//     this.tour_id = String(this.$route.query.tid);
//     this.customer_id = String(this.$route.query.cid);
//     this.$message.loading({
//       content: "กำลังโหลดข้อมูลใบเสนอราคา และสร้างเป็นเอกสาร",
//       key,
//     });
//     const data = await read_all_data(
//       `quotations?customer_id=${this.customer_id}`
//     );
//     data.length > 0 ? (this.go = true) : (this.go = false);
//     this.quo = data[0];

//     const product = await read_all_data(`products?qid=${this.customer_id}`);
//     this.product = product;
//     this.tour_program.price_per_unit = product[0].price_per_unit;
//     this.tour_program.tax = product[0].tax;
//     this.tour_program.discount = product[0].discount;

//     this.$message.success({
//       content: "โหลดข้อมูลเรียบร้อยแล้ว",
//       key,
//       duration: 2,
//     });
//   },
//   methods: {
//     print() {
//       window.print();
//     },
//     onProductChange() {
//       let total = this.tour_program.price_per_unit;
//       var amount = 0;
//       if (this.tour_program.tax == "7%") {
//         amount = total + total * 0.07 - this.tour_program.discount;
//       } else if (this.tour_program.tax == "9%") {
//         amount = total + total * 0.09 - this.tour_program.discount;
//       } else {
//         amount = total - this.tour_program.discount;
//       }
//       const payload = {
//         tour_id: this.tour_id,
//         code: this.product[0].code,
//         name: this.product[0].name,
//         price_per_unit: this.tour_program.price_per_unit,
//         tax: this.tour_program.tax,
//         discount: this.tour_program.discount,
//         desc: this.product[0].desc,
//         qty: this.product[0].qty,
//         unit: this.product[0].unit,
//         amount: amount,
//       };
//       update_data("product", this.product[0].id, payload).then(() => {
//         this.$message.success({
//           content: "แก้ไขข้อมูลสินค้าเรียบร้อยแล้ว",
//           key,
//           duration: 2,
//         });
//         this.$router.push(`/qpform/quoedit/${this.tour_id}`);
//       });
//     },
//   },
// });
//
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
