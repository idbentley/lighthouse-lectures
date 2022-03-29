# AJAX

## Resources

 - code repo: https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w9d1-full-w4d3-ajax
 - video: https://vimeo.com/691102666/1dcb1ea853

## AJAX

    Asynchronous JavaScript and XML

```xml
<user>
  <name>idb</name>
  <password>1234</password>
</user>
```
```json
{
  "name": "idb",
  "password": "1234"
}
```
    Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
    Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
    The widespread use of AJAX was one of the factors that led to Web 2.0
    Originally retrieved data sent using XML, but modern applications use JSON instead

## XMLHttpRequest Object

    AJAX is implemented using the XMLHttpRequest (XHR) object
    Modern libraries (such as jQuery or axios) provide us with easy-to-use wrappers for the XHR object

## jQuery AJAX

jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log('this request succeeded and here\'s the data', data);
  },
  error: (error) => {
    console.log('this request failed and this was the error', error);
  }
});
```
## jQuery Shorthand Methods

jQuery has several shorthand methods so that we don't have to use the full .ajax method every time
```js
// make a get request to the specified endpoint
$.get('https://jsonplaceholder.typicode.com/posts');

// make a get request for JSON data
$.getJSON('https://jsonplaceholder.typicode.com/posts');

// make a post request
$.post('https://jsonplaceholder.typicode.com/posts', { /* form data */ });
```
## Useful Links

 - [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
 - [Wikipedia: AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
 - [MDN: XMLHttpRequest (XHR)](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
 - [jQuery AJAX, getJSON, and post methods](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)

