const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const users = require('./users');

const router = new KoaRouter();

router.use('/users', users.routes());
router.use('/alarms', alarms.routes());

router.get('/', async (ctx) => {
  const alarms = await ctx.orm.alarm.findAll();
  ctx.body = alarms;
  ctx.status = 200;
});

module.exports = router;
