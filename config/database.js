import mysql from 'mysql';
import myconn from 'express-myconnection';
import { dbOptions } from '../config/config.js';

export default myconn(mysql, dbOptions, 'single');