import Dexie from 'dexie';

export const db = new Dexie('dinnerDB');
db.version(1).stores({
  meals_soup: 'id, &value, &label',
  meals_garnish: 'id, &value, &label',
  meals_meat: 'id, &value, &label',
  meals_salad: 'id, &value, &label',
  meals_bakery: 'id, &value, &label',
  meals_drink: 'id, &value, &label',
  menu: 'id, monday, tuesday, wednesday, thursday, friday, dateFirst, dateLast',
});

export default db;