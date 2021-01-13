select "actors"."firstName" as "firstName", "actors"."lastName" as "lastName", "categories"."name" as "category", count("filmCategory".*) as "numberOfFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "category";
