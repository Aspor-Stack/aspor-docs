---
sidebar_position: 1
---

# Getting started

* [Installation](#installation)
* [Configuration](#configuration)

:::info
**In this short getting-started guide, we expect you are already running an Asp .Net OData service (version 8).
If you have no experience with OData or want to start from scratch, use [this guide](https://google.com).**
:::

## Installation

Aspor can directly be installed into your Asp .Net project with the NuGet packet manager.
We always recommend installing the four base packages `Aspor.Common`, `Aspor.Validation`,
`Aspor.Authorization`, `Aspor.EF` to get the best experience.

```
Install-Package Aspor.Common Aspor.Validation Aspor.Authorization Aspor.EF Aspor.Export
```

## Configuration

```csharp
services.AddAsporValidation();
```



```csharp
services.AddControllers()
             .AddAutoPreValidationCheck()
             .AddAsporODataPageSize()
             .AddAsporReturnPreference()
             .AddAsporETagAutoMatch()
             .AddAsporExport()
```


* Common
    * Model helpers
    * Return Preferences
    * ETag
    * OData Page Sizing
* Validation
    * Types
    * Pre Validation
    * Rule Validation
* EF
    * Timestamps and executes
    * Controller
* Authorization
    * users
    * permissions
* Export
    

