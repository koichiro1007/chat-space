## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|account_name|string|null: false
unique: true|
|email|string|null: false,
unique: true|
|password|string|null: false|

### Association
- has_many :groups_users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|member|integer|null: false|
|image|string|null: false|
|text|text|null: false|

### Association
- has_many :groups_users

