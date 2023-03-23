<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"
    style="margin-top: 1rem">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
          style="background-color: #81c784">
          <tr>
            <th scope="col" class="px-6 py-3">ผมรักลุงตู่</th>
            <th scope="col" class="px-6 py-3">คิดถึงคนบนฟ้า</th>
            <th scope="col" class="px-6 py-3">ไม่ใช่สลิ่มแค่เป็นคนรักชาติ</th>
            <th scope="col" class="px-6 py-3">วันที่จบจะไม่มีอีกต่อไป</th>
            <th scope="col" class="px-6 py-3">วันที่อากาศสดใสไร้เมฆหมอก</th>
            <th scope="col" class="px-6 py-3">คืนที่ดาวเต็มฟ้า</th>
            <th scope="col" class="px-6 py-3">วันนนนนนนนน</th>
            <th scope="col" class="px-6 py-3">คืนนนนนนนนน</th>
            <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขาไป</th>
            <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขาไปขามา</th>
            <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขากลับ</th>

            <th scope="col" class="px-6 py-3">จำนวนลูกทัวร์</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!tour_ls.length">
            <td class="px-6 py-4" colspan="12" style="text-align: center">
              ไม่มีข้อมูล
            </td>
          </tr>
          <tr
            class="table-row-hover"
            v-for="(item, index) in tour_ls"
            :key="index"
            @click="detail_tour(item.id)">
            <td class="px-6 py-4">
              {{ item.name }}
            </td>
            <td class="px-6 py-4">
              {{ item.program_name }}
            </td>
            <td class="px-6 py-4">
              {{ item.date_go }}
            </td>
            <td class="px-6 py-4">
              {{ item.date_back }}
            </td>
            <td class="px-6 py-4">
              {{ item.amount_of_days }}
            </td>
            <td class="px-6 py-4">
              {{ item.amount_of_nights }}
            </td>
            <td class="px-6 py-4">
              {{ item.vehicle_in }}
            </td>
            <td class="px-6 py-4">
              {{ item.vehicle_out }}
            </td>
            <td class="px-6 py-4">{{ member_ls[index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { read_all_data } from "~~/services/pyapi";
const key = "updatable";
export default {
  mounted() {
    this.$message.loading({ content: "กำลังโหลดข้อมูล รายการทัวร์...", key });
    read_all_data("tours").then((res) => {
      res.forEach((element) => {
        read_all_data(`member_amount?tour_id=${element.id}`).then((res) => {
          this.member_ls.push(res);
        });
      });
      this.tour_ls = res;
      this.$message.success({ content: "โหลดข้อมูลสำเร็จ", key });
    });
  },
  data() {
    return {
      tour_ls: [],
      member_ls: [],
    };
  },
  methods: {
    detail_tour(id) {
      this.$router.push({ path: `/tourdata/${id}` });
    },
  },
};
</script>

<style scoped>
.table-row-hover {
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  transition: 0.2s;
}

.table-row-hover:hover {
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
}
</style>
