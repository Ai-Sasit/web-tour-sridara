<template>
  <v-row>
    <v-col
      style="
        margin: 2rem;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      ">
      <v-row>
        <v-col>
          <v-text-field
            variant="solo"
            density="compact"
            v-model="keywords"
            label="กรอกชื่อลูกค้า เพื่อทำการค้นหา"></v-text-field>
        </v-col>
      </v-row>
      <a-table
        bordered
        size="small"
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        :columns="columns"
        :data-source="data" />
    </v-col>
    <v-col
      style="
        margin: 2rem;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      ">
      <v-row
        ><v-col>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >เลขที่ใบเสร็จรับเงิน 5555555555</label
          >
          <input
            type="text"
            v-model="receipt_no"
            id="large-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col
        ><v-col>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >สาขา (ถ้าไม่กรอกจะเป็นสำนักงานใหญ่)</label
          >
          <input
            type="text"
            v-model="receipt_branch"
            id="large-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> </v-col></v-row
      ><v-row>
        <v-col
          ><label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >วันที่รับชำระ</label
          >
          <a-date-picker
            :locale="locale"
            v-model:value="receipt_date"
            class="date-picker"
            format="DD/MM/YYYY" /></v-col
        ><v-col>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >ประเภทการชำระ</label
          >
          <select
            style="height: 55%"
            v-model="receipt_pay_type"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="เงินสด">เงินสด</option>
            <option value="เงินโอนธนาคาร">เงินโอนธนาคาร</option>
            <option value="เช็คธนาคาร">เช็คธนาคาร</option>
          </select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >หักภาษี ณ ที่จ่าย</label
          >
          <select
            style="height: 55%"
            v-model="receipt_tax"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0%">0%</option>
            <option value="7%">3%</option>
            <option value="9%">5%</option>
          </select> </v-col
        ><v-col
          ><label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >เลขที่เช็ค</label
          >
          <input
            type="text"
            v-model="receipt_check_no"
            id="large-input"
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></v-col
        ><v-col
          ><label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >วันที่เช็ค</label
          >
          <a-date-picker
            :locale="locale"
            v-model:value="receipt_check_date"
            class="date-picker"
            format="DD/MM/YYYY" /></v-col></v-row
      ><v-row>
        <v-col style="text-align: end"
          ><v-btn
            variant="tonal"
            color="green-darken-1"
            @click="genderateReceiptPaper"
            >สร้างใบเสร็จรับเงิน</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { genRanDec, ListTaxInvoice } from "~~/services/pyapi";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
type Key = string | number;

const columns = [
  {
    title: "วันที่",
    dataIndex: "date",
  },
  {
    title: "เลขที่ใบกำกับภาษี",
    dataIndex: "tax_invoice_no",
  },
  {
    title: "รายละเอียด",
    dataIndex: "desc",
  },
  {
    title: "จำนวนเงิน",
    dataIndex: "total",
  },
];

export default {
  data() {
    return {
      keywords: "",
      data: [] as any,
      data_tmp: [] as any,
      receipt_no: "",
      receipt_date: "",
      receipt_branch: "",
      receipt_pay_type: "",
      receipt_tax: "",
      receipt_check_no: "",
      receipt_check_date: "",
    };
  },
  methods: {
    validateReceipt() {
      if (this.receipt_no == "") {
        this.$message.error("กรุณากรอกเลขที่ใบเสร็จรับเงิน");
        return false;
      }
      if (this.receipt_date == "") {
        this.$message.error("กรุณากรอกวันที่รับชำระ");
        return false;
      }
      if (this.receipt_branch == "") {
        this.receipt_branch = "สำนักงานใหญ่";
        return true;
      }
      if (this.receipt_pay_type == "") {
        this.$message.error("กรุณากรอกประเภทการชำระ");
        return false;
      }
      if (this.receipt_tax == "") {
        this.$message.error("กรุณากรอกหักภาษี ณ ที่จ่าย");
        return false;
      }
      if (this.receipt_check_no == "") {
        this.$message.error("กรุณากรอกเลขที่เช็ค");
        return false;
      }
      if (this.receipt_check_date == "") {
        this.$message.error("กรุณากรอกวันที่เช็ค");
        return false;
      }
      return true;
    },
    genderateReceiptPaper() {
      const arr = this.state.selectedRowKeys.map((item: any) => {
        return this.data[item];
      });
      if (arr.length == 0) {
        this.$message.error("กรุณาเลือกใบกำกับภาษี");
        return;
      }
      if (this.validateReceipt()) {
        const json = JSON.stringify({
          receipt_no: this.receipt_no,
          receipt_date: this.receipt_date,
          receipt_branch: this.receipt_branch,
          receipt_pay_type: this.receipt_pay_type,
          receipt_tax: this.receipt_tax,
          receipt_check_no: this.receipt_check_no,
          receipt_check_date: this.receipt_check_date,
          tax_invoice: arr,
        });
        this.$router.push(`/paper/receipt-paper?data=${json}`);
      }
    },
  },
  watch: {
    keywords: function (val) {
      this.data = this.data_tmp.filter((item: any) => {
        return item.desc.toLowerCase().includes(val.toLowerCase());
      });
    },
  },
  mounted() {
    this.receipt_no = genRanDec(7);
    ListTaxInvoice().then((result) => {
      result.forEach((element, index) => {
        this.data_tmp.push({
          key: index,
          tour_id: element.tour_id,
          date: element.date,
          tax_invoice_no: element.no,
          desc: element.desc,
          total: element.total,
        });
        this.data.push({
          key: index,
          tour_id: element.tour_id,
          date: element.date,
          tax_invoice_no: element.no,
          desc: element.desc,
          total: element.total,
        });
      });
    });
  },
  setup() {
    const state = reactive<{
      selectedRowKeys: Key[];
      loading: boolean;
    }>({
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    });
    const hasSelected = computed(() => state.selectedRowKeys.length > 0);

    const start = () => {
      state.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
      }, 1000);
    };
    const onSelectChange = (selectedRowKeys: Key[]) => {
      state.selectedRowKeys = selectedRowKeys;
    };

    return {
      columns,
      hasSelected,
      locale,
      state,
      ...toRefs(state),

      // func
      start,
      onSelectChange,
    };
  },
};
</script>

<style>
.date-picker {
  height: 4.7vmin;
  background-color: #f9fafb;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
