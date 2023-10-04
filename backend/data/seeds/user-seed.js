/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate();
  await knex('users').insert([
    {user_first_name: 'jacob', user_last_name : "lang", user_email : "jacoblang72@comast.net", user_password : "jacob?", user_username : "jacoblang11"},
    {user_first_name: 'aliana', user_last_name : "lang", user_email : "alainaksmith3@icloud.com", user_password : "alaina?", user_username : "alainalang11"},
    {user_first_name: 'melon', user_last_name : "lang", user_email : "melon72@comast.next", user_password : "melon?", user_username : "melon11"}
  ]);
};
