/*
 * @Description: Response interface
 * @Author: lmaster
 * @Date: 2019-10-08 10:45:04
 */

interface getResponseJson {
    code: number;
    msg: string;
    data?: [];
    fields?: string[];
}

interface postResponseJson {
    code: number;
    msg: string;
    data?: [];
}
