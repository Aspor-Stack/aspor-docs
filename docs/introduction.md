---
sidebar_position: 1
---

# Introduction

Aspor is a comprehensive web stack for building fast, modern and reliable web applications (SPA / PWA). The concept is based on 
a decoupled architecture with an independent OData interface running on an Asp .net service that is consumed by 
the React frontend application. Backend services are seperated with a Microservice architecture and connected together with Aspor streaming.

![Aspor Architecture](/images/aspor-architecturepng.png)

## Aspor service

Asp .Net is a wonderful technology for writing reliable web services in a clean and fast way. Microsoft delivers
already many libraries such as the Entity Framework and the OData library which bring additional benefits to your
project. On top of this solid foundation Aspor brings additional libraries which are often required to build a production
ready service.

## Aspor client

The Aspor client for react helps to structure global service classes and querying OData endpoints.
