select "countries"."name" as "country", count("cities"."name") as "numberOfCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name";
