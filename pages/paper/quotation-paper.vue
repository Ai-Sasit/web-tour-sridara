<template>
  <div
    style="display: flex; background-color: rgb(225, 225, 241); z-index: -111"
  >
    <div class="page" v-if="go">
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
                        <b>ใบเสนอราคา/ยืนยันการสั่งซื้อ</b>
                      </div>
                      <div>Quatation</div>
                    </td>
                  </tr>
                  <tr style="height: 20px; font-size: 12px">
                    <td style="width: 50%"><b>เลขที่:</b></td>
                    <td>145447888246{{ quo.no }}</td>
                  </tr>
                  <tr style="height: 20px; font-size: 12px">
                    <td><b>วันที่:</b></td>
                    <td>02/05/66{{ quo.date }}</td>
                  </tr>
                </v-table>
              </v-col>
            </v-row>
            <v-row style="font-size: 12px">
              <v-col cols="8"
                ><v-table style="border-right: 1px solid lightgray">
                  <tr style="height: 20px">
                    <td style="width: 20%">
                      <b>ชื่อลูกค้า: </b>
                    </td>
                    <td style="text-align: left">
                      หนูนัน วันดี{{ quo.customer_name }}
                    </td>
                  </tr>
                  <tr style="height: 20px">
                    <td>
                      <b>ชื่อผู้ติดต่อ: </b>
                    </td>
                    <td>หมี{{ quo.contact_name }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>ที่อยู่: </b></td>
                    <td>20-22 ม.2 ต.โพธิ์กระัสังข์{{ quo.address }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td>
                      <b>ID TAX: </b>
                    </td>
                    <td>254211554{{ quo.tax_id }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td>
                      <b>โทร: </b>
                    </td>
                    <td>0969128748{{ quo.customer_tel }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td>
                      <b>Email: </b>
                    </td>
                    <td>Srisantisang2515@gmail.com{{ quo.email }}</td>
                  </tr>
                </v-table></v-col
              >
              <v-col
                ><v-table style="font-size: 12px">
                  <tr style="height: 20px">
                    <td style="width: 50%"><b>รหัสลูกค้า:</b></td>
                    <td>123456789{{ quo.customer_code }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>ผู้เสนอขาย:</b></td>
                    <td>หนูนา{{ quo.sales_person }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>ฝ่าย:</b></td>
                    <td>ขาย{{ quo.sale_department }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>ยืนยันราคาภายใน:</b></td>
                    <td>28/06/66{{ quo.confirm_price_within }}</td>
                  </tr>
                  <tr style="height: 20px">
                    <td><b>วันส่งของ:</b></td>
                    <td>29/07/66{{ quo.delivery_date }}</td>
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
                <tr v-for="(item, index) in product" :key="index">
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
                  กำหนดยืนราคา &nbsp;<b>{{ quo.earnest_money }}</b
                  >&nbsp;วัน
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
                  ขอขอบพระคุณมา ณ ที่นี้
                </td>
              </tr>
              <tr>
                <td colspan="6">
                  <b>ดังรายละเอียดธนาคารดังต่อไปนี้ :</b>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
                  โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
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
                <td>มัดจำ</td>
                <td style="text-align: right">
                  {{ quo.price_validate_period }} บาท
                </td>
              </tr>
              <tr>
                <td>รวมเงิน</td>
                <td style="text-align: right">{{ quo.total_price }} บาท</td>
              </tr>
              <tr>
                <td>ส่วนลดสินค้า</td>
                <td style="text-align: right">
                  {{ quo.less_cash_discount }} บาท
                </td>
              </tr>
              <tr>
                <td>มูลค่าสินค้า</td>
                <td style="text-align: right">{{ quo.net_price }} บาท</td>
              </tr>
              <tr>
                <td>ภาษีมูลค่าเพิ่ม 7 %</td>
                <td style="text-align: right">{{ quo.vat }} บาท</td>
              </tr>
              <tr>
                <td><b>จำนวนเงินทั้งสิ้น</b></td>
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
              <tr style="font-size: 10px; text-align: left">
                <td>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr style="height: 100px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้เสนอราคา</td>
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
              <tr style="font-size: 10px; text-align: left">
                <td>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr style="height: 100px">
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
              <tr style="font-size: 10px; text-align: left">
                <td>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr style="height: 100px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>ผู้ตรวจสอบ</td>
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
            <v-table>
              <tr style="font-size: 10px; text-align: center">
                <td>
                  <div>ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ</div>
                  <div>ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ</div>
                </td>
              </tr>
              <tr style="height: 100px; font-size: 10px; text-align: left">
                <td>&nbsp;</td>
              </tr>
              <tr style="text-align: center">
                <td>ผู้อนุมัติสั่งซื้อ</td>
              </tr>
              <tr style="text-align: center">
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
    v-if="go"
    justify="center"
    style="margin-top: -2rem; background-color: rgb(225, 225, 241)"
    class="hide-btn"
    ><v-col style="text-align: right">
      <v-btn color="yellow-darken-4" @click="dialog3 = true"
        >แก้ไขเอกสารใบเสนอราคา</v-btn
      ></v-col
    ><v-col style="text-align: left">
      <v-btn color="light-blue-accent-4" @click="print"
        >สั่งพิมพ์ หรือ บันทึกเป็น PDF</v-btn
      ></v-col
    ></v-row
  >

  <a-modal
    v-model:visible="dialog3"
    title="กรุณากรอกราคาของทัวน์ใหม่ ก่อนแก้ไขใบเสนอราคา"
  >
    <template #footer>
      <a-button key="back" @click="dialog3 = false">ยกเลิก</a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="tour_program.loading"
        @click="onProductChange"
        >ไปหน้าแก้ไข</a-button
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
          v-model="tour_program.tax"
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
          v-model.number="tour_program.discount"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </v-col>
    </v-row>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { read_all_data, update_data } from "~~/services/pyapi";
const key = "updatable";
export default defineComponent({
  data() {
    return {
      tour_id: "",
      quo: {} as any,
      product: [] as any,
      go: false,
      dialog3: false,
      tour_program: {
        price_per_unit: 0,
        tax: "",
        discount: 0,
        loading: false,
      },
    };
  },
  async mounted() {
    this.tour_id = String(this.$route.query.tid);
    this.$message.loading({
      content: "กำลังโหลดข้อมูลใบเสนอราคา และสร้างเป็นเอกสาร",
      key,
    });
    const data = await read_all_data(`quotations?tour_id=${this.tour_id}`);
    data.length > 0 ? (this.go = true) : (this.go = false);
    this.quo = data[0];

    const product = await read_all_data(`products?tid=${this.tour_id}`);
    this.product = product;
    this.tour_program.price_per_unit = product[0].price_per_unit;
    this.tour_program.tax = product[0].tax;
    this.tour_program.discount = product[0].discount;

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
    onProductChange() {
      let total = this.tour_program.price_per_unit;
      var amount = 0;
      if (this.tour_program.tax == "7%") {
        amount = total + total * 0.07 - this.tour_program.discount;
      } else if (this.tour_program.tax == "9%") {
        amount = total + total * 0.09 - this.tour_program.discount;
      } else {
        amount = total - this.tour_program.discount;
      }
      const payload = {
        tour_id: this.tour_id,
        code: this.product[0].code,
        name: this.product[0].name,
        price_per_unit: this.tour_program.price_per_unit,
        tax: this.tour_program.tax,
        discount: this.tour_program.discount,
        desc: this.product[0].desc,
        qty: this.product[0].qty,
        unit: this.product[0].unit,
        amount: amount,
      };
      update_data("product", this.product[0].id, payload).then(() => {
        this.$message.success({
          content: "แก้ไขข้อมูลสินค้าเรียบร้อยแล้ว",
          key,
          duration: 2,
        });
        this.$router.push(`/qpform/quoedit/${this.tour_id}`);
      });
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
