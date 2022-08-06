
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "Roshan@1",
      database: "meraki_sourses",
    },
  });



knex.schema.hasTable('meraki_crud').then(exists =>{
  if(!exists){
    return knex.schema.createTable('meraki_crud', table =>{
      table.increments('id');
      table.string('name');
      table.string('logo');
      table.string('notes');
      table.string('days_to_complete');
      table.string('short_description');
      table.string('type');
      table.string('course_type');
      table.string('lang_available');
    }).then(()=>{
      console.log('create table succefully...........');
    }).catch(error =>{
      console.log(error.massage);
    })
  }
})


module.exports = knex