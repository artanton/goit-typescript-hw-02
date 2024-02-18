/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days{
  sunday= "Sunday",
  monday = "Monday",
  tusday = "Tusday",
  wenesday = "Wensday",
  thursday = 'Thursday',
  friday = 'Friday',
  saturday = 'Saturday',
  }

  function isWeekend (day: Days):boolean{
   if( day=== Days.sunday||day===Days.monday){
    return true
   }
   return false
  }



