# .PassagesApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPassage**](PassagesApi.md#getPassage) | **GET** /v1/bibles/{bibleId}/passages/{passageId} | 


# **getPassage**
> GetPassage200Response getPassage()

Gets a `Passage` object for a given `bibleId` and `passageId`. This Passage object also includes an `content` property with all verses corresponding to the passageId. The `passageId` parameter can represent a chapter, verse, or range of verses. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PassagesApi(configuration);

let body:.PassagesApiGetPassageRequest = {
  // string | Id of Bible for passage
  bibleId: "bibleId_example",
  // string | String reference id for the requested passage.
  passageId: "passageId_example",
  // 'html' | 'json' | 'text' | Content type to be returned in the content property.  Supported values are `html` (default), `json` (beta), and `text` (beta) (optional)
  contentType: "html",
  // boolean | Include footnotes in content (optional)
  includeNotes: false,
  // boolean | Include section titles in content (optional)
  includeTitles: true,
  // boolean | Include chapter numbers in content (optional)
  includeChapterNumbers: false,
  // boolean | Include verse numbers in content. (optional)
  includeVerseNumbers: true,
  // boolean | Include spans that wrap verse numbers and verse text for bible content. (optional)
  includeVerseSpans: false,
  // string | Comma delimited list of bibleIds to include (optional)
  parallels: "parallels_example",
  // boolean | Use the supplied id(s) to match the verseOrgId instead of the verseId (optional)
  useOrgId: false,
};

apiInstance.getPassage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible for passage | defaults to undefined
 **passageId** | [**string**] | String reference id for the requested passage. | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta) | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | Include footnotes in content | (optional) defaults to false
 **includeTitles** | [**boolean**] | Include section titles in content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | Include chapter numbers in content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | Include verse numbers in content. | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | Include spans that wrap verse numbers and verse text for bible content. | (optional) defaults to false
 **parallels** | [**string**] | Comma delimited list of bibleIds to include | (optional) defaults to undefined
 **useOrgId** | [**boolean**] | Use the supplied id(s) to match the verseOrgId instead of the verseId | (optional) defaults to false


### Return type

**GetPassage200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Invalid ID supplied |  -  |
**401** | Unauthorized for API access.  Missing or Invalid API Token provided. |  -  |
**403** | Not authorized to retrieve Sections for this Bible |  -  |
**404** | Passage not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

