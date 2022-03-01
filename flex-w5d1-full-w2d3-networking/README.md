# Networking with TCP and HTTP

## Resources
- Lecture Recording: https://vimeo.com/680604798/e07313bb38
- Code:  https://github.com/idbentley/lighthouse-lectures/tree/main/flex-w5d1-full-w2d3-networking
- Slides (in this repo)

## Objectives
- The layers of the internet
- TCP introduction
- Client/Server demo
- HTTP overview

### TCP/IP Layers in Networking

- Physical layer (cables, satelites)
- Datalink layer (ethernet, wifi)
- Network layer (IPv4, IPv6)
- Transport layer (TCP, UDP)
- Application layer (HTTP, SMTP, SSH)

further reading:
 - https://docs.oracle.com/cd/E19253-01/816-4554/ipov-10/index.html
 - https://en.wikipedia.org/wiki/Transmission_Control_Protocol 

### TCP - Transport Control Protocol - In the Transport Layer

- Messages are broken down into segments, that are packaged into packets, and transported through the network independently
- Ensures reliable, performant transportation of information

## HTTP - Hyper Text Transfer Protocol - In the Application Layer

### What is HTTP ?

- How client, server communication is done online
- The client initiates a request and the server responds

### Request

The initial step of an HTTP exchange is the request.

A request is made up of:
 - A method
 - A URL (domain and path) URL
 - [optional] headers
 - [optional] body

### Methods

GET - A request to READ information
POST - A request to WRITE information
PUT/PATCH - A request to WRITE information
DELETE - A request to DELETE information
OPTION - A request to READ information about a path

### URL

Uniform Resource Locator (URL) is a text string that specifies where a resource (such as a web page, image, or video) can be found on the Internet.

i.e. https://www.lighthouselabs.ca/

### Headers

Where information about the request like cookies and user agent are defined.  Used to specify options on the request.
