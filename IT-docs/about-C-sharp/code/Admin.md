---
sidebar_position: 7
description: 19回大会前に書いてたコード解説：Adminログイン関連
---
# Adminログインを構成しているコントローラーとビュー
コントローラーとForm実装を大公開

## Admin権限のログイン用のコントローラー
```csharp
using shift_making_man.Data;
using shift_making_man.Models;

namespace shift_making_man.Controllers
{
    // AuthController クラスは管理者の認証を担当します
    public class AuthController
    {
        // データアクセス用のインターフェース
        private readonly IAdminDataAccess _dataAccess;

        // コンストラクタでデータアクセスの依存性を注入します
        public AuthController(IAdminDataAccess dataAccess)
        {
            _dataAccess = dataAccess;
        }

        // 管理者のログイン処理を行います
        public Admin Login(string username, string password)
        {
            // ユーザー名で管理者情報を取得
            Admin admin = _dataAccess.GetAdminByUsername(username);
            // パスワードが一致するか確認
            if (admin != null && BCrypt.Net.BCrypt.Verify(password, admin.PasswordHash))
            {
                // 一致した場合、管理者情報を返します
                return admin;
            }
            // 一致しない場合、nullを返します
            return null;
        }
    }
}
```

## 