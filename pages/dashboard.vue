<template>
  <v-container>
    <v-row
      ><v-col
        ><a-select v-model:value="value1" style="width: 100%">
          <a-select-option value="วัน">วัน</a-select-option>
          <a-select-option value="เดือน">เดือน</a-select-option>
          <a-select-option value="ปี">ปี</a-select-option>
        </a-select></v-col
      ><v-col v-if="value1 === 'วัน'"
        ><a-date-picker
          v-model:value="value2"
          style="width: 100%"
          :locale="locale"
          format="DD/MM/BBBB" /></v-col
      ><v-col v-else-if="value1 === 'เดือน'"
        ><a-date-picker
          v-model:value="value2"
          style="width: 100%"
          picker="month"
          :locale="locale"
          format="MM/BBBB" /></v-col
      ><v-col v-else-if="value1 === 'ปี'"
        ><a-date-picker
          v-model:value="value2"
          style="width: 100%"
          picker="year"
          :locale="locale"
          format="BBBB" /></v-col
      ><v-col
        ><a-input
          style="text-align: center; border: 1px solid teal"
          placeholder="ราคาทั้งหมด"
          :value="`฿ ${calculateTotalPrice()}`" /></v-col
      ><v-col
        ><a-button type="primary" style="width: 100%">กรอง</a-button></v-col
      ><v-col
        ><a-button type="danger" style="width: 100%" @click="data_ls = data_ls2"
          >Reset</a-button
        ></v-col
      ></v-row
    >
    <br />
    <div class="relative overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs" style="background-color: #1e88e5; color: white">
          <tr>
            <th scope="col" class="px-6 py-3">ลำดับ</th>
            <th scope="col" class="px-6 py-3">{{ value1 }}</th>
            <th scope="col" class="px-6 py-3">รายการ</th>
            <th scope="col" class="px-6 py-3">รายรับ</th>
            <th scope="col" class="px-6 py-3">รายจ่าย</th>
            <th scope="col" class="px-6 py-3">หมายเหตุ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="table-row-hover"
            v-for="(item, index) in data_ls"
            :key="index">
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ item.date }}</td>
            <td class="px-6 py-4">
              {{
                item.objective ? item.objective : get_tour_name(item.tour_id)
              }}
            </td>
            <td class="px-6 py-4">
              <a-tag color="green">{{ item.total_net_price }}</a-tag>
            </td>
            <td class="px-6 py-4">
              <a-tag color="red">
                {{ !item.total_net_price ? item.total_price : "" }}</a-tag
              >
            </td>
            <td class="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>
</template>
<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import { read_all_data } from "~~/services/pyapi";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
export default defineComponent({
  setup() {
    return {
      locale,
    };
  },
  data() {
    return {
      value1: "วัน",
      value2: "",
      data_ls: [] as any,
      data_ls2: [] as any,
      tours: [] as any,
    };
  },
  watch: {
    value2() {
      if (this.value1 == "วัน") {
        this.data_ls = this.data_ls2.filter(
          (x: any) =>
            x.date.split("/")[0] ==
            dayjs(this.value2).format("DD/MM/BBBB").split("/")[0]
        );
      } else if (this.value1 == "เดือน") {
        this.data_ls = this.data_ls2.filter(
          (x: any) =>
            x.date.split("/").slice(1, 2) ==
            dayjs(this.value2).format("DD/MM/BBBB").split("/").slice(1, 2)
        );
      } else if (this.value1 == "ปี") {
        this.data_ls = this.data_ls2.filter(
          (x: any) =>
            x.date.split("/")[2] ==
            dayjs(this.value2).format("DD/MM/BBBB").split("/")[2]
        );
      }
    },
  },
  async mounted() {
    const d1 = await read_all_data("estimates");
    const d2 = await read_all_data("quotations");
    this.tours = await read_all_data("tours");
    this.data_ls = d1.concat(d2);
    this.data_ls2 = d1.concat(d2);
  },
  methods: {
    get_tour_name(id: any) {
      const tour: any = this.tours.find((x: any) => x.id === id);
      return tour ? tour.name : "";
    },
    sumTotalPrice() {
      let sum = 0;
      this.data_ls.forEach((x: any) => {
        if (x.total_price && !x.total_net_price) {
          sum += x.total_price;
        }
      });
      return sum;
    },
    sumTotalNetPrice() {
      let sum = 0;
      this.data_ls.forEach((x: any) => {
        if (x.total_net_price) {
          sum += x.total_net_price;
        }
      });
      return sum;
    },
    calculateTotalPrice() {
      return (this.sumTotalNetPrice() - this.sumTotalPrice()).toLocaleString(
        "th-TH",
        {
          minimumFractionDigits: 2,
        }
      );
    },
  },
});
</script>
