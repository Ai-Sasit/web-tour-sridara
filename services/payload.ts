import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const genRanDec = (size: number) => {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 10).toString(10))
    .join("");
};

export const group_members = (
  tour_id: string,
  thai_name: string,
  eng_name: string,
  national_id: string,
  bed_type: string,
  passport_id: string,
  date_income: Date,
  date_outcome: Date,
  dob: Date,
  nationality: string,
  gender: string,
  address: string,
  check_stamp_number: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      thai_name: {
        stringValue: thai_name,
      },
      eng_name: {
        stringValue: eng_name,
      },
      national_id: {
        stringValue: national_id,
      },
      bed_type: {
        stringValue: bed_type,
      },
      passport_id: {
        stringValue: passport_id,
      },
      date_income: {
        stringValue: dayjs(date_income).format("DD/MM/BBBB"),
      },
      date_outcome: {
        stringValue: dayjs(date_outcome).format("DD/MM/BBBB"),
      },
      dob: {
        stringValue: dayjs(dob).format("DD/MM/BBBB"),
      },
      nationality: {
        stringValue: nationality,
      },
      gender: {
        stringValue: gender,
      },
      address: {
        stringValue: address,
      },
      check_stamp_number: {
        stringValue: check_stamp_number,
      },
    },
  };
};

export const group_tours = (
  trip_name: string,
  program_tour: string,
  go_date: Date,
  back_date: Date,
  day: number,
  night: number,
  vehicle_income: string,
  vehicle_outcome: string,
  guide_name: Array<string>,
  guide_tel: Array<string>,
  amount_member: number,
  tour_price_unit: string,
  tour_discount: number,
  tour_tax: string
) => {
  return {
    fields: {
      trip_name: {
        stringValue: trip_name,
      },
      program_tour: {
        stringValue: program_tour,
      },
      go_date: {
        stringValue: dayjs(go_date).format("DD/MM/BBBB"),
      },
      back_date: {
        stringValue: dayjs(back_date).format("DD/MM/BBBB"),
      },
      day: {
        stringValue: String(day),
      },
      night: {
        stringValue: String(night),
      },
      vehicle_income: {
        stringValue: vehicle_income,
      },
      vehicle_outcome: {
        stringValue: vehicle_outcome,
      },
      guide_name: {
        stringValue: guide_name.join(", "),
      },
      guide_tel: {
        stringValue: guide_tel.join(", "),
      },
      amount_member: {
        stringValue: String(amount_member),
      },
    },
  };
};

export const hotel_tour = (
  tour_id: string,
  name: string,
  amount_room: number,
  check_in: Date,
  check_out: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      name: {
        stringValue: name,
      },
      amount_room: {
        stringValue: String(amount_room),
      },
      check_in: {
        stringValue: dayjs(check_in).format("DD/MM/BBBB"),
      },
      check_out: {
        stringValue: dayjs(check_out).format("DD/MM/BBBB"),
      },
    },
  };
};

export const quotation_detail_with_product = (
  tour_id: string,
  quotation_id: string,
  quotation_date: Date,
  tax_id: string,
  customer_name: string,
  customer_address: string,
  customer_code: string,
  contact_name: string,
  contact_tel: string,
  contact_email: string,
  seller_name: string,
  seller_department: string,
  confirm_price_within: Date,
  delivery_date: Date,
  product: Array<any>,
  earnest_money: number,
  price_validity_period: string,
  sub_total: number,
  less_cash_discount: number,
  product_value: number,
  vat: number,
  grand_total: number
) => {
  const arrayValue = product.map((item) => {
    return {
      mapValue: {
        fields: {
          product_code: {
            stringValue: item.product_code,
          },
          product_name: {
            stringValue: item.product_name,
          },
          product_amount: {
            stringValue: String(item.product_amount),
          },
          product_price_per_unit: {
            stringValue: String(item.product_price_per_unit),
          },
          product_discount: {
            stringValue: String(item.product_discount),
          },
          product_tax: {
            stringValue: String(item.product_tax),
          },
          product_total: {
            stringValue: String(item.product_total),
          },
        },
      },
    };
  });
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      quotation_id: {
        stringValue: quotation_id,
      },
      quotation_date: {
        stringValue: dayjs(quotation_date).format("DD/MM/BBBB"),
      },
      tax_id: {
        stringValue: tax_id,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      customer_code: {
        stringValue: customer_code,
      },
      contact_name: {
        stringValue: contact_name,
      },
      contact_tel: {
        stringValue: contact_tel,
      },
      contact_email: {
        stringValue: contact_email,
      },
      seller_name: {
        stringValue: seller_name,
      },
      seller_department: {
        stringValue: seller_department,
      },
      confirm_price_within: {
        stringValue: dayjs(confirm_price_within).format("DD/MM/BBBB"),
      },
      delivery_date: {
        stringValue: dayjs(delivery_date).format("DD/MM/BBBB"),
      },
      product: {
        arrayValue: {
          values: arrayValue,
        },
      },
      earnest_money: {
        stringValue: String(earnest_money),
      },
      price_validity_period: {
        stringValue: String(price_validity_period),
      },
      sub_total: {
        stringValue: String(sub_total),
      },
      less_cash_discount: {
        stringValue: String(less_cash_discount),
      },
      product_value: {
        stringValue: String(product_value),
      },
      vat: {
        stringValue: String(vat),
      },
      grand_total: {
        stringValue: String(grand_total),
      },
    },
  };
};

export const billing_note_detail = (
  tour_id: string,
  billing_note_no: string,
  billing_note_date: Date,
  billing_note_fax: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      billing_note_no: {
        stringValue: billing_note_no,
      },
      billing_note_date: {
        stringValue: dayjs(billing_note_date).format("DD/MM/BBBB"),
      },
      billing_note_fax: {
        stringValue: billing_note_fax,
      },
    },
  };
};

export const tax_invoice_detail = (
  tour_id: string,
  tax_invoice_no: string,
  tax_invoice_date: Date,
  tax_invoice_pay_date: Date,
  tax_invoice_branch: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      tax_invoice_no: {
        stringValue: tax_invoice_no,
      },
      tax_invoice_date: {
        stringValue: dayjs(tax_invoice_date).format("DD/MM/BBBB"),
      },
      tax_invoice_pay_date: {
        stringValue: dayjs(tax_invoice_pay_date).format("DD/MM/BBBB"),
      },
      tax_invoice_branch: {
        stringValue: tax_invoice_branch,
      },
    },
  };
};
