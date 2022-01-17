# Networking with TCP and HTTP

## Objectives
- [X] asynchronous control flow review
- [X] what is networking? (quick overview)
- [X] TCP introduction

### OSI (Open Systems Interconnection) Layers in Networking

#### Interesting to know
- Physical layer (ethernet, usb, coax)
- Datalink layer (wifi)
- Network layer (IP)
  - IP Addresses - the address of computer
  - PORT - the location of the application running

#### Be aware of
- Transport layer (TCP, UDP)
- Session layer (*TCP)
- Presentation layer (SSL, TLS)
- Application layer (HTTP, SMTP, SSH)

for more info go to: https://www.cloudflare.com/en-ca/learning/ddos/glossary/open-systems-interconnection-model-osi/

### Intro

Being in the fourth layer*, these two protocols manage the transmission of our information.
*TCP can be attributed to the fourth and fifth layer, since it manages sessions too.

- Messages are broken down into packets
- Messages contained source and destination address in their header
- Each packet travels through the network independently
- Packets are reassembled into a full message when reaching destination



## Protocols on Top of TCP/IP

Languages that computers program use to communicate with one another (usually over a network)

| Protocol    | Description                                   |
| :---------- | :-------------------------------------------- |
| http        | Browse Web pages                              |
| https       | Browse Web page with encrypted communication  |
| smtp        | Send and receive emails                       |
| imap, pop 3 | Load emails from an inbox                     |
| irc         | Text based chat                               |
| ftp         | File transfers                                |
| ssh         | Secure socket shell with encrypted connection |
| ssl         | low-level secure data transfer used by https  |

- each of these protocols use a default port

| Protocol   | Default port |
| :--------- | :----------- |
| http       | 80           |
| https      | 443          |
| ssh        | 22           |
| postgreslq | 5432         |
| mongodb    | 27017        |




## Mechanics of a HTTP exchange

### What is HTTP ?

- HyperText Transfer Protocol
- How a web client (browser, etc) communicates with a web server
- The client initiates a request and the server sends back a response

### Request

The initial step of an HTTP exchange is the request. In the request, we want to make an action, decided by the method, to a specific path, the URL, with specific headers and an optional body content.

### Methods

GET - I want to GET information from the server ( GET THE MENU)
POST - I want to post something on the server
PUT/PATCH - I want to update something
DELETE - I want to delete something

### Path

URI - Uniform Resource Identifier (GET /menu)
URL - Uniform Resource Locator

More info : https://damnhandy.com/2011/01/18/url-vs-uri-vs-urn-the-confusion-continues/


### Request / Response Header

It's where information about the request like cookies and user agent are defined

```
GET /www.google.com/search?q=bootcamp HTTP/1.1
Host: www.google.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: USERID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
Cookies: key:value string
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
```

### Request / Response Body

Information we want to send, or the information that we receive from the request
```
Content-Type: application/json
--- Beginning of body ---
{
  "first_name": "Little",
  "last_name": "Chicken",
  "email": "pequeno@pollo.com",
}
```

```
status: 200
--- Beginning of body ---
<!DOCTYPE html>
<html>
  <head>
    <title>Canada&#39;s Leading Coding Bootcamp - Lighthouse Labs</title>
    <style>
  @font-face{
  	font-family: 'proxima-nova';
  	font-weight: normal;
  	font-style: normal;
...
```

### Response Status

- 100 series - Connecting
- 200 series - OK
- 300 series - Redirection
- 400 series - Something went wrong - You fudged up
- 500 series - Something went wrong - Server fudged up