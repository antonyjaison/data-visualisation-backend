import { faker } from "@faker-js/faker";
import { data } from "../data/supermarket_sales.js";

const ProductLine = [
  "Fashion accessories",
  "Home and lifestyle",
  "Electronic accessories",
  "Food and beverages",
  "Health and beauty",
  "Sports and travel",
];
const PaymentMethod = ["Cash", "Credit card", "Ewallet"];

const dataMaker = async (req, res) => {
  var Invoice_id = faker.datatype.uuid();
  var Branch = faker.helpers.arrayElement(["A", "B", "c"]);
  var city = faker.helpers.arrayElement(["Naypyitaw", "Mandalay", "Yangon"]);
  var customer_type = faker.helpers.arrayElement(["Member", "Normal"]);
  var Gender = faker.helpers.arrayElement(["Female", "Male"]);
  var Product_line = faker.helpers.arrayElement(ProductLine);
  var Unit_price = faker.datatype.float({
    min: 2.29,
    max: 100.0,
    precision: 0.01,
  }).toString()
  var Quantity = faker.datatype.float({
    min: 1,
    max: 10,
    precision: 1,
  }).toString()
  var cogs = (Unit_price * Quantity).toFixed(2);
  var Tax = ((cogs * 20) / 100).toFixed(2);
  var income = Tax;
  var Payment = faker.helpers.arrayElement(PaymentMethod);
  var gross_margin_percent = "4.761904762";
  var rating = faker.datatype.float({
    min: 0,
    max: 10,
    precision: 0.1,
  }).toString()
  var Date = "02/18/2021";
  var time = "01:28:00 PM";
  var Total = cogs + Tax;

  var a = [];

  var newData = {
    Invoice_id,
    Branch,
    city,
    customer_type,
    Gender,
    Product_line,
    Unit_price,
    Quantity,
    cogs,
    Tax,
    income,
    Payment,
    gross_margin_percent,
    rating,
    Date,
    time,
    Total,
  };
    data.push(newData);
//   a.push(newData)

  res.status(200).json(data);
};

export { dataMaker };
