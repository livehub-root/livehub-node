import { Request, Response } from "express";
import { taosCursor } from "../taos";

var JSONbig = require('json-bigint')
// use livehub
try {
    taosCursor.execute('use livehub;');
}
catch (err) {
    throw err;
}
/**
 * GET /
 */
export const get = (req: Request, res: Response) => {
    let json: getResponseJson = {
        code: -1,
        msg: 'something wrong'
    }
    try {
        let query = req.query
        // select ts,oid,height,did from height limit 1000;
        let sql = ''
        if (!isEmpty(query)) {
            sql += 'select ts,oid,height,did from height'
            let limit = ' limit 1000;'
            let where = ' where'
            if (query.stime) {
                where += ' ts > ' + query.stime + ' and'
            }
            if (query.etime) {
                where += ' ts <= ' + query.etime + ' and'
            }
            if (query.oid) {
                where += ' oid = ' + query.oid + ' and'
            }
            if (query.height) {
                where += ' height = ' + query.height + ' and'
            }
            if (query.did) {
                where += ' did = ' + query.did + ' and'
            }
            if (where != ' where') {
                where = where.substring(0, where.length - 4)
            } else {
                where = ''
            }
            if (query.limit) {
                limit = ' limit ' + query.limit + ';'
            }
            sql = sql + where + limit
        } else {
            sql = 'select ts,oid,height,did from height limit 1000;'
        }
        console.log(sql)

        taosCursor.execute(sql)
        json.code = 0
        json.msg = 'ok'
        json.data = taosCursor.fetchall();
        json.fields = ['ts', 'oid', 'height', 'did']
    }
    catch (err) {
        // throw err;
        console.log(err)
    }

    let body = JSON.stringify(json, stringifyReplacer)
    // content-type
    res.set('Content-Type', 'application/json');
    res.send(body);
};


/**
 * POST /
 */
export const post = (req: Request, res: Response) => {
    let json: postResponseJson = {
        code: -1,
        msg: 'something wrong'
    }
    let height = JSON.parse(req.body)
    let sql = 'INSERT INTO height' + height.did
    sql += ' USING height TAGS (' + height.did + ') VALUES'
    for (let item of height.data) {
        sql += ' (' + item.time + ', ' + item.oid + ', ' + item.height + '),'
    }
    sql = sql.substring(0, sql.length - 1) + ';'
    console.log(sql)
    let data
    try {
        // INSERT INTO height1 USING livehub.height TAGS (1) VALUES (0, 1, 1000)
        taosCursor.execute(sql)
        json.code = 0
        json.msg = 'ok'
    }
    catch (err) {
        // throw err;
        console.log(err)
    }

    res.json(json)
};
