#Timestamp Microservice

####About:

A practice project from the curriculum of [freeCodeCamp](http://freecodecamp.com). Uses Node.js and Express for routing and return. The source code for the entire project can be seen on GitHub here: https://github.com/hiltydiggs/timestamp-microservice

####Usage:

Accepts base URL + integer or base URL + date string and returns a JSON object with Unix formatted time (seconds before or after January 1, 1970) and naturally read time ("September 1, 1999").

####Examples:

**URL:** http://timestamp-microservice.azurewebsites.net/january%209,%202010

**Returns:** `{"unix":1262995200000,"natural":"January 9, 2010"}`
---
**URL:** http://timestamp-microservice.azurewebsites.net/610606080

**Returns:** `{"unix":610606080,"natural":"May 8, 1989"}`
---
**URL:** http://timestamp-microservice.azurewebsites.net/trees

**Returns:** `{"unix":null,"natural":null}`
