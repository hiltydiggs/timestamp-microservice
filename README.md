#Timestamp Microservice

####About:

A practice project from the curriculum of freeCodeCamp. Uses Node.js and Express for routing and return. The source code for the entire project can be seen on GitHub here: https://github.com/hiltydiggs/timestamp-microservice

####Usage:

Accepts base URL + integer (up to 12 digits) or base URL + date string and returns a JSON object with Unix formatted time (seconds before or after January 1, 1970) and naturally read time ("September 1, 1999").

####Examples:

**URL:** http://timestamp-microservice.azurewebsites.net/3456789012

**Returns:** `{"unix":3456789012,"natural":"July 17, 2079"}`

**URL:** http://timestamp-microservice.azurewebsites.net/610606080

**Returns:** `{"unix":610606080,"natural":"May 8, 1989"}`

**URL:** http://timestamp-microservice.azurewebsites.net/trees

**Returns:** `{"unix":null,"natural":null}`
