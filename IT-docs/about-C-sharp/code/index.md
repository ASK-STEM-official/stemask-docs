---
sidebar_position: 1
description: 大会前に書いてたコード解説
---

# 大会前に書いてたコードの解説

## ファイル構造
```
shift_making_man
- Proglam.cs
- DataAccessFacade.cs
    Controllers
        shiftService
            - ShiftCreationService.cs
            - ShiftModificationService.cs
            - ShiftOptimizationService.cs
            - ShiftSchedulerController.cs
            - ShiftValidationService.cs
        - AuthController.cs
    Data
        Implementations
                - AdminDataAccess.cs
                - AttendanceDataAccess.cs
                - ShiftDataAccess.cs
                - ShiftRequestDataAccess.cs
                - StaffDataAccess.cs
                - StoreDataAccess.cs
        Interfaces
                - IAdminDataAccess.cs
                - IAttendanceDataAccess.cs
                - IShiftDataAccess.cs
                - IShiftRequestDataAccess.cs
                - IStaffDataAccess.cs
                - IStoreDataAccess.cs
        Models
            - Admin.cs
            - Attendance.cs
            - Shift.cs
            - ShiftRequest.cs
            - Staff.cs
            - Store.cs
        Views
            - DashboardForm.cs
            - LoginForm.cs
            - MainForm.cs
            - ShiftListForm.cs
            - ShiftSchedulerForm.cs
```

## コード解説
### Proglam.cs
コード全文
```csharp
using System;
using System.Windows.Forms;
using Microsoft.Extensions.DependencyInjection;
using shift_making_man.Controllers;
using shift_making_man.Controllers.ShiftServices;
using shift_making_man.Data;
using shift_making_man.Views;

namespace shift_making_man
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            var serviceProvider = ConfigureServices();
            Application.Run(serviceProvider.GetRequiredService<LoginForm>());
        }

        private static IServiceProvider ConfigureServices()
        {
            var services = new ServiceCollection();

            // データアクセスオブジェクトの登録
            services.AddSingleton<IAdminDataAccess, AdminDataAccess>()
                    .AddSingleton<IShiftDataAccess>(provider =>
                        new ShiftDataAccess("server=localhost;database=19demo;user=root;password=")) 
                    .AddSingleton<IStaffDataAccess, StaffDataAccess>()
                    .AddSingleton<IStoreDataAccess, StoreDataAccess>()
                    .AddSingleton<IShiftRequestDataAccess, ShiftRequestDataAccess>();

            // サービスの登録
            services.AddSingleton<ShiftValidationService>(provider =>
                new ShiftValidationService(
                    provider.GetRequiredService<IStoreDataAccess>(),
                    provider.GetRequiredService<IShiftDataAccess>(),
                    provider.GetRequiredService<IStaffDataAccess>()
                ))
                .AddSingleton<ShiftCreationService>(provider =>
                    new ShiftCreationService(
                        provider.GetRequiredService<IStoreDataAccess>(),
                        provider.GetRequiredService<IStaffDataAccess>(),
                        provider.GetRequiredService<IShiftDataAccess>(),
                        provider.GetRequiredService<IShiftRequestDataAccess>(),
                        provider.GetRequiredService<ShiftValidationService>(),
                        provider.GetRequiredService<ShiftOptimizationService>()
                    ))
                .AddSingleton<ShiftOptimizationService>()
                .AddSingleton<ShiftModificationService>();

            // DataAccessFacadeの登録
            services.AddSingleton<DataAccessFacade>(provider =>
                new DataAccessFacade(
                    provider.GetRequiredService<IAdminDataAccess>(),
                    provider.GetRequiredService<IShiftDataAccess>(),
                    provider.GetRequiredService<IStaffDataAccess>(),
                    provider.GetRequiredService<IStoreDataAccess>(),
                    provider.GetRequiredService<IShiftRequestDataAccess>(),
                    provider.GetRequiredService<ShiftCreationService>(),
                    provider.GetRequiredService<ShiftValidationService>(),
                    provider.GetRequiredService<ShiftOptimizationService>(),
                    provider.GetRequiredService<ShiftModificationService>()
                ));

            // コントローラの登録
            services.AddSingleton<ShiftSchedulerController>(provider =>
                new ShiftSchedulerController(
                    provider.GetRequiredService<ShiftCreationService>(),
                    provider.GetRequiredService<ShiftModificationService>(),
                    provider.GetRequiredService<ShiftValidationService>(),
                    provider.GetRequiredService<ShiftOptimizationService>(),
                    provider.GetRequiredService<IStoreDataAccess>(),
                    provider.GetRequiredService<IShiftDataAccess>()
                ));

            // フォームの登録
            services.AddTransient<LoginForm>()
                    .AddTransient<MainForm>(provider =>
                        new MainForm(provider.GetRequiredService<DataAccessFacade>()))
                    .AddTransient<DashboardForm>(provider =>
                        new DashboardForm(provider.GetRequiredService<DataAccessFacade>()))
                    .AddTransient<ShiftSchedulerForm>(provider =>
                        new ShiftSchedulerForm(
                            provider.GetRequiredService<ShiftSchedulerController>()
                        ));

            return services.BuildServiceProvider();
        }
    }
}

```
#### Mainメゾット
Mainメゾットはアプリケーションの開始地点です。

```csharp
static void Main()
{
    Application.EnableVisualStyles();
    Application.SetCompatibleTextRenderingDefault(false);
    var serviceProvider = ConfigureServices();
    Application.Run(serviceProvider.GetRequiredService<LoginForm>());
}
```
下に示す部分ではアプリケーションの見た目を設定するための構文です。
```csharp
    Application.EnableVisualStyles();
    Application.SetCompatibleTextRenderingDefault(false);
```
サービスプロバイダーとして`var serviceProvider = ConfigureServices();`メゾットを呼び出してます
```csharp
var serviceProvider = ConfigureServices();
```
最後に`LoginForm`を表示してアプリケーションを開始します
```csharp
    Application.Run(serviceProvider.GetRequiredService<LoginForm>());
```

#### ConfigureServices メソッド
```csharp
private static IServiceProvider ConfigureServices()
{
    var services = new ServiceCollection();

    // データアクセスオブジェクトの登録
    services.AddSingleton<IAdminDataAccess, AdminDataAccess>()
            .AddSingleton<IShiftDataAccess>(provider =>
                new ShiftDataAccess("server=localhost;database=19demo;user=root;password=")) 
            .AddSingleton<IStaffDataAccess, StaffDataAccess>()
            .AddSingleton<IStoreDataAccess, StoreDataAccess>()
            .AddSingleton<IShiftRequestDataAccess, ShiftRequestDataAccess>();

    // サービスの登録
    services.AddSingleton<ShiftValidationService>(provider =>
        new ShiftValidationService(
            provider.GetRequiredService<IStoreDataAccess>(),
            provider.GetRequiredService<IShiftDataAccess>(),
            provider.GetRequiredService<IStaffDataAccess>()
        ))
        .AddSingleton<ShiftCreationService>(provider =>
            new ShiftCreationService(
                provider.GetRequiredService<IStoreDataAccess>(),
                provider.GetRequiredService<IStaffDataAccess>(),
                provider.GetRequiredService<IShiftDataAccess>(),
                provider.GetRequiredService<IShiftRequestDataAccess>(),
                provider.GetRequiredService<ShiftValidationService>(),
                provider.GetRequiredService<ShiftOptimizationService>()
            ))
        .AddSingleton<ShiftOptimizationService>()
        .AddSingleton<ShiftModificationService>();

    // DataAccessFacadeの登録
    services.AddSingleton<DataAccessFacade>(provider =>
        new DataAccessFacade(
            provider.GetRequiredService<IAdminDataAccess>(),
            provider.GetRequiredService<IShiftDataAccess>(),
            provider.GetRequiredService<IStaffDataAccess>(),
            provider.GetRequiredService<IStoreDataAccess>(),
            provider.GetRequiredService<IShiftRequestDataAccess>(),
            provider.GetRequiredService<ShiftCreationService>(),
            provider.GetRequiredService<ShiftValidationService>(),
            provider.GetRequiredService<ShiftOptimizationService>(),
            provider.GetRequiredService<ShiftModificationService>()
        ));

    // コントローラの登録
    services.AddSingleton<ShiftSchedulerController>(provider =>
        new ShiftSchedulerController(
            provider.GetRequiredService<ShiftCreationService>(),
            provider.GetRequiredService<ShiftModificationService>(),
            provider.GetRequiredService<ShiftValidationService>(),
            provider.GetRequiredService<ShiftOptimizationService>(),
            provider.GetRequiredService<IStoreDataAccess>(),
            provider.GetRequiredService<IShiftDataAccess>()
        ));

    // フォームの登録
    services.AddTransient<LoginForm>()
            .AddTransient<MainForm>(provider =>
                new MainForm(provider.GetRequiredService<DataAccessFacade>()))
            .AddTransient<DashboardForm>(provider =>
                new DashboardForm(provider.GetRequiredService<DataAccessFacade>()))
            .AddTransient<ShiftSchedulerForm>(provider =>
                new ShiftSchedulerForm(
                    provider.GetRequiredService<ShiftSchedulerController>()
                ));

    return services.BuildServiceProvider();
}
```
データアクセスオブジェクトを登録し、サービスを登録し、DataAccessFacadeを複数のデータアクセスオブジェクトをまとめて扱うオブジェクトを登録して、コントローラ、及びフォームを登録しまくるところです。ダイエットできた気がしてきてる

### DataAccessFacade.cs
```csharp
using shift_making_man.Controllers.ShiftServices;

namespace shift_making_man.Data
{
    public class DataAccessFacade
    {
        public IAdminDataAccess AdminDataAccess { get; }
        public IShiftDataAccess ShiftDataAccess { get; }
        public IStaffDataAccess StaffDataAccess { get; }
        public IAttendanceDataAccess AttendanceDataAccess { get; }
        public IStoreDataAccess StoreDataAccess { get; }
        public IShiftRequestDataAccess ShiftRequestDataAccess { get; }
        public ShiftCreationService ShiftCreationService { get; }
        public ShiftValidationService ShiftValidationService { get; }
        public ShiftOptimizationService ShiftOptimizationService { get; }
        public ShiftModificationService ShiftModificationService { get; }

        public DataAccessFacade(
            IAdminDataAccess adminDataAccess,
            IShiftDataAccess shiftDataAccess,
            IStaffDataAccess staffDataAccess,
            IAttendanceDataAccess attendanceDataAccess,
            IStoreDataAccess storeDataAccess,
            IShiftRequestDataAccess shiftRequestDataAccess,
            ShiftCreationService shiftCreationService,
            ShiftValidationService shiftValidationService,
            ShiftOptimizationService shiftOptimizationService,
            ShiftModificationService shiftModificationService)
        {
            AdminDataAccess = adminDataAccess;
            ShiftDataAccess = shiftDataAccess;
            StaffDataAccess = staffDataAccess;
            AttendanceDataAccess = attendanceDataAccess;
            StoreDataAccess = storeDataAccess;
            ShiftRequestDataAccess = shiftRequestDataAccess;
            ShiftCreationService = shiftCreationService;
            ShiftValidationService = shiftValidationService;
            ShiftOptimizationService = shiftOptimizationService;
            ShiftModificationService = shiftModificationService;
        }

        public DataAccessFacade(IAdminDataAccess adminDataAccess, IShiftDataAccess shiftDataAccess, IStaffDataAccess staffDataAccess, IStoreDataAccess storeDataAccess, IShiftRequestDataAccess shiftRequestDataAccess, ShiftCreationService shiftCreationService, ShiftValidationService shiftValidationService, ShiftOptimizationService shiftOptimizationService, ShiftModificationService shiftModificationService)
        {
            AdminDataAccess = adminDataAccess;
            ShiftDataAccess = shiftDataAccess;
            StaffDataAccess = staffDataAccess;
            StoreDataAccess = storeDataAccess;
            ShiftRequestDataAccess = shiftRequestDataAccess;
            ShiftCreationService = shiftCreationService;
            ShiftValidationService = shiftValidationService;
            ShiftOptimizationService = shiftOptimizationService;
            ShiftModificationService = shiftModificationService;
        }
    }
}

```
データアクセスオブジェクトやらサービスのインスタンスを保持するプロパティコンストラクタが2つあるのはIAttendanceDataAccessがあるやつとないやつで分けちゃったから。ダイエットできるよねポイント高い部分。サブシステムが多くて心が折れたので保守性を高めるためにもファサードにまとめてみた。

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
文字型のところをカラムと対応させて変えてね。

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
こっちはDateTime型を使うためにSystemのusing宣言が必要です。