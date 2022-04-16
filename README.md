# ProjeKodun API
**ProjeKodun API**, has been developed so that you can use **ProjeKodun** in your own projects.

# getCode() function
With this function, you can access the codes in your **ProjeKodun** account.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.getCode(token, "CODE NAME", function(data){
  console.log(data);
});
```

# deleteCode() function
With this function, you can delete the codes in your **ProjectKodun** account.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.deleteCode(token, "CODE NAME", function(data){
  console.log(data);
});
```

# likeCode() function
With this function, you can like the codes in **ProjeKodun**.

**Note:** The like process takes place in the user's account of the application token.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.likeCode(token, "CODE NAME", function(data){
  console.log(data);
});
```

# getInf() function
With this function, you can access the infrastructure in your **ProjeKodun** account.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.getInf(token, "CODE NAME", function(data){
  console.log(data);
});
```

# deleteInf() function
With this function, you can delete the infrastructure in your **ProjectKodun** account.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.deleteInf(token, "CODE NAME", function(data){
  console.log(data);
});
```

# likeInf() function
With this function, you can like the infrastructure in **ProjeKodun**.

**Note:** The like process takes place in the user's account of the application token.

**Example Usage**
```
const pk = require("projekodun");
const token = "PROJEKODUN APP TOKEN";

pk.likeInf(token, "CODE NAME", function(data){
  console.log(data);
});
```
