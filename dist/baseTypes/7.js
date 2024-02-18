/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Days;
(function (Days) {
    Days["sunday"] = "Sunday";
    Days["monday"] = "Monday";
    Days["tusday"] = "Tusday";
    Days["wenesday"] = "Wensday";
    Days["thursday"] = "Thursday";
    Days["friday"] = "Friday";
    Days["saturday"] = "Saturday";
})(Days || (Days = {}));
function isWeekend(day) {
    if (day === Days.sunday || day === Days.monday) {
        return true;
    }
    return false;
}
//# sourceMappingURL=7.js.map