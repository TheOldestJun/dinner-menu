import Dexie from 'dexie';

export const db = new Dexie('dinnerDB');
db.version(2).stores({
  meals_soup: 'id, &value, &label',
  meals_garnish: 'id, &value, &label',
  meals_meat: 'id, &value, &label',
  meals_salad: 'id, &value, &label',
  meals_bakery: 'id, &value, &label',
  meals_drink: 'id, &value, &label',
  menu: 'id, monday, tuesday, wednesday, thursday, friday, dateFirst, dateLast',
  work_days: '++id, state'
});

db.work_days.count().then(count => {
  if (count === 0) {
    db.work_days.bulkAdd([
      { id: 1, state: false }, 
      { id: 2, state: false }, 
      { id: 3, state: false }, 
      { id: 4, state: false }, 
      { id: 5, state: false }, 
      { id: 6, state: false }, 
      { id: 7, state: false }
    ]);
  }
});

export default db;