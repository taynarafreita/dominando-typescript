"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 2] = "ADMIN";
    Permission[Permission["USER"] = 3] = "USER";
    Permission[Permission["READONLY"] = 4] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
//# sourceMappingURL=enum.js.map