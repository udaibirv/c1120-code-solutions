select "firstName" as "first", "lastName" as "last", sum("payments"."amount") as "amount"
  from "customers"
  join "payments" using ("customerId")
  join "rentals" using ("customerId")
  group by "customers"."firstName", "customers"."lastName", "amount"
  order by "amount" desc;
