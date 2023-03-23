import axios from "axios";

// const url =
//   "http://2f40-2403-6200-8830-bc90-31a5-c5bd-c542-2c21.ap.ngrok.io/api/";
const url = "https://back-end-tour.vercel.app/api/";

const api = axios.create({
  baseURL: url,
});

export const create_data = async (collection: string, data: any) => {
  const response = await api.post(collection, data);
  return response.data;
};

export const read_all_data = async (collection: string) => {
  const response = await api.get(collection);
  return response.data;
};

export const read_one_data = async (collection: string, id: string) => {
  const response = await api.get(`${collection}/${id}`);
  return response.data;
};

export const delete_data = async (collection: string, id?: string) => {
  const response = await api.delete(`${collection}/${id}`);
  return response.data;
};

export const update_data = async (
  collection: string,
  id: string,
  data: any
) => {
  const response = await api.put(`${collection}/${id}`, data);
  return response.data;
};

export const ListTaxInvoice = async () => {
  const response = await api.get("quotations");
  const documents = response.data;

  const promises = documents.map(async (x: any) => {
    const res = await api.get("taxes");
    return res.data.map((y: any) => ({
      tour_id: x.tour_id,
      date: y.date,
      no: y.no,
      desc: `ลูกค้า-${x.customer_name} ที่อยู่-${x.address}`,
      total: x.total_net_price,
    }));
  });

  const results = await Promise.all(promises);
  return results.flat().filter(onlyUnique);
};

export function onlyUnique(v: any, i: any) {
  return i % 2 == 0;
}

export const genRanDec = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 10).toString(10))
    .join("");

export const ArabicNumberToText = (number: number | string): string => {
  var numbers: any = checkNumber(number);
  const numberArray = [
    "ศูนย์",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า",
    "สิบ",
  ];
  const digitArray = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
  let bahtText = "";
  if (isNaN(numbers as number)) {
    return "ข้อมูลนำเข้าไม่ถูกต้อง";
  }
  if ((numbers as number) > 9999999.9999) {
    return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
  }
  numbers = Number(number).toFixed(2).split(".");
  if (numbers[1].length > 0) {
    numbers[1] = numbers[1].substring(0, 2);
  }
  const wholeNumber = getWholeNumber(numbers[0], numberArray, digitArray);
  const decimal = getDecimal(numbers[1], numberArray, digitArray);
  bahtText = `${wholeNumber}บาท${decimal}`;
  return bahtText;
};

const checkNumber = (number: number | string): number => {
  if (typeof number === "string") {
    return parseFloat(number);
  }
  return number;
};

const getWholeNumber = (
  number: string,
  numberArray: string[],
  digitArray: string[]
): string => {
  let bahtText = "";
  const numberLen = number.length - 0;
  for (let i = 0; i < numberLen; i++) {
    const tmp = Number(number.substring(i, i + 1)) - 0;
    if (tmp !== 0) {
      if (i === numberLen - 1 && tmp === 1) {
        bahtText += "เอ็ด";
      } else if (i === numberLen - 2 && tmp === 2) {
        bahtText += "ยี่";
      } else if (i === numberLen - 2 && tmp === 1) {
        bahtText += "";
      } else {
        bahtText += numberArray[tmp];
      }
      bahtText += digitArray[numberLen - i - 1];
    }
  }
  return bahtText;
};

const getDecimal = (
  number: string,
  numberArray: string[],
  digitArray: string[]
): string => {
  if (number === "0" || number === "00") {
    return "ถ้วน";
  }
  let bahtText = "";
  const decimalLen = number.length - 0;
  for (let i = 0; i < decimalLen; i++) {
    const tmp = Number(number.substring(i, i + 1)) - 0;
    if (tmp !== 0) {
      if (i === decimalLen - 1 && tmp === 1) {
        bahtText += "เอ็ด";
      } else if (i === decimalLen - 2 && tmp === 2) {
        bahtText += "ยี่";
      } else if (i === decimalLen - 2 && tmp === 1) {
        bahtText += "";
      } else {
        bahtText += numberArray[tmp];
      }
      bahtText += digitArray[decimalLen - i - 1];
    }
  }
  bahtText += "สตางค์";
  return bahtText;
};
