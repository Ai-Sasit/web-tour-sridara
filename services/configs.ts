import { async } from "@firebase/util";
import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/sridara-tour/databases/(default)/documents/",
});

export const create_data = async (collection: string, data: any) => {
  const response = await api.post(collection, {
    fields: { add: { stringValue: "adding" } },
  });
  data.fields.id = { stringValue: response.data.name.split("/").at(-1) };
  const id = await api.patch(
    `${collection}/${response.data.name.split("/").at(-1)}`,
    data
  );
  return response.data.name.split("/").at(-1);
};

export const read_all_data = async (collection: string) => {
  const response = await api.get(collection);
  return response.data.documents;
};

export const read_one_data = async (collection: string, id: string) => {
  const response = await api.get(`${collection}/${id}`);
  return response.data;
};

export const read_one_data_conditions = async (
  collection: string,
  fields: string,
  values: string
) => {
  const response = await api.get(collection);
  const data = response.data.documents.filter(
    (doc: any) => doc.fields[fields].stringValue === values
  );
  return data;
};

export const update_data = async (
  collection: string,
  id: string,
  data: any
) => {
  const response = await api.patch(`${collection}/${id}`, data);
  return response.data;
};

export const delete_data = async (collection: string, id: string) => {
  const response = await api.delete(`${collection}/${id}`);
  return response.data;
};

export const read_all_data_conditions = async (
  collection: string,
  fields: string,
  values: string
) => {
  const response = await api.get(collection);
  const data = response.data.documents.filter(
    (doc: any) => doc.fields[fields].stringValue === values
  );
  return data;
};

export const delete_all_data_conditions = async (
  collection: string,
  fields: string,
  value: string
) => {
  const response = await api.get(collection);
  const data = response.data.documents.filter(
    (doc: any) => doc.fields[fields].stringValue === value
  );
  data.forEach((x: any) => {
    api.delete(`${collection}/${x.fields.id.stringValue}`).catch((err) => {
      console.log("no document");
    });
  });
};

export const ArabicNumberToText = (number: number | string): string => {
  var numbers: any = checkNumber(number);
  console.log(numbers);
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

export const ListTaxInvoice = async () => {
  const response = await api.get("quotation_detail");
  const documents = response.data.documents;

  const promises = documents.map(async (x: any) => {
    const res = await api.get("tax_invoice");
    return res.data.documents.map((y: any) => ({
      tour_id: x.fields.tour_id.stringValue,
      date: y.fields.tax_invoice_date.stringValue,
      no: y.fields.tax_invoice_no.stringValue,
      desc: `ลูกค้า-${x.fields.customer_name.stringValue} ที่อยู่-${x.fields.customer_address.stringValue}`,
      total: x.fields.grand_total.stringValue,
    }));
  });

  const results = await Promise.all(promises);
  return results.flat().filter(onlyUnique);
};

export function onlyUnique(v: any, i: any) {
  return i % 2 == 0;
}
