# Javascript Asynchronous Module Definition (AMD) Explained


1. Using Require.js to load modules onto a website
2. Using modules to alleviate the use of global namespace variables
3. Using modules in a decoupled manner
4. How to write modules from scratch.

Transitioning to Modular patterns help you to stay organized and keeps your code clean and maintainable.

# Chapters

1. Reviewing traditional web design
2. Module creation and refactoring
3. Data modules and 3rd-party libraries
4. RequireJS configuration
5. Project organization
6. RequireJS optimizer

--- 

# Module 1 -- Introduction

## Expecting Global Namespace

```javascript
(function() 
{if (typeof _KSM === 'undefined')
    _KSM = {defaultContext: 'body'}}) 
```

We need to get away from using global variables.

## Inspecting Bugs

Theses are the two most common errors when working with async:

    - _KSM namespace is not defined
    - _KSM.Language.load is not a function


## Coding Problems Arise

1. Interconnected Libraries - with large projects, libraries become interconnected and may pose loading-order problems.
2. New team members might not know the correct order to load files.
3. Libraries are constantly changing and may update
4. Code evolution or refactoring might cause dependencies to break

## Unit Testing

1. There are numerous options available to use to unit test. We will be using Jasmine.
2. Jasmine gets a CSS file, as well as 4 javascript files
3. Unit testing can give false results if libraries      are loaded in an unexpected order

## Global Namespace

- We don't want to use global variables, we want to use a different namespace as a container
- There could be existing references to the global namespace

### _***Coupling***_ - is just another word for dependency

-Dependencies loaded in proper order
-Common failing point in projects

- Later, we will be running Jasmine with RequireJS

## Summary

- We created a sample website
- We were reminded of the fragility of JS libraries
- Unit testing is important!

---

## Module 2 - Modular Code

### Overview

- Simple HTML page
- Footer module
    - *Visible result*
    - *Useful throughout the rest of the course*
- Refactoring into modules
    - *Language Library*
    - *Toolbar Library*


## Benefits of Modularization
 
**One benefit of using modules is that there is a separation of the javascript code from HTML**


    - There is no need for a $(document).ready() function or anything like that.
	- There is a callback function that is run after the dependencies have all been loaded
	- RequireJS also loads jQuery for you, only when it is needed
	

**Results:**
- Cleaner HTML
- Scripts only load as needed
- Reusable module

### Demo

- Back to original toolbar sample
- We will make a new HTML page
- We will create a startup template
- Refactor legacy code
    -  Language library
    -  Toolbar library
- Common issues

### Data-Main Attribute

- Generally used for startup code that loads other modules
- Entry point for client processing


### Using Typical Libraries

1. Some are self-executing, they run as soon as they are loaded
2. Some load data values
3. Some load event handlers

### Start Up Code

- Activity before start up code executes
- Load code only when/if needed
- Startup code resides in another file

***References to dependent modules loaded with 'require' only have scope within the callback function***

*jQuery creates a global AND a local variable. When dealing with legacy libraries such as jQuery, you may still end up with some global variables.*

### Variable Resoluton

`Line => Code block => Function block => File => Global`

### 2 Choices

- Refactor the legacy libraries to be modules
- Or you can configure Require.js to be able to load the legacy library

### Using jQuery with AMD

- jQuery supports AMD
- It has robust support
- Version 1.7 and above

--- 

### Changing Our Libraries

## _*Require* vs *Define*_

### Over Simplifying:

- 'define' is used to establish a module for future and current use, once defined, it is retained for future use. The module is registered internally
- 'require' is used for single use needs.

### Local References

- Since local references go out of scope once the function completes, you don't have to worry about conflicts with global values
- This allows us to isolate new code for easy testing
- No conflicts with:
    - Global code
    - Other modules
    - Legacy libraries

### Using Locally Scoped Object

- Namespace undefined - we can't reuse a global variable name, or else an error will be thrown
- Container needed - containing object to hold the modular conents

### Creating New Functionality

- Make incremental and easily testable changes
- Focus on enhancements rather than debug what used to work


### Using Identical Object Structures

1. New modules don't have to support legacy object structures
2. Useful technique when migrating code is to use the same name
3. Variables resolve locally instead of globally
4. Watch out for references to 'window' objects

***We did not make any changes to any of the functions within the module, we only wrapped the whole library in AMD syntax***

### A Note About "define"

1. You should return a value from a module that uses 'define'
2. The point of a self-contained module is to have on-demand access to the code or objects within
3. There are other options (Data modules)

### Global _KSM Object

1. Provides organization - The calling code doesn't care about the global object, it just needs a reference to the language portion of it
2. That means all the code that uses the legacy structure has to have structural knowledge of where it is in the library
3. Structure changes cause errors

### Benefits of Modules

1. Self-contained and independent from any other code
2. Location of file doesn't matter, as long as Require.js knows where to find it

