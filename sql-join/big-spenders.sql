select "firstName","lastName", "payments"."amount" as "amount"
  from "customers"
  join "payments" using ("customerId")
  order by "amount" desc
  limit 10;
