const axios = require('axios')
const knex = require("../config/db")



async function insert_data() {

    let db_data = await knex.select('*').from('meraki_crud')
    console.log(db_data.length);
    if (db_data == 0) {
        let meraki_data = await axios.get('https://api.merakilearn.org/courses')
        for(let obj of meraki_data.data){
            obj['lang_available'] = obj['lang_available'].join(", ")
            await knex("meraki_crud").insert(obj)
            
        }
        console.log('data inserted successfully.....');
    }

}



module.exports = insert_data
