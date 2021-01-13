
select "actors"."firstName" as "first", "actors"."lastName" as "last", "categories"."name", count("filmCategory".*) as "numberOfFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
  group by "actors"."firstName", "actors"."lastName", "categories"."name";
