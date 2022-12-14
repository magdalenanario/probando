require('dotenv').config();

const KoaRouter = require('koa-router');
const jwt = require('koa-jwt');

const users = require('./routes/users');
const alarms = require('./routes/alarms');
const sessions = require('./routes/session');
// const {isAuthenticated} = require('./middlewares/auth');

const router = new KoaRouter();

//Solo ocupo jwt para obtener la información del token, y no tener que hacer una 
//consulta a la base de datos para obtener la información del usuario
// router.use(jwt({ secret: process.env.JWT_SECRET, key: 'authData', passthrough:true }));
//ahora puedo acceder a ctx.state.authData y ver la info del usuario...¿Cómo manejo un
//cambio en la info del usuario?¿Qué información debería pasarle?
/*Unprotected routes*/
router.use('/session', sessions.routes());
/*Protected routes*/
router.use('/users', users.routes());
router.use('/alarms', alarms.routes());
// router.use(isAuthenticated);
// router.use('/logged', logged.routes());

module.exports = router;
