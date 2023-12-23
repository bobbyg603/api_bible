/**
 * API.Bible
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class Passage {
    'id': string;
    'bibleId': string;
    'orgId': string;
    'content': string;
    'reference': string;
    'verseCount': number;
    'copyright': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "bibleId",
            "baseName": "bibleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "verseCount",
            "baseName": "verseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "copyright",
            "baseName": "copyright",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Passage.attributeTypeMap;
    }

    public constructor() {
    }
}
