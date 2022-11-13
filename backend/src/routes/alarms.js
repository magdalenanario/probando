const KoaRouter = require('koa-router');

const router = new KoaRouter();

// index
router.get('/', async (ctx) => {
  const alarms = await ctx.orm.alarm.findAll();
  ctx.body = alarms;
  ctx.status = 200;
});



module.exports = router;
