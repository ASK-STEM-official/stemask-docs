---
sidebar_position: 4
description: 19回大会前に書いてたコード解説：Model関連
---
# Model関連
SQLのアクセス関連のコード叩くときに楽かなって思って実装したやつ。正直多少楽になったかな???くらい

### Models/Admin.cs
Adminテーブルと対応するデータアクセス層
```csharp
namespace shift_making_man.Models
{
    public class Admin
    {
        public int AdminID { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
    }
}
```
文字型のところをカラムと対応させて変えてね。(n敗)

### Models/Attendance.cs
Attendanceテーブルと対応するデータアクセス層
```csharp
using System;

namespace shift_making_man.Models
{
    public class Attendance
    {
        public int AttendanceID { get; set; }
        public int? StaffID { get; set; } 
        public int? ShiftID { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime? CheckOutTime { get; set; }
    }
}

```
こっちはDateTime型を使うためにSystemのusing宣言が必要です。(n敗)
string型とint型なら何もなくても動作するのでそのノリで書いたら怒られた。

### Models/Shift.cs
Shiftテーブルと対応するデータアクセス層
```csharp
using System;

namespace shift_making_man.Models
{
    public class Shift
    {
        public int ShiftID { get; set; }
        public int? StaffID { get; set; }
        public DateTime ShiftDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int Status { get; set; }
        public int? StoreID { get; set; }

        public Staff Staff { get; set; }
    }
}
```
### Models/ShiftRequest.cs
ShiftRequestテーブルと対応するデータアクセス層
```csharp
using System;

namespace shift_making_man.Models
{
    public class ShiftRequest
    {
        public int RequestID { get; set; }
        public int StoreID { get; set; }
        public int? StaffID { get; set; }
        public int? OriginalShiftID { get; set; }
        public DateTime RequestDate { get; set; }
        public int Status { get; set; } 
        public DateTime? RequestedShiftDate { get; set; }
        public TimeSpan? RequestedStartTime { get; set; }
        public TimeSpan? RequestedEndTime { get; set; }
    }
}

```

データ型の後についてる「?」はNullである場合を示すやつ。OriginalShiftIDはNullを許容するのは、OriginalShiftIDがNullの場合は新規作成、何らかの値がある場合はShiftテーブルを参照してシフトの変更を行うことができると理解できるが、StaffIDがNullである必要性とは????となってると思う。これはその日だけ働く人とかいうイレギュラーがあるかもしれないってChatGPTに唆されたからああいうプロパティになってる。おかげでnull許容してるから直接intにできねえんだけど!って何度もVisualStudioに怒られてる。ごめんね

### MOdels/Staff.cs