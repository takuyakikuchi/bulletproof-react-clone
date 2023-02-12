/**
 * A file to create a data modeling and relation for the mock API.
 * @see https://github.com/mswjs/data
 */

import { factory, primaryKey } from '@mswjs/data';
import { storage } from '@/utils/storage';

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    // teamId: String,
    // bio: String,
    createdAt: Number,
  },
}

// Creating a database instance
export const db = factory(models);
type Model = keyof typeof models;

/**
 * Load the database from local storage, or return an empty object if it's not there.
 * @returns {Object} The database object
 */
const loadDb = () => {
  return Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));
};

/**
 * A function to save the database to local storage.
 */
export const persistDb = (model: Model) => {
  const data = loadDb();

  data[model] = db[model].getAll();
  storage.setDb(data);
} 

const initializeDb = () => {
  const database = loadDb();

  Object.entries(db).forEach(([key, model]) => {
    const dataEntries = database[key];

    if (dataEntries) {
      dataEntries.forEach((entry: Record<string, undefined>) => {
        // Create an entity for the model.(e.g. user, team, etc)
        model.create(entry);
      })
    }  
  });
}

initializeDb();
