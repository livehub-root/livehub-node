/*
 * @Description: Response interface
 * @Author: lmaster
 * @Date: 2019-10-08 10:45:04
 */
/**
 * getResponseJson
 */
export interface getResponseJson {
    code: number;
    msg: string;
    data?: [];
    fields?: string[];
}
/**
 * postResponseJson
 */
export interface postResponseJson {
    code: number;
    msg: string;
    data?: [];
}
