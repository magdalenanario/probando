const mqtt = require('mqtt')
const host = 'planetaryevents.iic2173.net' 
const port = '9000' 
const clientId = `mqtt_ ${ Math .random().toString( 16 ).slice( 3 )} `
const connectUrl = `mqtt://${host}:${port}`
require('dotenv').config()

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'common',
  password: 'iic2173',
  reconnectPeriod: 1000,
})
const topic = 'global-emergencies'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
})

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, JSON.parse(payload))
    var message = JSON.parse(payload)
    insert_message(message);
  })
const { Pool} = require('pg')

const DATABASE_USER = process.env.DB_USERNAME || 'e0'
const DATABASE_PASSWORD = process.env.DB_PASSWORD || 'e0'

const pool = new Pool({
    user: DATABASE_USER,
    host: 'db',
    database: 'e0',
    password: DATABASE_PASSWORD,
    port: 5432,
  })

async function insert_message(message){
  console.log(DATABASE_USER)
  console.log(message.message)
  console.log(pool)
  await pool.query('INSERT INTO alarms(type, lat, lon, location, message, level) VALUES($1, $2, $3, $4, $5, $6);',[message.type,message.lat,message.lon,message.location,message.message,message.level],(err, res) => {
    console.log(err, res)})}



