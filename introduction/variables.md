# Variables

* Lifecycle of a variable is made of declaration, initialization and atribuittion
    * Declaration register the variable name at the execution context (a.k.a Scope) of a function
    * Initialization puts an initial value of undefined to the variable
    * Atributtion assign a value to the variable

* It's possible to declare a variable using three keywords which are var, let and const.

Keyword | Can be accessed before assignment? | Is function scoped? | Is block scoped? | Can redeclare the variable? | Can reasign a value? 
------- | -------- | ------------------  | ---------------- | --------------------------- | --------------------
**var**     | ✅ | ✅ | 🟥 | ✅    | ✅
**let**     | 🟥 | ✅ | ✅ | 🟥    | ✅
**const**   | 🟥 | ✅ | ✅ | 🟥    | 🟥 

> 🚨 If you declare a variable without a keyword the variable is created in global scope. Never declare a variable without a keyword and avoid the use of var

* An identifier must start with `[a-zA-Z_$]` followed by `[a-zA-Z0-9_$]`