<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5" style="margin-top: 1rem">
    <!-- <v-card color="teal-darken-4">
      <v-card-text>
        กำลังโหลดข้อมูล กรุณารอ...
        <v-progress-circular
          style="margin-left: 1rem; margin-bottom: 0.3rem"
          indeterminate
          color="white"></v-progress-circular>
      </v-card-text>
    </v-card> -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left dark:text-gray-400" style="background-color: #e8f5e9">
        <tr>
          <td colspan="6" class="pb-1 pt-2 px-3">
            <h3>
              ชื่อลูกค้า :
            </h3>
          </td>
          <td colspan="3" class="pb-1 pt-2 px-3">
            เลขที่ :
          </td>

        </tr>
        <tr>
          <td colspan="6" class="py-1 pt-2 px-3">
            <h3>
              ที่อยู่ :
            </h3>
          </td>
          <td colspan="3" class="py-1 px-3">
            วันที่ :

          </td>
        </tr>

        <tr>
          <td colspan="6" class="py-1 pt-2 px-3">

          </td>
          <td colspan="3" class="py-1 px-3">
            กำหนดการชำระ :

          </td>

        </tr>

        <tr>
          <td colspan="6" class="py-1 px-3">
            <h3>เลขประจำตัวผู้เสียภาษี : </h3>
          </td>
          <td colspan="3" class="py-1 px-3">
            ผู้ขาย :
          </td>

        </tr>

        <tr>
          <td colspan="5" class="py-1 px-3">
            <h3>
              <div class="flex items-center mr-4">
                <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                  class="w-4 h-4 text-blue-600 bg-blue border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="inline-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">สำนักงานใหญ่</label>
              </div>


            </h3>
          </td>
          <td>
            <div class="flex items-center mr-4">
              <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-blue border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">สาขาที่
                :</label>
            </div>
          </td>
          <td colspan="3" class="py-1 px-3">

            รหัสลูกค้า :


          </td>
        </tr>

      </table>
      <table class="w-full text-sm text-left dark:text-gray-400" style="max-height: 400px">
        <thead class="text-xs uppercase bg-gray-50 dark:text-gray-400" style="background-color: #81c784">
          <tr>
            <th scope="col" class="px-6 py-3">ลำดับ
              <br> No.
            </th>
            <th scope="col" class="px-6 py-3">รหัสสินค้า
              <br> Code.
            </th>
            <th scope="col" class="px-6 py-3">รายการสินค้า
              <br> Description
            </th>
            <th scope="col" class="px-6 py-3">จำนวน
              <br> Quantity
            </th>
            <th scope="col" class="px-6 py-3">ราคาต่อหน่วย
              <br> Price/Unit
            </th>
            <th scope="col" class="px-6 py-3">ส่วนลด
              <br> Discount
            </th>
            <th scope="col" class="px-6 py-3">ภาษี
              <br>Tax
            </th>
            <th scope="col" class="px-6 py-3">จำนวนเงิน
              <br> Amount
            </th>

          </tr>
        </thead>
        <tbody v-if="!members_ls.length">
          <tr>
            <td class="px-6 py-4" colspan="12" style="text-align: center">
              ไม่มีข้อมูล
            </td>
          </tr>
        </tbody>
        <tbody v-if="members_ls.length">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4" style="font-size: 13px">{{ index + 1 }}</td>
            <td class="px-6 py-4" style="font-size: 13px">

            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
            <td class="px-6 py-4" style="font-size: 13px">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <v-row justify="end">
    <v-col cols="2" style="text-align: end"><v-btn style="margin-right: -10.3rem" variant="tonal" color="red-accent-4"
        @click="handleDelete">ลบทัวร์</v-btn>
    </v-col>
    <v-col cols="2" style="text-align: end"><v-btn style="margin-right: -5.2rem" variant="tonal"
        @click="$router.push(`/addusertour/${$route.params.tourdataid}`)"
        color="lime-darken-4">แก้ไขข้อมูลลูกทัวร์</v-btn>
    </v-col>
    <v-col cols="2" style="text-align: end" @click="$router.push(`/edittour/${$route.params.tourdataid}`)">
      <v-btn style="margin-right: 1.2rem" variant="tonal" color="cyan-darken-4">แก้ไขข้อมูลทัวร์</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {
  read_all_data,
  read_one_data,
  delete_data,
  delete_all_data_conditions,
} from "~~/services/configs";
export default {
  mounted() {
    // read_one_data("group_tour", this.$route.params.tourdataid).then(
    //   (result) => {
    //     this.tour_data = result;
    //     this.loading = false;
    //   }
    // );
    // read_all_data("hotel_tour").then((result) => {
    //   const filter = result.filter(
    //     (v) =>
    //       v.fields.tour_id.stringValue == String(this.$route.params.tourdataid)
    //   );
    //   this.hotels_ls = filter;
    // });
    // read_all_data("member_tour").then((result) => {
    //   const filter = result.filter(
    //     (v) =>
    //       v.fields.tour_id.stringValue == String(this.$route.params.tourdataid)
    //   );
    //   this.members_ls = filter;
    // });
  },
  methods: {
    // handleDelete() {
    //   delete_all_data_conditions(
    //     "member_tour",
    //     "tour_id",
    //     this.$route.params.tourdataid
    //   );
    //   delete_all_data_conditions(
    //     "hotel_tour",
    //     "tour_id",
    //     this.$route.params.tourdataid
    //   );
    //   delete_data("group_tour", this.$route.params.tourdataid).then(() => {
    //     this.$router.push("/");
    //   });
    // },
  },
  data() {
    return {
      surname_thai: "",
      loading: true,
      members_ls: [],
      hotels_ls: [],
    };
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
